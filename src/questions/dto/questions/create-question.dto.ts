import { Type } from "class-transformer";
import { IsArray, IsEnum, IsIn, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateAnswerDto } from "../answers/create-answer.dto";
import { Difficulty } from "src/questions/interfaces/difficulty.enum";

export class CreateQuestionDto {

    @IsString()
    @IsNotEmpty()
    text: string;
  
    @IsEnum(Difficulty)
    difficulty: Difficulty;
  
    @IsString()
    @IsNotEmpty()
    categoryId: string; // UUID de la categoría
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAnswerDto)
    answers: CreateAnswerDto[]




}
