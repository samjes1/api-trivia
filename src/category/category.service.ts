import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findByName(name: string): Promise<Category | null> {
    return this.categoryRepository.findOne({ where: { name } });
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      await this.findByName(createCategoryDto.name)
      
      const category = this.categoryRepository.create(createCategoryDto);
      const savedCategory = await this.categoryRepository.save(category);
      return savedCategory;
    } catch (error) {
      this.HandleErrorExceptions(error, `No se pudo crear la categoría` )
    }
    
  }

  async findAll() {
    const searchCategory = await this.categoryRepository.find()
    return searchCategory ;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }

  HandleErrorExceptions(error: Error, context: string): never {
      //console.error(`[${context}]`, error);

    if (error instanceof ConflictException) throw error;

    if (error.message.includes('violates unique constraint')) {
      throw new ConflictException('La categoría es duplicada');
    }

    throw new HttpException('Error interno del servidor', HttpStatus.INTERNAL_SERVER_ERROR);

  }

}
