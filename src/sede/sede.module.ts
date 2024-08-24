import { Module } from '@nestjs/common';
import { SedeService } from './sede.service';
import { SedeController } from './sede.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sede } from './entities/sede.entity';

@Module({
  imports: [SequelizeModule.forFeature([Sede])],
  controllers: [SedeController],
  providers: [SedeService],
})
export class SedeModule {}
