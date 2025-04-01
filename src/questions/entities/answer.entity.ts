import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column({default: false})
    isCorrect: boolean;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question

    
}