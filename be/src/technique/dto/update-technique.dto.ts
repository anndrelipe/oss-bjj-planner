import { PartialType } from '@nestjs/mapped-types';
import { CreateTechnicDto } from './create-technique.dto';

export class UpdateTechnicDto extends PartialType(CreateTechnicDto) {}
