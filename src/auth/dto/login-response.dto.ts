import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class ResponseLoginDto {
  @Field()
  accessToken: string;

  @Field((type) => User)
  user: User;
}
