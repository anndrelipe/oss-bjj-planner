import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { TechniqueService } from './technique.service';
import { CreateTechnicDto } from './dto/create-technique.dto';
import { UpdateTechnicDto } from './dto/update-technique.dto';

@Controller('technique')
export class TechniqueController {
  constructor(private readonly technicService: TechniqueService) {}

  @Post()
  create(@Body() createTechnicDto: CreateTechnicDto) {
    return this.technicService.create(createTechnicDto);
  }

  @Get()
  findAll() {
    return this.technicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.technicService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTechnicDto: UpdateTechnicDto,
  ) {
    return this.technicService.update(id, updateTechnicDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.technicService.remove(id);
  }
}
