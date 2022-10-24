import { Injectable } from '@nestjs/common';

@Injectable()
export class GenpdfService {
  generatePdf(fileName: string): string {
    const FPDF = require('node-fpdf');
    const pdf = new FPDF('P', 'mm', 'A4');

    pdf.AddPage();
    pdf.SetFont('Arial', 'B', 12);
    pdf.Text(75, 150, "JomnoiZ");
    pdf.Image('cannonbolt.jpg', 0, 0, 60, 0, '', '');
    pdf.Output('F', 'src/keeppdf/' + fileName + '.pdf');
    return 'Done!';
  }
}
