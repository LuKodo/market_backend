import { Controller, Get, Param } from '@nestjs/common';
import { ProductofinalService } from './productofinal.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('PRODUCTO FINAL')
@Controller('productofinal')
export class ProductofinalController {
  constructor(private readonly productofinalService: ProductofinalService) {}

  @Get('/category')
  findAllCategories() {
    return this.productofinalService.findAllCategories();
  }

  @Get(':page/:limit/:sede/:categoria')
  findAll(
    @Param('page') page: number,
    @Param('limit') limit: number,
    @Param('sede') sede: string,
    @Param('categoria') categoria: string,
  ) {
    return this.productofinalService.getAll(page, limit, sede, categoria);
  }
}
