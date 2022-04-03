import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class InputLoginDto {
  @Field()
  email: string;

  @Field()
  password: string;
}
