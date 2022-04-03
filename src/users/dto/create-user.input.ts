import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @Field()
  username: string;

  @IsString()
  @Field()
  password: string;

  @IsString()
  @Field()
  email: string;
}
