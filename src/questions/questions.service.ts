import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from './dto/questions/create-question.dto';
import { UpdateQuestionDto } from './dto/questions/update-question.dto';
import { Repository } from 'typeorm';
import { Question } from './entities/question.entity';
import { QuestionResponseDto } from './dto/questions/question-response.dto';
import { plainToClass } from 'class-transformer';
import { Category } from 'src/category/entities/category.entity';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    private categoryService: CategoryService,
  ) {}

  async create(
    createQuestionDto: CreateQuestionDto,
  ): Promise<QuestionResponseDto> {
    // Busca la categoría
    let category = await this.categoryService.findByName(
      createQuestionDto.category,
    );

    if (!category)
      throw new NotFoundException(
        `La categoría ${category}, no se cuentra agregada o creada`,
      );

    // crea la pregunta con la relaciones
    const question = this.questionRepository.create({
      ...createQuestionDto,
      category,
    });

    //Guardado en base de datos
    const savedQuestion = await this.questionRepository.save(question);

    return plainToClass(QuestionResponseDto, savedQuestion, {
      excludeExtraneousValues: true,
    });
  }

  @Get()
  async findAll() {
    const searchQuestion = await this.questionRepository.find({});
    const searchQuestionAll = searchQuestion.map((question) =>
      plainToClass(
        QuestionResponseDto,
        {
          ...question,
          Category: question.category?.name,
        },
        {
          excludeExtraneousValues: true,
        },
      ),
    );

    return searchQuestionAll;
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
