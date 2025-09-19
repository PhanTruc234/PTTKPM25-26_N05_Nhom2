<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@example.com'], // tránh tạo trùng nhiều lần
            [
                'name' => 'Super Admin',
                'password' => Hash::make('admin123'), // đổi khi deploy
                'role' => 'admin',
            ]
        );
    }
}