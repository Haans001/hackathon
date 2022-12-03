import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class AddUserToOrganisationDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  organisationId: number;
}
