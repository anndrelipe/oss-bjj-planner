import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTechnicDto } from './dto/create-technique.dto';
import { UpdateTechnicDto } from './dto/update-technique.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Technique } from './entities/technique.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TechniqueService {
  constructor(
    @InjectRepository(Technique)
    private readonly technicRepository: Repository<Technique>,
  ) {}

  async create(createTechnicDto: CreateTechnicDto) {
    const exists = await this.technicRepository.findOneBy({
      title: createTechnicDto.title,
    });
    if (!exists) {
      const tech = this.technicRepository.create({ ...createTechnicDto });
      return await this.technicRepository.save(tech);
    }
    throw new ConflictException(
      'Something went wrong... it seems this technique already exists.',
    );
  }

  async findAll() {
    return await this.technicRepository.find();
  }

  async findOne(id: number) {
    const tech: Technique | null = await this.technicRepository.findOneBy({
      id,
    });
    if (!tech) {
      throw new NotFoundException(
        'Something went wrong... it seems that this technique does not exists ',
      );
    }
    return tech;
  }

  async update(id: number, updateTechnicDto: UpdateTechnicDto) {
    const tech: Technique | undefined = await this.technicRepository.preload({
      id,
      ...updateTechnicDto,
    });
    if (!tech) {
      throw new NotFoundException(
        'Something went wrong... it seems that this technique does not exists ',
      );
    }
    return await this.technicRepository.save(tech);
  }

  async remove(id: number) {
    const result = await this.technicRepository.delete(id);
    if (result.affected == 0) {
      throw new NotFoundException(
        'Something went wrong... it seems that this technique does not exists ',
      );
    }
  }
}
