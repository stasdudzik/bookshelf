import { Module } from '@nestjs/common';
import { CollectionBookService } from './collection-book.service';
import { CollectionBookController } from './collection-book.controller';

@Module({
  controllers: [CollectionBookController],
  providers: [CollectionBookService]
})
export class CollectionBookModule {}
