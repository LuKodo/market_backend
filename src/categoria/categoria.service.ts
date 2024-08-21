import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import path from 'path';
import fs from 'fs';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly repository: EntityRepository<Categoria>,
  ) {}

  async find() {
    return this.repository.findAll();
  }

  async create(
    createCategoryDto: CreateCategoryDto,
    image: Express.Multer.File,
  ) {
    const uploadPath = path.join(
      __dirname,
      '..',
      '..',
      'uploads',
      createCategoryDto.category + '.' + image.mimetype.split('/')[1],
    );

    fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
    fs.writeFileSync(uploadPath, image.buffer);

    return {
      message: 'Categoría creada exitosamente',
      category: createCategoryDto.category,
      imagUrl: 'uploads/' + createCategoryDto.category + '.' + image.mimetype.split('/')[1],
    };
  }
}
