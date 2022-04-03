import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrateg } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: 'HAHAHAHAHAHAHHA',
      /*    signOptions: { expiresIn: '10000000s' }, */
    }),
  ],
  providers: [
    AuthService,
    AuthResolver,
    LocalStrateg,
    JwtStrategy,
/*     { provide: APP_GUARD, useClass: RolesGuard }, */
  ],
})
export class AuthModule {}
