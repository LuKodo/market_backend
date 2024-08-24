import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'sede', timestamps: false })
export class Sede extends Model {
  @Column({ primaryKey: true })
  prefijo: String;

  @Column
  nombre: String;

  @Column
  ip: String;

  @Column
  bodega: String;
}
