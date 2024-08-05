import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Sede } from './entities/sede.entity';

@Injectable()
export class SedeService {
  constructor(
    @InjectRepository(Sede)
    private repository: EntityRepository<Sede>,
  ) {}

  async findAll(): Promise<Sede[]> {
    return this.repository.findAll({
      where: { prefijo: { $in: ['LA', 'SB', 'SBE', 'SSC', 'SURT'] } },
    });
  }

  async findOne(prefijo: string) {
    return this.repository.findOne({ prefijo });
  }
}
