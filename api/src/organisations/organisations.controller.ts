import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GetCurrentUser } from 'src/common/decorators';
import { AddUserToOrganisationDto } from './dto';
import { CreateOrganisationDto } from './dto/CreateOrganisation.dto';
import { OrganisationsService } from './organisations.service';

@Controller('organisations')
export class OrganisationsController {
  constructor(private readonly organisationsService: OrganisationsService) {}
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() data: CreateOrganisationDto,
    @GetCurrentUser('sub') userId: number,
  ) {
    const organisation = await this.organisationsService.createOrganisation(
      data.name,
      userId,
    );
    return organisation;
  }

  @Get('getAll')
  @HttpCode(HttpStatus.OK)
  async getUserOrganisations(@GetCurrentUser('sub') userId: number) {
    const organisations = await this.organisationsService.getOrganisations(
      userId,
    );
    return organisations;
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getOrganisation(@Param('id') id: string) {
    const organisation = await this.organisationsService.getOrganisation(
      parseInt(id),
    );
    return organisation;
  }

  @Put('addUser')
  @HttpCode(HttpStatus.CREATED)
  async addUserToOrganisation(
    @GetCurrentUser('sub') userId: number,
    @Body() data: AddUserToOrganisationDto,
  ) {
    const organisation = await this.organisationsService.addUserToOrganisation(
      userId,
      data.addedUserId,
      data.organisationId,
    );
    return organisation;
  }
}
