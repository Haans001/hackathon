import { Body, Controller, Get, Post } from '@nestjs/common';
import { HttpCode, Put } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { GetCurrentUser } from 'src/common/decorators';
import { ApproveOrDisapproveTicketDto, TicketDto } from './dto';
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

  @Put('approveOrDisapproveTicket')
  async approveOrDisapproveTicket(@Body() data: ApproveOrDisapproveTicketDto) {
    return await this.ticketService.approveOrDisapproveTicket(
      data.ticketId,
      data.status,
    );
  }

  @Post('upvote')
  async upvote(
    @GetCurrentUser('sub') userId: number,
    @Body('ticketId') ticketId: number,
    @Body('status') status: boolean,
  ) {
    return await this.ticketService.upvoteTicket(userId, ticketId, status);
  }
}
