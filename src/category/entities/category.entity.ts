import { Question } from 'src/questions/entities/question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Category {

    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({unique: true})
    name: string;

   @OneToMany(() => Question, (question) => question.category)
    questions: Question[]; 

    @Column({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
     updatedAt: Date;
}