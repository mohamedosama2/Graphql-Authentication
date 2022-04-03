import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserInput: CreateUserInput) {
    return await new this.userModel(createUserInput).save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }
}
