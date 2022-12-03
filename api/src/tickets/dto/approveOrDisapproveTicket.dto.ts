import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class ApproveOrDisapproveTicketDto {
  @IsNotEmpty()
  @IsBoolean()
  status: boolean;

  @IsNotEmpty()
  @IsNumber()
  ticketId: number;
}
