import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  providers: [TicketService],
  controllers: [TicketController],
})
export class TicketModule {}
