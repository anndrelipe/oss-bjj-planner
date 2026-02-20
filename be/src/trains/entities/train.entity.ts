import { Profile } from 'src/profile/entities/profile.entity';
import { Technique } from 'src/technique/entities/technique.entity';
import { Intensity } from '../enum/intensity.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Train {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title?: string;

  @Column()
  description?: string;

  @ManyToOne(() => Profile, (profile) => profile.trains)
  @JoinColumn({ name: 'profileId' })
  profile!: Profile;

  @Column()
  duration!: number;

  @Column({
    type: 'enum',
    enum: Intensity,
  })
  intensity!: Intensity;

  @ManyToMany(() => Technique, (technique) => technique.trains)
  @JoinTable()
  techniques!: Technique[];

  @Column()
  date!: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
