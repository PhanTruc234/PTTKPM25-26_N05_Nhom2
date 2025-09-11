<?php

use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return view('User.home');
});
Route::get('/shop', function () {
    return view('User.shop');
});
Route::get('/single', function () {
    return view('User.single');
});
Route::get('/bestSeller', function () {
    return view('User.bestSeller');
});
Route::get('/cart', function () {
    return view('User.cart');
});
Route::get('/payment', function () {
    return view('User.payment');
});
Route::get('/contact', function () {
    return view('User.contact');
});