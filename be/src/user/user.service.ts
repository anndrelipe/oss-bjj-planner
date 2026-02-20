import * as bcrypt from 'bcrypt';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './enums/role.enum';
import { AccountStatus } from './enums/account-status.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { password, email } = createUserDto;
    const exist = await this.userRepository.findOneBy({ email });
    if (!exist) {
      const saltRounds: number = 10;
      const user: User = this.userRepository.create({
        email: email,
        hashedPassword: await bcrypt.hash(password, saltRounds),
        role: Role.USER,
        accountStatus: AccountStatus.PENDING,
      });
      return await this.userRepository.save(user);
    } else {
      throw new ConflictException(
        'Something went wrong... It seems this email is already in use.',
      );
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user: User | null = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(
        `It was not possible to find an user with id = ${id}`,
      );
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    const { password, ...rest } = updateUserDto;
    console.log(password);

    const user: User | undefined = await this.userRepository.preload({
      id,
      ...rest,
      hashedPassword: password,
    });

    if (!user) {
      throw new NotFoundException(
        `It was not possible to find an user with id = ${id}`,
      );
    }
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const result = await this.userRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(
        `It was not possible to find an user with id = ${id}`,
      );
    }
  }
}
