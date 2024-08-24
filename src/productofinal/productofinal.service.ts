import { Injectable } from '@nestjs/common';
import { Productofinal } from './entities/productofinal.entity';
import { Op } from 'sequelize';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProductofinalService {
  constructor(
    @InjectModel(Productofinal)
    private readonly repository: typeof Productofinal,
  ) {}

  async getAll(
    page: number,
    limit: number,
    sede: string = 'SB',
    categoria: string = 'all',
  ): Promise<Productofinal[]> {
    const offset = (page - 1) * limit;
    return this.repository.findAll({
      limit: Number(limit),
      offset,
      where: {
        prefijo: sede,
        nuevo: { [Op.gt]: 0 },
        estado: 'true',
        ...(categoria !== 'all' && { categoria }),
      },
      attributes: ['codigo', 'nombre', 'marca', 'nuevo', 'usado', 'prefijo'],
    });
  }
}
