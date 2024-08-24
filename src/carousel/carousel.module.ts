import { Module } from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { CarouselController } from './carousel.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Carousel } from './entities/carousel.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Carousel]),
  ],
  controllers: [CarouselController],
  providers: [CarouselService],
})
export class CarouselModule {}
