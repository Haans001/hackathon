import { Module } from '@nestjs/common';
import { OrganisationsController } from './organisations.controller';
import { OrganisationsService } from './organisations.service';

@Module({
  providers: [OrganisationsService],
  controllers: [OrganisationsController],
})
export class OrganisationsModule {}
