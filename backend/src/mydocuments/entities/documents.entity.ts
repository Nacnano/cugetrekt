import { ApiProperty } from '@nestjs/swagger';
import { DocumentType } from '@prisma/client';

export class DocumentsEntity implements DocumentType {
  @ApiProperty()
  id: number;

  @ApiProperty()
  docName: string;
}
