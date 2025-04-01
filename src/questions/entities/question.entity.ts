import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Category } from './category.entity';
import { Answer } from './answer.entity';
import { Difficulty } from '../interfaces/difficulty.enum';

@Entity()
export class Question {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    text: string;

    @Column({type: 'enum', enum: Difficulty })
    difficulty: Difficulty
    
    @ManyToOne(() => Category, (category) => category.questions)
    category: Category

    @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[]; 

}
