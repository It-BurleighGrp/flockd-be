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
exports.ResourceController = void 0;
const common_1 = require("@nestjs/common");
const types_1 = require("../types");
const resource_service_1 = require("./resource.service");
let ResourceController = class ResourceController {
    constructor(resource) {
        this.resource = resource;
    }
    createResource(dto) {
        return this.resource.createResource(dto);
    }
    getResource() {
        return this.resource.getResource();
    }
    getResourceById(id) {
        return this.resource.getResourceById(id);
    }
    updateResource(id, dto) {
        return this.updateResource(id, dto);
    }
    deleteResource(id) {
        return this.deleteResource(id);
    }
};
exports.ResourceController = ResourceController;
__decorate([
    (0, common_1.Post)('resource/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.Resource]),
    __metadata("design:returntype", void 0)
], ResourceController.prototype, "createResource", null);
__decorate([
    (0, common_1.Get)('resource/items'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResourceController.prototype, "getResource", null);
__decorate([
    (0, common_1.Get)('resource/'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourceController.prototype, "getResourceById", null);
__decorate([
    (0, common_1.Put)('resource/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, types_1.Resource]),
    __metadata("design:returntype", void 0)
], ResourceController.prototype, "updateResource", null);
__decorate([
    (0, common_1.Delete)('resource/delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResourceController.prototype, "deleteResource", null);
exports.ResourceController = ResourceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [resource_service_1.ResourceService])
], ResourceController);
//# sourceMappingURL=resource.controller.js.map