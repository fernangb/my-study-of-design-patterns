import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { InMemoryCategoryRepository } from './repositories/in-memory-category.repository';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, InMemoryCategoryRepository],
  exports: [CategoryService],
})
export class CategoryModule {}
