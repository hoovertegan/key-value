"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const inventory_repository_1 = require("./inventory.repository");
let StoreService = class StoreService {
    constructor(inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }
    getInventory() {
        return this.inventoryRepository.getAllInventoryItems();
    }
    getInventoryItemByName(name) {
        const data = this.inventoryRepository.getSingleInventoryItem(name);
        if (!data) {
            throw new common_1.HttpException('Item does not exist in Inventory', common_1.HttpStatus.NOT_FOUND);
        }
        return this.inventoryRepository.getSingleInventoryItem(name);
    }
    upsertInventoryItem(name, amount) {
        this.inventoryRepository.upsertInventoryItem(name, amount);
        return `Successfully set Inventory Item: ${name.toUpperCase()} to the amount of ${amount.toUpperCase()}`;
    }
    deleteInventoryItem(name) {
        this.inventoryRepository.deleteInventoryItem(name);
        return `Successfully deleted ${name.toUpperCase()}`;
    }
};
StoreService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [inventory_repository_1.InventoryRepository])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map