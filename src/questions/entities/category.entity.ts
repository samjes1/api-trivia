import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from "./question.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({unique: true})
    name: string;

    @OneToMany(() => Question, (question) => question.category)
    questions: Question[];

    @Column()
    createdAt: Date;
}