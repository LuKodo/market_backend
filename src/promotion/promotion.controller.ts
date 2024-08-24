import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { ApiTags } from '@nestjs/swagger';
import { Promotion } from './entities/promotion.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Promociones')
@Controller('promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  upsert(
    @Body() createPromotionDto: Partial<Promotion>,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.promotionService.upsert(createPromotionDto, image);
  }

  @Get(':page/:limit')
  findAll(@Param('page') page: number, @Param('limit') limit: number) {
    return this.promotionService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.promotionService.findOne(+id);
  }

  @Get('delete/:rowIndex/:columnIndex')
  remove(@Param('rowIndex') rowIndex: number, @Param('columnIndex') columnIndex: number) {
    return this.promotionService.remove({ rowIndex, columnIndex });
  }
}
