import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Answer } from './answer.entity';
import { Difficulty } from '../interfaces/difficulty.enum';
import { Category } from 'src/category/entities/category.entity';

@Entity()
export class Question {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column( {type: 'text', nullable: false},)
    question: string;

    @Column({type: 'enum', enum: Difficulty, nullable: false, default: Difficulty.EASY})
    difficulty: Difficulty
   
     @ManyToOne(() => Category, (category) => category.questions, {
        eager: true,
        onDelete: 'CASCADE',
        nullable: false,
     }) 
     @JoinColumn({ name: 'categoryId' })
    category: Category

    @OneToMany(() => Answer, (answer) => answer.question)
    answers: Answer[];  

    @Column({type: 'uuid'})
    categoryId: string;

}
