import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
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
}
