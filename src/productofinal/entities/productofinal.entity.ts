import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'productofinal' })
export class Productofinal {
  @PrimaryKey()
  codigo: string;

  @PrimaryKey()
  prefijo: string;

  @Property({ type: 'date' })
  fecharegistro: Date;

  @Property()
  nombre: string;

  @Property()
  marca: string;

  @Property()
  presentacion: string;

  @Property()
  preciocomprasiniva: number;

  @Property()
  preciocompraconiva: number;

  @Property()
  precioventageneral: number;

  @Property()
  precioventapormayor: number;

  @Property()
  precioventacredito: number;

  @Property()
  nuevo: number;

  @Property()
  usado: number;

  @Property()
  alertamin: number;

  @Property()
  alertamax: number;

  @Property()
  tarifaimpuestocompra: string;

  @Property()
  tarifaimpuestoventa: string;

  @Property()
  categoria: string;

  @Property()
  porcentajeutilidadgeneral: number;

  @Property()
  porcentajeutilidadmayor: number;

  @Property()
  porcentajeutilidadcredito: number;

  @Property({ type: 'date' })
  fechaultimacompra: Date;

  @Property({ type: 'date' })
  fechaultimaventa: Date;

  @Property()
  estadoprogramaciondesc: string;

  @Property()
  programaciondescinicio: Date;

  @Property()
  programaciondescfin: Date;

  @Property()
  porcentajedesc: number;

  @Property()
  estado: string;

  @Property()
  ruta: string;

  @Property()
  reciboentrega: string;

  @Property()
  entregabodega: string;

  @Property()
  proveedor1: string;

  @Property()
  proveedor2: string;

  @Property()
  proveedor3: string;

  @Property({ type: 'date' })
  fechaactualizado: Date;

  @Property({ type: 'time' })
  horaactualizado: Date;
}
