import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TimeTrackerTag{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    tag: string;
}