import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'user', timestamps: false })
export class User extends Model {
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;

    @Column
    name: string;

    @Column
    password: string;
}
