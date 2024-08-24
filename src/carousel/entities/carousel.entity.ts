import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'carousel', timestamps: false })
export class Carousel extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    imageName: string;

    @Column
    order: number;
}
