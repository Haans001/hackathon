import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    // await this.prisma.user.create({
    //   data: {
    //     email: 'jan.rapcz@interia.pl',
    //     name: 'Jan',
    //     surname: 'Rapacz',
    //     hash: '123',
    //   },
    // });
    return this.appService.getHello();
  }
}
