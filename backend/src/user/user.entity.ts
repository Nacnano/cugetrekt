import { IsPhoneNumber } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

const date_now = new Date().toISOString().slice(0, 19).replace('T', ' ');

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  userName: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  @IsPhoneNumber()
  phoneNumber: string;

  @Column({ default: 'example@nacnano.com' })
  email: string;

  @Column({ default: 'password' })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: date_now })
  createDate: Date;

  @Column({ default: date_now })
  updateDate: Date;

  // @Column({ nullable: true })
  // profilePicture: Picture;

  // @OneToMany(() => QaQueue, (qaQueue) => qaQueue.user)
  // qaQueues?: QaQueue[];
}

@Entity()
export class Picture {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  width: number;

  @Column()
  height: number;
}
