import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Category } from './category.entity';
import { Answer } from './answer.entity';

@Entity()
export class Question {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column({default: 'medium'})
    difficulty: 'easy' | 'medium' | 'hard'
    
    @ManyToOne(() => Category, (category) => category.questions)
    category: Category

    @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[]; 

}
