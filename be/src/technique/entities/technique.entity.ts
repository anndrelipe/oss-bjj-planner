import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from '../enums/category.enum';
import { Position } from '../enums/position.enum';
import { Profile } from 'src/profile/entities/profile.entity';
import { Train } from 'src/trains/entities/train.entity';

@Entity()
export class Technique {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'boolean' })
  isCustom!: boolean;

  @ManyToOne(() => Profile, (profile) => profile.techniques, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'profileId' })
  profile?: Profile;

  @Column({ length: 100, unique: true })
  title!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({
    type: 'enum',
    enum: Category,
  })
  category!: Category;

  @Column({
    type: 'enum',
    enum: Position,
    default: Position.CLOSED_GUARD,
  })
  startingPosition?: Position = Position.CLOSED_GUARD;

  @Column({
    type: 'enum',
    enum: Position,
    default: Position.CLOSED_GUARD,
  })
  endingPosition?: Position = Position.CLOSED_GUARD;

  @Column({
    type: 'int',
    default: 1,
  })
  difficultyLevel!: number;

  @Column({ type: 'simple-array', nullable: true })
  tags?: string[] = [];

  @Column({ nullable: true })
  videoUrl?: string;

  @ManyToMany(() => Train, (train) => train.techniques)
  trains?: Train[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
