import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Settings{
    @Column()
    userID: number;

    @Column()
    darkMode: boolean;



    //slider for user volume.
    //font size

    //possibly profile.

}