import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import bcrypt from 'bcrypt';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto.js';
import { User } from './schemas/user.schema.js';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /** Insert a new user into the database */
  async createUser({ email, password }: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.userModel.create({ email, hashedPassword });
  }

  /** Get all users in the database */
  async getAll() {
    return this.userModel.find();
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
