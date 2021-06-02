import { Office } from "src/office/office.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;

    @Column()
    userName: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;
}