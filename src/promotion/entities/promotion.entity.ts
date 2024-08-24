import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'promocion', timestamps: false })
export class Promotion extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  rowIndex: number;

  @Column
  columnIndex: number;

  @Column
  imageName: string;
}
