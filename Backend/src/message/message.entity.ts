import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    textChannel: string;

    @Column()
    sender: string;

    @Column()
    message: string;
}