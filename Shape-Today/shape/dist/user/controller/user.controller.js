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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../service/user.service");
const user_dto_1 = require("../dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_strategy_1 = require("../../auth/guard/jwt-auth.guard.strategy");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    async findAll() {
        return this.userService.findAll();
    }
    async findOne(id) {
        return this.userService.findOne(id);
    }
    async update(id, updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
    async delete(id) {
        return this.userService.delete(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, swagger_1.ApiResponse)({ status: 400, description: "Dados inválidos." }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Listar todos os usuários" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Lista de usuários recuperada com sucesso.",
        type: [user_dto_1.CreateUserDto],
    }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Obter um usuário pelo ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Usuário recuperado com sucesso.",
        type: user_dto_1.CreateUserDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Usuário não encontrado." }),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Criar um novo usuário" }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: "Usuário criado com sucesso.",
        type: user_dto_1.CreateUserDto,
    }),
    (0, swagger_1.ApiOperation)({ summary: "Atualizar um usuário pelo ID" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Usuário atualizado com sucesso.",
        type: user_dto_1.UpdateUserDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Usuário não encontrado." }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Dados inválidos." }),
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "Deletar um usuário pelo ID" }),
    (0, swagger_1.ApiResponse)({ status: 204, description: "Usuário deletado com sucesso." }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Usuário não encontrado." }),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_strategy_1.JwtAuthGuard),
    (0, common_1.Controller)("user"),
    (0, swagger_1.ApiTags)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map