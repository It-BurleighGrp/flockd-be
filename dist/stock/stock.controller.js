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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
const types_1 = require("../types");
const swagger_1 = require("@nestjs/swagger");
let StockController = class StockController {
    constructor(stock) {
        this.stock = stock;
    }
    createStockResource(dto) {
        return this.stock.createStockResource(dto);
    }
    getStockResource() {
        return this.stock.getStockResource();
    }
    updateStockResource(dto) {
        return this.stock.updateStockResource();
    }
    deleteStockResource(id) {
        return this.stock.deleteStockResource(id);
    }
};
exports.StockController = StockController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create new stock instance' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: '' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: '' }),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.Stock]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "createStockResource", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockController.prototype, "getStockResource", null);
__decorate([
    (0, common_1.Put)('updateResource'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.Stock]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "updateStockResource", null);
__decorate([
    (0, common_1.Delete)('create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "deleteStockResource", null);
exports.StockController = StockController = __decorate([
    (0, swagger_1.ApiTags)('Stock'),
    (0, common_1.Controller)('stock'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map