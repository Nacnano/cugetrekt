import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello JomnoiZ';
  }

  sayJomnoi(id: string): string {
    return `I want to say ${id}.`;
  }  
}
