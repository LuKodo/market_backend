import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Categoria])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
