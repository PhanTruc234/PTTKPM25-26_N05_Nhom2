import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { Role } from './schemas/user.schema';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
// import { Roles } from '../auth/roles.decorator';
// import { Role } from './user.schema';
// import { RolesGuard } from '../auth/roles.guard';
// import { AuthGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
  // ✅ Route chỉ Admin mới được gọi
  @Post('/admin-create-user')
  @ApiOperation({
    summary: 'Admin tạo user (public)',
    description: 'API này không yêu cầu đăng nhập. Dùng để tạo tài khoản admin hoặc user từ bên ngoài.',
  })
  createAdminUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(id, dto);
  }
  @Get(':id')
  @ApiOperation({ summary: 'Lấy thông tin user theo ID' })
  getUserById(@Param('id') id: string) {
    return this.userService.findById(id);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Xóa thông tin user theo ID' })
  deleteUserById(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
