
import { Expose, Type } from 'class-transformer';
import { CategoryResponseDto } from '../categories/category-response.dto';
import { AnswerResponseDto } from '../answers/answer-response.dto';



export class QuestionResponseDto {
  @Expose()
  id: string; // UUID

  @Expose()
  text: string;

  @Expose()
  difficulty: string;

  @Expose()
  @Type(() => CategoryResponseDto)
  category: CategoryResponseDto;

  @Expose()
  @Type(() => AnswerResponseDto)
  answers: AnswerResponseDto[];
}