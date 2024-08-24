import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Carousel } from './entities/carousel.entity';
import path from 'path';
import fs from 'fs';

@Injectable()
export class CarouselService {
  constructor(
    @InjectModel(Carousel)
    private readonly repository: typeof Carousel,
  ) {}

  async upsert(CarouselData: Partial<Carousel>) {
    try {
      const existingcarouselItem = await this.repository.findByPk(
        CarouselData.id,
      );

      if (existingcarouselItem) {
        await existingcarouselItem.update(CarouselData);
      } else {
        await this.repository.create(CarouselData);
      }

      return {
        message: 'El item del carrusel fue procesado exitosamente',
        carouselItem: CarouselData,
      };
    } catch (error) {
      throw new HttpException(
        'Error al procesar el item del carrusel',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findAll() {
    return this.repository.findAll();
  }

  async remove(id: number) {
    return this.repository.destroy({ where: { id } });
  }
}
