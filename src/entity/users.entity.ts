import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BooksCollection } from './books-collections.entity';
import { Friendship } from './friendships.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  hash: string;

  @ManyToOne(() => BooksCollection, (booksCollection) => booksCollection.id)
  booksCollection: BooksCollection[];

  @OneToMany(() => Friendship, (friendship) => friendship.id)
  friendship: Friendship[];

  @Column({ default: 'user' })
  role: string;
}
