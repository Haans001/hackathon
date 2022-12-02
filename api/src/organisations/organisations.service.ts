import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrganisationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createOrganisation(name: string, userId: number) {
    const data = await this.prisma.organisation.create({
      data: {
        name,
        owner: userId,
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
    console.log(data);
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
        owner: true,
      },
    });

    if (organisation.owner !== userId) {
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
    });
    return data;
  }
}
