import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { BooksCollectionModule } from './books-collection/books-collection.module';
import { CollectionBookModule } from './collection-book/collection-book.module';
import { FriendshipModule } from './friendship/friendship.module';
import { BookStatusModule } from './book-status/book-status.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), BookModule, UserModule, BooksCollectionModule, CollectionBookModule, FriendshipModule, BookStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
