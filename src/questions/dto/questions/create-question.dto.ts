import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateAnswerDto } from '../answers/create-answer.dto';
import { Difficulty } from 'src/questions/interfaces/difficulty.enum';

export class CreateQuestionDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsEnum(Difficulty)
  difficulty: Difficulty;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAnswerDto)
  answers: CreateAnswerDto[];
}
