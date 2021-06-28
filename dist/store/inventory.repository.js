"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRepository = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
class InventoryRepository {
    constructor() {
        this.inventoryDBPath = __dirname + '/../../src/store/inventoryDB.json';
        this.dbErrorMessage = 'Error Connecting to the DB';
    }
    getDataFromMockDatabase() {
        try {
            const fileData = JSON.parse(fs.readFileSync(this.inventoryDBPath, 'utf8'));
            return fileData;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(this.dbErrorMessage, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    writeDatatoDB(data) {
        try {
            JSON.stringify(data);
            fs.writeFileSync(this.inventoryDBPath, JSON.stringify(data));
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(this.dbErrorMessage, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    getAllInventoryItems() {
        return this.getDataFromMockDatabase();
    }
    getSingleInventoryItem(name) {
        const data = this.getDataFromMockDatabase();
        return data[name];
    }
    upsertInventoryItem(name, amount) {
        const data = this.getDataFromMockDatabase();
        data[name] = amount;
        this.writeDatatoDB(data);
        return 'SUCCESS';
    }
    deleteInventoryItem(name) {
        const data = this.getDataFromMockDatabase();
        if (data[name]) {
            delete data[name];
            return this.writeDatatoDB(data);
        }
        else {
            throw new common_1.HttpException('Item does not exist in DB', common_1.HttpStatus.NOT_FOUND);
        }
    }
}
exports.InventoryRepository = InventoryRepository;
//# sourceMappingURL=inventory.repository.js.map