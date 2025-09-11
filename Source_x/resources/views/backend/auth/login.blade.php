<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INSPINIA | Login</title>

    {{-- CSS Stylesheets --}}
    <link href="backend/css/bootstrap.min.css" rel="stylesheet">
    <link href="backend/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="backend/css/animate.css" rel="stylesheet">
    <link href="backend/css/style.css" rel="stylesheet">
    <link href="backend/css/customize.css" rel="stylesheet">
</head>

<body class="gray-bg">
    {{-- Login Container --}}
    <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            {{-- Logo Section --}}
            <div>
                <h1 class="logo-name">IN+</h1>
            </div>

            {{-- Welcome Text --}}
            <h3>Welcome to IN+</h3>
            <p>
                Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
                {{-- Continually expanded and constantly improved Inspinia Admin Them (IN+) --}}
            </p>

            {{-- Login Form --}}
            <form method="post" class="m-t" role="form" action="{{ route('auth.login') }}">
                @csrf
                
                {{-- Email Field --}}
                <div class="form-group">
                    <input
                        type="text"
                        name="email"
                        class="form-control"
                        placeholder="Username"
                        value="{{ old('email') }}"
                    >
                    @if ($errors->has('email'))
                        <span class="error-message">
                            * {{ $errors->first('email') }}
                        </span>
                    @endif
                </div>

                {{-- Password Field --}}
                <div class="form-group">
                    <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="Password"
                    >
                    @if ($errors->has('password'))
                        <span class="error-message">
                            * {{ $errors->first('password') }}
                        </span>
                    @endif
                </div>

                {{-- Submit Button --}}
                <button type="submit" class="btn btn-primary block full-width m-b">
                    Đăng nhập
                </button>

                {{-- Forgot Password Link --}}
                <a href="#">
                    <small>Quên mật khẩu?</small>
                </a>
            </form>

            {{-- Footer Text --}}
            <p class="m-t">
                <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
            </p>
        </div>
    </div>

    {{-- JavaScript Files --}}
    <script src="js/jquery-3.1.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>
</html>