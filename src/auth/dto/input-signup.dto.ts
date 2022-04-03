import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsEmail } from 'class-validator';

@InputType()
export class InputSignupDto {
  @IsEmail()
  @Field()
  email: string;

  @IsAlpha()
  @Field()
  username: string;

  @Field()
  password: string;
}
