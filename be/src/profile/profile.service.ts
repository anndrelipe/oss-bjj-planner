import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    const exists = await this.profileRepository.findOneBy({
      name: createProfileDto.name,
    });
    if (exists) {
      throw new ConflictException(
        'Something went wrong... It seems this profile already exists',
      );
    }
    const profile = this.profileRepository.create({ ...createProfileDto });
    return await this.profileRepository.save(profile);
  }

  async findAll() {
    return await this.profileRepository.find();
  }

  async findOne(id: number) {
    const profile = await this.profileRepository.findOneBy({ id });
    if (!profile) {
      throw new NotFoundException(
        'Sorry, it was not possible to find this profile.',
      );
    }
    return profile;
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const profile = await this.profileRepository.preload({
      id,
      ...updateProfileDto,
    });
    if (!profile) {
      throw new NotFoundException(
        'Sorry, it was not possible to find this profile.',
      );
    }
    return await this.profileRepository.save(profile);
  }

  async remove(id: number) {
    const result = await this.profileRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(
        'Sorry, it was not possible to find this profile.',
      );
    }
  }
}
