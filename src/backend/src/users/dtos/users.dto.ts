import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  constructor(args) {
    this.email = args?.email;
    this.password = args?.password;
    this.username = args?.username;
    this.phoneNumber = args?.phoneNumber;
  }
}