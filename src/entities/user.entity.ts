import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { BooksCollection } from './books-collection.entity';
import { Friendship } from './friendship.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToOne(() => BooksCollection, (booksCollection) => booksCollection.id)
  booksCollection: BooksCollection[];

  @ManyToMany(() => Friendship, (friendship) => friendship.id)
  @JoinTable()
  friendship: Friendship[];
}
