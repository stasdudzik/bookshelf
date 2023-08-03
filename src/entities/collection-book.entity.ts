import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import { BooksCollection } from './books-collection.entity';
import { Book } from './book.entity';
@Entity()
export class CollectionBook {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => BooksCollection, (booksCollection) => booksCollection.id)
  collection_id: number;

  @ManyToMany(() => Book, (book) => book.id)
  book_id: number;

  @Column()
  is_free: boolean;

  @Column()
  isEbook: boolean;

  @Column()
  fileUrl: string;
}
