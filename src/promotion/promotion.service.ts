import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Promotion } from './entities/promotion.entity';
import path from 'path';
import fs from 'fs';

@Injectable()
export class PromotionService {
  constructor(
    @InjectModel(Promotion)
    private readonly promotionModel: typeof Promotion,
  ) {}

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;

    try {
      const results = await this.promotionModel.findAll({
        limit: Number(limit),
        offset,
      });

      const total = await this.promotionModel.count();
      const totalPages = Math.ceil(total / limit);

      return {
        results,
        total,
        totalPages,
      };
    } catch (error) {
      throw new Error('Error al obtener las promociones' + error);
    }
  }

  findOne(id: number) {
    return this.promotionModel.findOne({
      where: { incremento: id },
    });
  }

  async upsert(
    updatePromotionDto: Partial<Promotion>,
    image?: Express.Multer.File,
  ) {
    const uploadPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'shared/promotions',
      `${String(updatePromotionDto.imageName).trim()}.${
        image ? image.mimetype.split('/')[1] : 'jpg'
      }`,
    );

    try {
      const existingCategory = await this.promotionModel.findOne({
        where: {
          rowIndex: updatePromotionDto.rowIndex,
          columnIndex: updatePromotionDto.columnIndex,
        },
      });

      if (existingCategory) {
        await existingCategory.update(updatePromotionDto);

        if (image) {
          if (fs.existsSync(uploadPath)) {
            fs.unlinkSync(uploadPath);
          }
          fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
          fs.writeFileSync(uploadPath, image.buffer);
        }
      } else {
        await this.promotionModel.create(updatePromotionDto);
        if (image) {
          fs.mkdirSync(path.dirname(uploadPath), { recursive: true });
          fs.writeFileSync(uploadPath, image.buffer);
        }
      }

      return {
        message: 'Categoría procesada exitosamente',
        category: updatePromotionDto,
      };
    } catch (error) {
      throw new HttpException(
        'Error al procesar la categoría',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  remove(updatePromotionDto: Partial<Promotion>) {
    console.log(updatePromotionDto);

    return this.promotionModel.destroy({
      where: {
        rowIndex: updatePromotionDto.rowIndex,
        columnIndex: updatePromotionDto.columnIndex,
      },
    });
  }
}
