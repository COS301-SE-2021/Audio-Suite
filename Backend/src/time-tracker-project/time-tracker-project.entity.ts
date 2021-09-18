import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TimeTrackerProject{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    officeID: number;

    @Column()
    project: string;
}