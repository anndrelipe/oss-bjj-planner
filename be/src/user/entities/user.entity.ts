import { Exclude } from 'class-transformer';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../enums/role.enum';
import { AccountStatus } from '../enums/account-status.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ unique: true })
  email!: string;

  @Exclude({ toPlainOnly: true })
  @Column({ length: 255 })
  hashedPassword!: string;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile?: Profile;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  role?: Role;

  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.PENDING,
  })
  accountStatus?: AccountStatus;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
