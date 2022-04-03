import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { InputLoginDto } from './dto/input-login.dto';
import { InputSignupDto } from './dto/input-signup.dto';
import { ResponseLoginDto } from './dto/login-response.dto';
import { GqlAuthGuard } from './guards/gql-auth.guards';

@Resolver()
export class AuthResolver {
  constructor(private AuthService: AuthService) {}

  @Mutation(() => ResponseLoginDto)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('InputLoginDto') InputLoginDto: InputLoginDto,
    @Context() context,
  ) {
    return await this.AuthService.login(context.user);
  }

  @Mutation(() => ResponseLoginDto)
  async signup(@Args('InputSignupDto') InputSignupDto: InputSignupDto) {
    return await this.AuthService.signup(InputSignupDto);
  }
}
