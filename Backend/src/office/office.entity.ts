import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Office{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column({unique: true})
    invite: string;
}