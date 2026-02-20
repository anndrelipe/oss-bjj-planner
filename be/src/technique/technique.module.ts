import { Module } from '@nestjs/common';
import { TechniqueService } from './technique.service';
import { TechniqueController } from './technique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Technique } from './entities/technique.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Technique])],
  controllers: [TechniqueController],
  providers: [TechniqueService],
})
export class TechniqueModule {}
