// src/answers/dto/create-answer.dto.ts
import { IsString, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsBoolean()
  isCorrect: boolean;

  @IsString()
  @IsNotEmpty()
  questionId: string; // UUID de la pregunta relacionada
}