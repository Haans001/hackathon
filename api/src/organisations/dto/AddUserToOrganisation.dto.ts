import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddUserToOrganisationDto {
  @IsNotEmpty()
  @IsNumber()
  addedUserId: number;

  @IsNotEmpty()
  @IsNumber()
  organisationId: number;
}
