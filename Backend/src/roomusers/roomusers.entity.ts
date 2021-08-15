import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RoomUsers{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    roomID: number;

    @Column()
    roomName: string;

    @Column()
    userID: number;

    @Column()
    userName: string;
}