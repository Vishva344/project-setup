import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('authentication')
export class AuthController {
  constructor(private readonly authenticationService: AuthService) {}
}
