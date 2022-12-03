import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { GetCurrentUser, Public } from 'src/common/decorators';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() dto: SignupDto) {
    const data = await this.authService.signup(dto);
    return data;
  }

  @Get('getUsers')
  @HttpCode(HttpStatus.OK)
  async getUser() {
    return { success: true };
  }

  @Post('signin')
  @Public()
  @HttpCode(HttpStatus.OK)
  async signin(@Body() dto: LoginDto) {
    const data = await this.authService.login(dto);
    return data;
  }

  @Get('validate')
  @HttpCode(HttpStatus.OK)
  async validate(@GetCurrentUser('sub') userId: number) {
    const user = await this.authService.validateUser(userId);
    return user;
  }
}
