import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Categoria } from './entities/categoria.entity';
import path from 'path';
import fs from 'fs';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectModel(Categoria)
    private repository: typeof Categoria,
  ) {}

  async find(): Promise<Categoria[]> {
    return this.repository.findAll<Categoria>({
      attributes: ['incremento', 'descripcion', 'imagen', 'estado'],
      where: { estado: true },
    });
  }

  async findPage(page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;

    try {
      const results = await this.repository.findAll({
        limit: Number(limit),
        offset,
        attributes: ['incremento', 'descripcion', 'imagen', 'estado'],
      });

      const total = await this.repository.count();
      const totalPages = Math.ceil(total / limit);

      return {
        results,
        total,
        totalPages,
      };
    } catch (error) {
      throw new Error('Error al obtener las categorías' + error);
    }
  }

  async upsert(
    createCategoryDto: Partial<Categoria>,
    image?: Express.Multer.File,
  ) {
    const uploadPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'shared/categories',
      `${String(createCategoryDto.descripcion).trim()}.${
        image ? image.mimetype.split('/')[1] : 'jpg'
      }`,
    );

    try {
      const existingCategory = await this.repository.findOne({
        where: { descripcion: createCategoryDto.descripcion },
      });

      if (existingCategory) {
        await existingCategory.update(createCategoryDto);

        if (image) {
          if (fs.existsSync(uploadPath)) {
            fs.unlinkSync(uploadPath);
          }
          fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
          fs.writeFileSync(uploadPath, image.buffer);
        }
      } else {
        const newCategory = await this.repository.create(createCategoryDto);
        if (image) {
          fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
          fs.writeFileSync(uploadPath, image.buffer);
        }
      }

      return {
        message: 'Categoría procesada exitosamente',
        category: createCategoryDto,
      };
    } catch (error) {
      throw new HttpException(
        'Error al procesar la categoría',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateCategoryDto: Partial<Categoria>) {
    try {
      const [affectedRows, categories] = await this.repository.update(
        {
          ...updateCategoryDto,
        },
        {
          where: { incremento: Number(id) },
          returning: true,
        },
      );

      if (affectedRows === 0) {
        throw new HttpException(
          'Categoría no encontrada',
          HttpStatus.NOT_FOUND,
        );
      }

      return categories[0];
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
