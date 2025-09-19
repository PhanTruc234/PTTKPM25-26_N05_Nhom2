// src/user/schema/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document & { _id: Types.ObjectId };

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name: string;

  @Prop({ select: false })
  currentHashedRefreshToken?: string;

  @Prop({ default: Role.USER, enum: Role })
  role: Role;
  @Prop()
  phone?: string;

  @Prop()
  city?: string;

  @Prop()
  ward?: string;

  @Prop()
  address?: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
