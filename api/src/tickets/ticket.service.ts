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

  async approveOrDisapproveTicket(ticketId: number, status: boolean) {
    const ticket = await this.prisma.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        approved: status,
      },
    });
    return ticket;
  }

  async upvoteTicket(userid: number, ticketid: number, stat: boolean) {
    const vote = await this.prisma.vote.findMany({
      where: {
        ticketId: ticketid,
        userId: userid,
      },
    });

    if (vote.length > 0 && vote[0].status === stat) {
      return true;
    } else {
      if (vote.length > 0) {
        await this.prisma.vote.update({
          where: {
            id: vote[0].id,
          },
          data: {
            status: stat,
          },
        });
      } else {
        await this.prisma.vote.create({
          data: {
            status: stat,
            ticket: {
              connect: {
                id: ticketid,
              },
            },
            user: {
              connect: {
                id: userid,
              },
            },
          },
        });
      }
    }

    return true;
  }
}
