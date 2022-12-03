import { Body, Controller, Post } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { GetCurrentUser } from 'src/common/decorators';
import { TicketDto } from './dto';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async addTicket(
    @Body() dto: TicketDto,
    @GetCurrentUser('sub') userId: number,
  ) {
    return await this.ticketService.AddTicket(userId, dto);
  }
}
