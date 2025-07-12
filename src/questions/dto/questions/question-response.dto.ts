
import { Expose, Type } from 'class-transformer';
import { CategoryResponseDto } from '../../../category/dto/category-response.dto';
import { AnswerResponseDto } from '../../../answers/dto/answer-response.dto';



export class QuestionResponseDto {
  @Expose()
  id: string; // UUID

  @Expose()
  question: string;

  @Expose()
  difficulty: string;

  @Expose()
  @Type(() => CategoryResponseDto)
  category: CategoryResponseDto;

  @Expose()
  @Type(() => AnswerResponseDto)
  answers: AnswerResponseDto[];
}