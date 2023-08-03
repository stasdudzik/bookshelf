import { Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CollectionBook } from './collection-book.entity';
import { User } from './user.entity';

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
