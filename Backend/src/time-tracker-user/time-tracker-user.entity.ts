import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TimeTrackerUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userID: number;

    @Column()
    officeID: number;

    @Column()
    description: string;

    @Column({
        nullable: true
    })
    projectID: number;

    @Column({
        nullable: true
    })
    tagID: number;

    @Column()
    startTime: Date;

    @Column({
        nullable: true
    })
    endTime: Date;
}