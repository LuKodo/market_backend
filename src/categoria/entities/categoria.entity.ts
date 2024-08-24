import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'categoria', timestamps: false })
export class Categoria extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  incremento: number;

  @Column
  descripcion: string;

  @Column({ defaultValue: true })
  estado: boolean;
}
