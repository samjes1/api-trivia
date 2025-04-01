import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/questions/create-question.dto';
import { UpdateQuestionDto } from './dto/questions/update-question.dto';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { QuestionResponseDto } from './dto/questions/question-response.dto';
import { plainToClass } from 'class-transformer';
@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ){}
  
  
  async create(createQuestionDto: CreateQuestionDto): Promise<QuestionResponseDto> {
    const question = this.questionRepository.create(createQuestionDto);
    const savedQuestion = await this.questionRepository.save(question);
    return plainToClass(QuestionResponseDto, savedQuestion, {
      excludeExtraneousValues: true,
    });
  }

  @Get('random')
  
  findAll() {
    return `This action returns all questions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
