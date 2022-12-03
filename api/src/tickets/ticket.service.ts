import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TicketDto } from './dto';

@Injectable()
export class TicketService {
  constructor(private readonly prisma: PrismaService) {}

  async AddTicket(userid: number, dto: TicketDto) {
    const ticket = await this.prisma.ticket.create({
      data: {
        title: dto.title,
        startTime: dto.startTime,
        endTime: dto.endTime,
        organisation: {
          connect: {
            id: dto.organisationId,
          },
        },
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
      select: {
        title: true,
        startTime: true,
        endTime: true,
        organisation: {
          select: {
            name: true,
          },
        },
      },
    });
    return users;
  }
}
