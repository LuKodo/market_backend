import { Controller, Get, Query } from '@nestjs/common';
import { ProductofinalService } from './productofinal.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('productofinal')
export class ProductofinalController {
  constructor(private readonly productofinalService: ProductofinalService) {}

  @Get()
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('sede') sede: string,
    @Query('categoria') categoria: string,
  ) {
    return this.productofinalService.getAll(page, limit, sede, categoria);
  }
}
