import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorService } from './calculator/calculator.service';
import { CalculatorModule } from './calculator/calculator.module';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CalculatorController } from './calculator/calculator.controller';
import { BooksModule } from './books/books.module';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    CalculatorModule, 
    PostsModule, BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
