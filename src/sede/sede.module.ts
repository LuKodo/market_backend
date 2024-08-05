import { Module } from '@nestjs/common';
import { SedeService } from './sede.service';
import { SedeController } from './sede.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Sede } from './entities/sede.entity';

@Module({
  imports: [
    MikroOrmModule.forFeature({
      entities: [Sede],
    }),
  ],
  controllers: [SedeController],
  providers: [SedeService],
})
export class SedeModule {}
