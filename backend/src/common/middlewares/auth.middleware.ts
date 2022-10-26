import {
  BadRequestException,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}

  use(req: any, res: any, next: () => void) {
    if (!req.headers.authorization) {
      next();
      return;
    }

    const token = req.headers.authorization.split(' ');
    if (token.length < 2 || token[0].toLowerCase() !== 'bearer')
      throw new BadRequestException('Authorization header is invalid');

    const username = this.authService.validateUser(token[1]);
    if (!username) throw new UnauthorizedException('Bearer token is invalid');

    req.username = username;
    next();
  }
}
