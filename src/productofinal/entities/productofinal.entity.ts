import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'productofinal', timestamps: false })
export class Productofinal extends Model {
  @Column({ primaryKey: true })
  codigo: string;

  @Column({ primaryKey: true })
  prefijo: string;

  @Column({ type: 'date' })
  fecharegistro: Date;

  @Column
  nombre: string;

  @Column
  marca: string;

  @Column
  presentacion: string;

  @Column
  preciocomprasiniva: number;

  @Column
  preciocompraconiva: number;

  @Column
  precioventageneral: number;

  @Column
  precioventapormayor: number;

  @Column
  precioventacredito: number;

  @Column
  nuevo: number;

  @Column
  usado: number;

  @Column
  alertamin: number;

  @Column
  alertamax: number;

  @Column
  tarifaimpuestocompra: string;

  @Column
  tarifaimpuestoventa: string;

  @Column
  categoria: string;

  @Column
  porcentajeutilidadgeneral: number;

  @Column
  porcentajeutilidadmayor: number;

  @Column
  porcentajeutilidadcredito: number;

  @Column({ type: 'date' })
  fechaultimacompra: Date;

  @Column({ type: 'date' })
  fechaultimaventa: Date;

  @Column
  estadoprogramaciondesc: string;

  @Column
  programaciondescinicio: Date;

  @Column
  programaciondescfin: Date;

  @Column
  porcentajedesc: number;

  @Column
  estado: string;

  @Column
  ruta: string;

  @Column
  reciboentrega: string;

  @Column
  entregabodega: string;

  @Column
  proveedor1: string;

  @Column
  proveedor2: string;

  @Column
  proveedor3: string;

  @Column({ type: 'date' })
  fechaactualizado: Date;

  @Column({ type: 'time' })
  horaactualizado: Date;
}
