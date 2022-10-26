import { Request } from 'express';

export interface AuthGuardRequest extends Request {
  email: string;
}
