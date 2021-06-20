import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    roomName: string;
}