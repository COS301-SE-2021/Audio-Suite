import { User } from "src/user/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Office } from "../office/office.entity";

@Entity()
export class OfficeUsers{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @OneToOne(type => User, user => user.id)
    user: User;

    @Column()
    @OneToOne(type => Office, office => office.id)
    office: Office;
}