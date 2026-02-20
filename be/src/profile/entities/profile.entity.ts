import { User } from 'src/user/entities/user.entity';
import { BeltColor } from '../enums/belt-color.enum';
import { Gender } from '../enums/gender.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { GameStyle } from '../enums/game-style.enum';
import { Technique } from 'src/technique/entities/technique.entity';
import { Train } from 'src/trains/entities/train.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  name!: string;

  @Column({
    nullable: true,
  })
  bio?: string;

  @Column()
  birthdate!: Date;

  @Column({
    type: 'enum',
    enum: BeltColor,
  })
  beltColor!: BeltColor;

  @Column({ default: 0 })
  stripes!: number;

  @Column({
    type: 'enum',
    enum: GameStyle,
  })
  gameStyle!: GameStyle;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender!: Gender;

  @Column('decimal')
  height!: number;

  @Column('decimal')
  weight!: number;

  @OneToMany(() => Train, (train) => train.profile)
  trains?: Train[];

  @OneToMany(() => Technique, (technique) => technique.profile)
  techniques?: Technique[];

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'userId' })
  user!: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
