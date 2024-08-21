import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'categoria' })
export class Categoria {
  @PrimaryKey()
  incremento: string;

  @PrimaryKey()
  descripcion: string;
}
