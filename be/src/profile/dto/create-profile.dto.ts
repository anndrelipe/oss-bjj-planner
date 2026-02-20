import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import { BeltColor } from '../enums/belt-color.enum';
import { GameStyle } from '../enums/game-style.enum';
import { Gender } from '../enums/gender.enum';

export class CreateProfileDto {
  @IsString()
  @MinLength(1)
  @MaxLength(55)
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  bio?: string;

  @IsDateString(
    {},
    { message: 'This field must be submitted exactly as YYYY-MM-DD' },
  )
  @IsNotEmpty()
  birthdate!: Date;

  @IsEnum(BeltColor, {
    message: 'This should be a valid graduation color',
  })
  @IsNotEmpty()
  beltColor!: BeltColor;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @Max(4)
  stripes!: number;

  @IsEnum(GameStyle, {
    message: 'This should be a valid game style',
  })
  @IsNotEmpty()
  gameStyle!: GameStyle;

  @IsEnum(Gender, {
    message: 'This does not seem to be a valid option',
  })
  @IsNotEmpty()
  gender!: Gender;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  height!: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  weight!: number;
}
