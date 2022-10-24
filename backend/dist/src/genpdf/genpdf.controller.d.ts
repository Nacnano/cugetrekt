import { GenpdfService } from './genpdf.service';
export declare class GenpdfController {
    private genpdfService;
    constructor(genpdfService: GenpdfService);
    generatePdf(id: string): string;
}
