import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganisationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrganisation(name: string, userId: number) {
    const data = await this.prisma.organisation.create({
      data: {
        name,
        owner: {
          connect: {
            id: userId,
          },
        },
        users: {
          create: [
            {
              user: {
                connect: {
                  id: userId,
                },
              },
            },
          ],
        },
      },
    });
    return data;
  }

  async getOrganisation(organisationId: number) {
    const data = await this.prisma.organisation.findUnique({
      where: {
        id: organisationId,
      },
      include: {
        owner: {
          select: {
            name: true,
            surname: true,
          },
        },
        tickets: {
          select: {
            startTime: true,
            endTime: true,
            title: true,
            id: true,
            user: {
              select: {
                id: true,
                name: true,
                surname: true,
              },
            },
          },
        },
        users: {
          select: {
            user: {
              select: {
                id: true,
                name: true,
                surname: true,
              },
            },
          },
        },
      },
    });
    return data;
  }

  async addUserToOrganisation(
    userId: number,
    addedUserId: number,
    organisationId: number,
  ) {
    const organisation = await this.prisma.organisation.findUnique({
      where: {
        id: organisationId,
      },
      select: {
        owner: {
          select: {
            id: true,
          },
        },
      },
    });

    if (organisation.owner.id !== userId) {
      throw new Error('You are not the owner of this organisation');
    }

    const data = await this.prisma.organisation.update({
      where: {
        id: organisationId,
      },
      data: {
        users: {
          create: [
            {
              user: {
                connect: {
                  id: addedUserId,
                },
              },
            },
          ],
        },
      },
    });
    return data;
  }

  async getOrganisations(userId: number) {
    const data = await this.prisma.organisation.findMany({
      where: {
        users: {
          some: {
            userId,
          },
        },
      },
      include: {
        users: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                surname: true,
              },
            },
          },
        },
        owner: {
          select: {
            name: true,
            surname: true,
            id: true,
          },
        },
      },
    });

    return data;
  }
}
