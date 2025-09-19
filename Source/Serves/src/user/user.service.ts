// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(userDto: any): Promise<User> {
    return this.userModel.create(userDto);
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel({
      ...dto,
      role: dto.role ?? Role.USER,
    });

    return createdUser.save();
  }
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }
  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
  async remove(id: string): Promise<any> {
    const result = await this.userModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return result;
  }
}
