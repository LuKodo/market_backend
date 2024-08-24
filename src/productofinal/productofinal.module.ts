import { Module } from '@nestjs/common';
import { ProductofinalService } from './productofinal.service';
import { ProductofinalController } from './productofinal.controller';
import { Productofinal } from './entities/productofinal.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([Productofinal]),
  ],
  controllers: [ProductofinalController],
  providers: [ProductofinalService],
})
export class ProductofinalModule {}
