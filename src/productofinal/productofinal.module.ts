import { Module } from '@nestjs/common';
import { ProductofinalService } from './productofinal.service';
import { ProductofinalController } from './productofinal.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Productofinal } from './entities/productofinal.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({ entities: [Productofinal] }),
  ],
  controllers: [ProductofinalController],
  providers: [ProductofinalService],
})
export class ProductofinalModule {}
