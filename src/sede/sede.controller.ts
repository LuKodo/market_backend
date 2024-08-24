import { Controller, Get, Param } from '@nestjs/common';
import { SedeService } from './sede.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sedes')
@Controller('sede')
export class SedeController {
  constructor(private readonly sedeService: SedeService) {}

  @Get()
  findAll() {
    return this.sedeService.findAll();
  }

  @Get(':prefijo')
  findOne(@Param('prefijo') prefijo: string) {
    return this.sedeService.findOne(prefijo);
  }
}
