"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenpdfService = void 0;
const common_1 = require("@nestjs/common");
let GenpdfService = class GenpdfService {
    generatePdf(fileName) {
        const FPDF = require('node-fpdf');
        const pdf = new FPDF('P', 'mm', 'A4');
        pdf.AddPage();
        pdf.SetFont('Arial', 'B', 12);
        pdf.Text(75, 150, "JomnoiZ");
        pdf.Image('cannonbolt.jpg', 0, 0, 60, 0, '', '');
        pdf.Output('F', 'src/keeppdf/' + fileName + '.pdf');
        return 'Done!';
    }
};
GenpdfService = __decorate([
    (0, common_1.Injectable)()
], GenpdfService);
exports.GenpdfService = GenpdfService;
//# sourceMappingURL=genpdf.service.js.map