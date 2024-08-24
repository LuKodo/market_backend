import { Injectable } from '@nestjs/common';
import { Sede } from './entities/sede.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class SedeService {
  constructor(
    @InjectModel(Sede)
    private repository: typeof Sede,
  ) {}

  async findAll(): Promise<Sede[]> {
    return this.repository.findAll({
      where: { prefijo: { [Op.in]: ['LA', 'SB', 'SBE', 'SSC', 'SURT'] } },
      attributes: ['prefijo', 'nombre', 'ip', 'bodega'],
    });
  }

  async findOne(prefijo: string) {
    return this.repository.findOne({
      where: { prefijo },
      attributes: ['prefijo', 'nombre', 'ip', 'bodega'],
    });
  }
}
