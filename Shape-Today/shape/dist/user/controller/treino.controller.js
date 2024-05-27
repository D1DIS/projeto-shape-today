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
exports.TreinoController = void 0;
const common_1 = require("@nestjs/common");
const treino_service_1 = require("../service/treino.service");
const treino_dto_1 = require("../dto/treino.dto");
let TreinoController = class TreinoController {
    constructor(treinoService) {
        this.treinoService = treinoService;
    }
    async create(createTreinoDto) {
        return await this.treinoService.create(createTreinoDto);
    }
    async findAll() {
        return await this.treinoService.findAll();
    }
    async findOne(id) {
        return await this.treinoService.findOne(id);
    }
    async update(id, updateTreinoDto) {
        return await this.treinoService.update(id, updateTreinoDto);
    }
    async remove(id) {
        return await this.treinoService.remove(id);
    }
};
exports.TreinoController = TreinoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [treino_dto_1.CreateTreinoDto]),
    __metadata("design:returntype", Promise)
], TreinoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TreinoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreinoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, treino_dto_1.UpdateTreinoDto]),
    __metadata("design:returntype", Promise)
], TreinoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TreinoController.prototype, "remove", null);
exports.TreinoController = TreinoController = __decorate([
    (0, common_1.Controller)("treino"),
    __metadata("design:paramtypes", [treino_service_1.TreinoService])
], TreinoController);
//# sourceMappingURL=treino.controller.js.map