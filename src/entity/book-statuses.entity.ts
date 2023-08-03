import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CollectionBook } from './collection-books.entity';
import { User } from './users.entity';

@Entity()
export class BookStatus {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CollectionBook, (collectionBook) => collectionBook.id)
  bookId: number;

  @OneToMany(() => User, (user) => user.id)
  holderUserId: number;

  @OneToMany(() => User, (user) => user.id)
  waitingUserId: number;
}
