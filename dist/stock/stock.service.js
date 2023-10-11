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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const library_1 = require("@prisma/client/runtime/library");
const prisma_service_1 = require("../prisma/prisma.service");
let StockService = class StockService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createStockResource(dto) {
        try {
            await this.prisma.stock.create({
                data: {
                    name: dto.name,
                    quantity: dto.quantity,
                    type: dto.type
                }
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientValidationError) {
                throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new Error(error);
        }
    }
    async getStockResource() {
        try {
            const stockResource = await this.prisma.stock.findMany({
                orderBy: { id: "asc" }
            });
            return stockResource;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientValidationError) {
                throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            throw new Error(error);
        }
    }
    async updateStockResource() { }
    async deleteStockResource(id) {
        try {
            const stockResource = await this.prisma.stock.delete({
                where: {
                    id: Number(id)
                }
            });
            return stockResource;
        }
        catch (error) {
            throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StockService);
//# sourceMappingURL=stock.service.js.map