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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const store_service_1 = require("./store.service");
let StoreController = class StoreController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    getInventory() {
        return this.storeService.getInventory();
    }
    getInventoryItemByName(name) {
        return this.storeService.getInventoryItemByName(name);
    }
    deleteInventoryItem(name) {
        return this.storeService.deleteInventoryItem(name);
    }
    upsertInventoryItem(name, amount) {
        return this.storeService.upsertInventoryItem(name, amount);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StoreController.prototype, "getInventory", null);
__decorate([
    common_1.Get('/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], StoreController.prototype, "getInventoryItemByName", null);
__decorate([
    common_1.Delete('/:name'),
    __param(0, common_1.Param('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], StoreController.prototype, "deleteInventoryItem", null);
__decorate([
    common_1.Put('/:name'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    swagger_1.ApiConsumes('text/plain'),
    __param(0, common_1.Param('name')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], StoreController.prototype, "upsertInventoryItem", null);
StoreController = __decorate([
    common_1.Controller('store'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreController);
exports.StoreController = StoreController;
//# sourceMappingURL=store.controller.js.map