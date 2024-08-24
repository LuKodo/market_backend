import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CarouselService } from './carousel.service';
import { Carousel } from './entities/carousel.entity';

@Controller('carousel')
export class CarouselController {
  constructor(private readonly carouselService: CarouselService) {}

  @Post()
  upsert(
    @Body() createCarouselDto: Partial<Carousel>,
  ) {
    return this.carouselService.upsert(createCarouselDto);
  }

  @Get()
  findAll() {
    return this.carouselService.findAll();
  }

  @Get('delete/:id')
  remove(@Param('id') id: string) {
    return this.carouselService.remove(+id);
  }
}
