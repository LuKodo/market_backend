import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'sede' })
export class Sede {
    @PrimaryKey()
    prefijo: String;

    @Property()
    nombre: String;

    @Property()
    ip: String;

    @Property()
    bodega: String;
}
