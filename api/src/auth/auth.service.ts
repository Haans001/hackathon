import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto, SignupDto } from './dto';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async signup({ email, password, name, surname }: SignupDto) {
    const hash = await argon2.hash(password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          hash,
          name,
          surname,
        },
      });

      delete user.hash;

      const accessToken = await this.getAccessToken(user.id, user.email);

      return { user, accessToken };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Użytownik z tym emailem już istnieje');
        }
      }
    }
  }

  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new ForbiddenException('Uzytkownik nie istnieje');
    }

    const valid = await argon2.verify(user.hash, password);

    if (!valid) {
      throw new ForbiddenException('Niepoprawne hasło');
    }

    delete user.hash;

    const accessToken = await this.getAccessToken(user.id, user.email);
    return { user, accessToken };
  }

  async validateUser(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return null;
    }

    delete user.hash;

    return user;
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
