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
exports.GenpdfController = void 0;
const common_1 = require("@nestjs/common");
const genpdf_service_1 = require("./genpdf.service");
let GenpdfController = class GenpdfController {
    constructor(genpdfService) {
        this.genpdfService = genpdfService;
    }
    generatePdf(id) {
        return this.genpdfService.generatePdf(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], GenpdfController.prototype, "generatePdf", null);
GenpdfController = __decorate([
    (0, common_1.Controller)('genpdf'),
    __metadata("design:paramtypes", [genpdf_service_1.GenpdfService])
], GenpdfController);
exports.GenpdfController = GenpdfController;
//# sourceMappingURL=genpdf.controller.js.map