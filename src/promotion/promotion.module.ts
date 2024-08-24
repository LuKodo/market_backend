import { Module } from '@nestjs/common';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Promotion } from './entities/promotion.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Promotion]),
  ],
  controllers: [PromotionController],
  providers: [PromotionService],
})
export class PromotionModule {}
