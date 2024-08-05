import {
  Module,
} from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { ProductofinalModule } from './productofinal/productofinal.module';
import { SedeModule } from './sede/sede.module';
import config from '../mikro-orm.config';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      ...config,
      autoLoadEntities: true,
    }),
    ProductofinalModule,
    SedeModule,
  ],
})
export class AppModule {}
