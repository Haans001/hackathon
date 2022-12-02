import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Public } from 'src/common/decorators';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() dto: AuthDto) {
    const accessToken = await this.authService.signup(dto);
    return accessToken;
  }

  @Get('getUsers')
  @HttpCode(HttpStatus.OK)
  async getUser() {
    return { success: true };
  }

  @Post('signin')
  @Public()
  @HttpCode(HttpStatus.OK)
  async signin(@Body() dto: AuthDto) {
    const accessToken = await this.authService.login(dto);
    return accessToken;
  }
}
