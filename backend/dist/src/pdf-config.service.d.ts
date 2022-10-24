import { PDFModuleOptions, PDFOptionsFactory } from '@t00nday/nestjs-pdf';
export declare class PdfConfigService implements PDFOptionsFactory {
    createPdfOptions(): PDFModuleOptions;
}
