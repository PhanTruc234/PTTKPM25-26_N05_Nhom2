<?php

use App\Http\Middleware\LogginMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\AuthController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Middleware\AuthenticateMiddleware;


Route::get('/', function () {
    return view('welcome');
});

/*Backend Routes*/

Route::get('dashboard/index', [DashboardController::class, 'index'])
    ->name('dashboard.index')
    ->middleware('auth.check'); // Gọi nhanh thay vì class

/*User Routes*/
Route::get('user/index', [UserController::class, 'index'])
    ->name('user.index')
    ->middleware('auth.check');

Route::get('admin', [AuthController::class, 'index'])
    ->name('auth.admin')
    ->middleware('login');

Route::get('logout', [AuthController::class, 'logout'])->name('auth.logout');
Route::post('login', [AuthController::class, 'login'])->name('auth.login');





/*Frontend Routes*/
Route::get('/', function () {
    return view('User.home');
});
Route::get('shop', function () {
    return view('User.shop');
});
Route::get('single', function () {
    return view('User.single');
});
Route::get('bestSeller', function () {
    return view('User.bestSeller');
});
Route::get('cart', function () {
    return view('User.cart');
});
Route::get('payment', function () {
    return view('User.payment');
});
Route::get('contact', function () {
    return view('User.contact');
});