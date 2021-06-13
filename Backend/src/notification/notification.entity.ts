import { randomUUID } from "crypto";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notifications{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    payload: string;

    @Column()
    userID: string;

    @Column()
    readDateTime: Date; 

    @Column()
    createdDateTime: Date;

    @Column()
    notificationType: string;
}