import { Inject, Module } from '@nestjs/common';
import { QuestionsModule } from './questions/questions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { AnswersModule } from './answers/answers.module';


@Module({
  imports: [  ConfigModule.forRoot({ isGlobal: true }), // configuracion del .env 
     TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',    
      password: '123456789', 
      database: 'trivia_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,          
      //logging: true,              // Opcional: ver queries en consola
    }),
    inject: [ConfigService],
      }),
    QuestionsModule,
    CategoryModule,
    AnswersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
