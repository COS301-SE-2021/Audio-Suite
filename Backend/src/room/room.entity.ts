import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    roomName: string;

    @Column()
    roomType: string;

    @Column()
    xCoordinate: number;

    @Column()
    yCoordinate: number;

    @Column()
    width: number;

    @Column()
    height: number;
}