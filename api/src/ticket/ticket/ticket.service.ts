import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketDto } from './dto';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async AddTicket(userid: number, dto: TicketDto) {
    console.log(dto);
    const ticket = await this.prisma.ticket.create({
      data: {
        title: dto.title,
        description: dto.description,
        startTime: dto.startTime,
        endTime: dto.endTime,
        user: {
          connect: {
            id: userid,
          },
        },
      },
    });
    return ticket;
  }

  async getUserTickets(userid: number) {
    const users = this.prisma.ticket.findMany({
      where: {
        userId: userid,
      },
    });
    console.log(users);
    return users;
  }
}
