import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class TicketDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  description: string;
  @IsDateString()
  startTime: Date;
  @IsDateString()
  endTime: Date;
}
