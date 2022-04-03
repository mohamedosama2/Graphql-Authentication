import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        schema: UserSchema,
        name: User.name,
      },
    ]),
  ],
  exports: [UsersService],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
