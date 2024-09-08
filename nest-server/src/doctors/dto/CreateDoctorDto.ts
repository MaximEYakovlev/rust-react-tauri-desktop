import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreateDoctorDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @IsDate()
  @IsNotEmpty()
  readonly birthdate: Date;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}
