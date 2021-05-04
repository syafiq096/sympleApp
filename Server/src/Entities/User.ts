import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    name!: string;

    @Column()
    username!: string; 

    @Column()
    password!: string; 
}