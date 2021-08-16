import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Kanban{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    listName: string;

    @Column()
    cardID: string;

    @Column()
    cardMessage: string;
}