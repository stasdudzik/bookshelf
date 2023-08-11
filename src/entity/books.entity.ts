import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CollectionBook } from './collection-books.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  genre: string;

  @Column()
  yearPublished: string;

  @Column()
  language: string;

  @Column()
  ISBN: string;

  @Column()
  image: string;

  @OneToMany(() => CollectionBook, (collectionBook) => collectionBook.id)
  collectionBook: CollectionBook[];
}
