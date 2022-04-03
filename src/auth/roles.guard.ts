import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const user = GqlExecutionContext.create(context).getContext().req.user;
    const roles = this.reflector.get('roles', ctx.getHandler());
    return !!roles.find((item) => item === user.role);
  }
}
