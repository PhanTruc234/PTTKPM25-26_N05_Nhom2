<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\AuthController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\UserController;

/* Backend Routes */

Route::prefix('admin')->group(function () {
    Route::get('login', [AuthController::class, 'index'])->name('auth.admin')->middleware('login');
    Route::post('login', [AuthController::class, 'login'])->name('auth.login');
    Route::get('logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');
        Route::get('users', [UserController::class, 'index'])->name('user.index');
    });
});

Route::get('/', fn() => view('User.home'));
Route::get('shop', fn() => view('User.shop'));
Route::get('single', fn() => view('User.single'));
Route::get('bestSeller', fn() => view('User.bestSeller'));
Route::get('cart', fn() => view('User.cart'));
Route::get('payment', fn() => view('User.payment'));
Route::get('contact', fn() => view('User.contact'));
