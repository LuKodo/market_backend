import {
  Module,
} from '@nestjs/common';

import { ProductofinalModule } from './productofinal/productofinal.module';
import { SedeModule } from './sede/sede.module';
import { CategoriaModule } from './categoria/categoria.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Productofinal } from './productofinal/entities/productofinal.entity';
import { Sede } from './sede/entities/sede.entity';
import { Categoria } from './categoria/entities/categoria.entity';
import { FilesController } from './files/files.controller';
import { PromotionModule } from './promotion/promotion.module';
import { CarouselModule } from './carousel/carousel.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '123456',
      database: 'virtualstore',
      models: [Productofinal, Sede, Categoria],
      autoLoadModels: true,
      synchronize: true,
    }),
    ProductofinalModule,
    SedeModule,
    CategoriaModule,
    PromotionModule,
    CarouselModule,
    UserModule,
  ],
  controllers: [FilesController],
})
export class AppModule {}
