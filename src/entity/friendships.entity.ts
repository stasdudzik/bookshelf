import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './users.entity';

@Entity()
export class Friendship {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => User, (user) => user.id)
  userId: string;

  @OneToMany(() => User, (user) => user.id)
  friendId: string;

  @Column()
  status: 'pending' | 'rejected' | 'accepted';
}
