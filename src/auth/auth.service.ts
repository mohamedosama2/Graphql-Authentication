import { BadGatewayException, BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Password } from 'src/utils/Password';
import { InputLoginDto } from './dto/input-login.dto';
import { InputSignupDto } from './dto/input-signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private JwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    if (user && Password.isCorrectPassword(password, user.password)) {
      return user;
    }
    return null;
  }
  async login(user: User) {
    return {
      accessToken: this.JwtService.sign({
        email: user.email,
        sub: user.id,
      }),
      user,
    };
  }

  async signup(InputSignupDto: InputSignupDto) {
    const existed = await this.userService.findOneByEmail(InputSignupDto.email);
    if (existed) throw new BadRequestException('Email has already existed');
    const user = await this.userService.create(InputSignupDto);
    return {
      accessToken: this.JwtService.sign({
        email: user.email,
        sub: user.id,
      }),
      user,
    };
  }
}
