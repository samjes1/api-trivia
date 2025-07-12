import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "../../questions/entities/question.entity";

@Entity()
export class Answer {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    answer: string;

    @Column({default: false})
    isCorrect: boolean;

  @ManyToOne(() => Question, (question) => question.answers, {eager: true})
    question: Question;
 
  
}