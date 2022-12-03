import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class TicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNumber()
  organisationId: number;

  @IsDateString()
  startTime: Date;

  @IsDateString()
  endTime: Date;
}
