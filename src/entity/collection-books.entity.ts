import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { BooksCollection } from './books-collections.entity';
import { Book } from './books.entity';
@Entity()
export class CollectionBook {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BooksCollection, (booksCollection) => booksCollection.id)
  collection_id: number;

  @ManyToOne(() => Book, (book) => book.id)
  book_id: Book;

  @ManyToMany(() => Book, (book) => book.id)
  book: Book[];

  @Column()
  is_free: boolean;

  @Column()
  isEbook: boolean;

  @Column()
  fileUrl: string;
}
