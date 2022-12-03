import { Body, Controller, Get, Post } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { GetCurrentUser } from 'src/common/decorators';
import { TicketDto } from './dto';
import { TicketService } from './ticket.service';

@Controller('tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}
  //Create ticket dto
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async addTicket(
    @Body() dto: TicketDto,
    @GetCurrentUser('sub') userId: number,
  ) {
    return await this.ticketService.AddTicket(userId, dto);
  }
  @Get('getUserTickets')
  async GetTickets(@GetCurrentUser('sub') userId: number) {
    return await this.ticketService.getUserTickets(userId);
  }
}
