import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './users.entity';
@Entity('books_collections')
export class BooksCollection {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  userId: number;

  @Column()
  address: string;

  @Column()
  collection_name: string;
}
