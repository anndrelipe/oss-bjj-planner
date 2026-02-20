import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { Category } from '../enums/category.enum';
import { Position } from '../enums/position.enum';

export class CreateTechnicDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(100)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  description!: string;

  @IsEnum(Category, { message: 'It must be a valid Category!' })
  @IsNotEmpty()
  category!: Category;

  @IsEnum(Position, { message: 'It must be a valid Position!' })
  @IsOptional()
  startingPosition?: Position;

  @IsEnum(Position, { message: 'It must be a valid Position!' })
  @IsOptional()
  endingPosition?: Position;

  @IsNumber()
  @Min(0)
  @Max(5)
  @IsNotEmpty()
  difficultyLevel!: number;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsUrl({}, { message: 'This URL does not appear to be valid.' })
  @IsOptional()
  videoUrl?: string;
}
