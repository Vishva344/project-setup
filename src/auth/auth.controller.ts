import { Controller } from '@nestjs/common';
import { AuthenticationService } from './auth.service';

@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}
}
