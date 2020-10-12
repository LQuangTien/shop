import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ nullable: true })
  createAt?: Date;

  @CreateDateColumn({ nullable: true })
  updateAt?: Date;
}
