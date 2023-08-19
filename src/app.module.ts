import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { BooksCollectionModule } from './books-collection/books-collection.module';
import { CollectionBookModule } from './collection-book/collection-book.module';
import { FriendshipModule } from './friendship/friendship.module';
import { BookStatusModule } from './book-status/book-status.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    AuthModule,
    BookModule,
    UserModule,
    BooksCollectionModule,
    CollectionBookModule,
    FriendshipModule,
    BookStatusModule,
    DatabaseModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
