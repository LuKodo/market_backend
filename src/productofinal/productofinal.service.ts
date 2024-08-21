import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Productofinal } from './entities/productofinal.entity';

@Injectable()
export class ProductofinalService {
  constructor(
    @InjectRepository(Productofinal)
    private readonly repository: EntityRepository<Productofinal>,
  ) {}

  async getAll(
    page: number,
    limit: number,
    sede: string = 'SB',
    categoria: string = 'all',
  ): Promise<Productofinal[]> {
    const offset = (page - 1) * limit;
    return this.repository.findAll({
      limit,
      offset,
      where: {
        prefijo: sede,
        nuevo: { $gt: 0 },
        estado: 'true',
        ...(categoria !== 'all' && { categoria }),
      },
    });
  }
}
