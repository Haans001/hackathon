import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup({ email, password }: AuthDto) {
    const hash = await argon2.hash(password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          hash,
        },
      });

      const accessToken = await this.getAccessToken(user.id, user.email);

      return accessToken;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('User with this email already exists');
        }
      }
    }
  }

  async login({ email, password }: AuthDto) {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new ForbiddenException('User with this email does not exist');
    }

    const valid = await argon2.verify(user.hash, password);

    if (!valid) {
      throw new ForbiddenException('Invalid password');
    }

    const accessToken = await this.getAccessToken(user.id, user.email);
    return accessToken;
  }

  async getAccessToken(userId: number, email: string) {
    return await this.jwt.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: 'at-secret',
        expiresIn: '7d',
      },
    );
  }
}
