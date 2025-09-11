<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct(){
        
    }
    
    public function index(){
        if(Auth::id() == 1){
            return redirect()->route('dashboard.index')->with('success','Đăng nhập thành công');
        }

        return view("backend.auth.login");
    }

    public function login(AuthRequest $request){
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            return redirect()->route('dashboard.index')->with('success','Đăng nhập thành công');
        }

        return redirect()->route('auth.admin')->with('error','Đăng nhập không thành công');
    }

    public function logout(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('auth.admin');
    }
}
