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
exports.ResourceService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
let ResourceService = class ResourceService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async createResource(dto) {
        try {
            await this.prisma.resource.create({
                data: {
                    name: dto.name,
                    model: dto.model,
                    type: dto.type,
                    serial: dto.serial,
                    photo: dto.photo,
                    responsible: dto.responsible,
                    others: dto.others,
                    status: dto.status,
                    localization: dto.localization ? dto.localization : null,
                    price: dto.price ? dto.price : null
                }
            });
            return {
                message: 'The resource was created successfully'
            };
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientValidationError) {
                throw new common_1.HttpException('Bad Request', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new Error(error);
        }
    }
    async getResource() {
        try {
            const resource = await this.prisma.resource.findMany();
            return resource;
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientValidationError) {
                throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
            }
            throw new Error(error);
        }
    }
    async getResourceById(id) {
        try {
            const resource = await this.prisma.resource.findUnique({ where: { id: Number(id) } });
            if (Object.keys(resource).length > 0) {
                return resource;
            }
            else {
                throw new common_1.HttpException('Not Found', common_1.HttpStatus.NOT_FOUND);
            }
        }
        catch (error) {
            throw new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateResource(id, dto) {
        const { localization, model, name, others, photo, price, responsible, serial, status, type } = dto;
        console.log('bateu antes');
        try {
            const currentData = await this.prisma.resource.findUnique({
                where: { id: Number(id) }
            });
            console.log('bateu aqui>>>', currentData);
            const resource = await this.prisma.resource.update({
                where: { id: Number(id) },
                data: {
                    id: Number(id),
                    localization,
                    model,
                    name,
                    others,
                    photo,
                    price,
                    responsible,
                    serial,
                    status,
                    type
                }
            });
            return resource;
        }
        catch (error) {
            throw new common_1.HttpException('Not Acceptable', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
    async deleteResource(id) {
        try {
            return this.prisma.resource.delete({ where: { id: Number(id) } });
        }
        catch (error) {
            throw new common_1.HttpException('Not Acceptable', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
    }
};
exports.ResourceService = ResourceService;
exports.ResourceService = ResourceService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, config_1.ConfigService])
], ResourceService);
//# sourceMappingURL=resource.service.js.map