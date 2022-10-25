import { Injectable } from '@nestjs/common';
import { networkInterfaces } from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello JomnoiZ';
  }
  getIp(): string[] {
    const nets = networkInterfaces();
    const results = Object.create(null);

    for (const name of Object.keys(nets)) {
      for (const net of nets[name]) {
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
        if (net.family === familyV4Value && !net.internal) {
          if (!results[name]) {
            results[name] = [];
          }
          results[name].push(net.address);
        }
      }
    }
    return results;
  }
}
