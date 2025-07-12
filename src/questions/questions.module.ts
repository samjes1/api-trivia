import { CategoryModule } from './../category/category.module';
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './entities/question.entity';



@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [TypeOrmModule.forFeature([Question]), CategoryModule,],  // Aquí debes importar tus entidades
  
})
export class QuestionsModule {}
