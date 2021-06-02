import { User } from "src/user/user.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Office } from "../office/office.entity";

@Entity()
export class OfficeUsers{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userID: number;

    @Column()
    officeName: string;
}