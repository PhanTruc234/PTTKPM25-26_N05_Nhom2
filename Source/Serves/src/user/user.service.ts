// src/user/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, User, UserDocument, UserSchema } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DatabaseConnection } from 'src/common/database/database-connection';

@Injectable()
export class UserService {
  private userModel: Model<UserDocument>;
  constructor() {
    const db = DatabaseConnection.getInstance();
    const connection = db.getConnection();
    if (!connection.models['User']) {
      connection.model('User', UserSchema);
    }
    this.userModel = connection.model<UserDocument>('User');
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
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
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
