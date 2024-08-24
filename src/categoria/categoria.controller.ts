import { Body, Controller, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoriaService } from './categoria.service';
import { ApiTags } from '@nestjs/swagger';
import { Categoria } from './entities/categoria.entity';

@ApiTags('Categorias')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get('/')
  find() {
    return this.categoriaService.find();
  }

  @Get('/:page/:limit')
  findPage(@Param('page') page: number, @Param('limit') limit: number) {
    return this.categoriaService.findPage(page, limit);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async upsert(
    @Body() createCategoryDto: Partial<Categoria>,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.categoriaService.upsert(createCategoryDto, image);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: Partial<Categoria>) {
    return this.categoriaService.update(id, updateCategoryDto);
  }
}
