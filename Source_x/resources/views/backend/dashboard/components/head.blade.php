{{-- Base URL and Meta Tags --}}
<base href="{{ env('APP_URL') }}">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="csrf-token" content="{{ csrf_token() }}">

{{-- Page Title --}}
<title>INSPINIA | Dashboard v.2</title>

{{-- CSS Stylesheets --}}
<link href="backend/css/bootstrap.min.css" rel="stylesheet">
<link href="backend/font-awesome/css/font-awesome.css" rel="stylesheet">
<link href="backend/css/animate.css" rel="stylesheet">
@if(isset($config['css']) && is_array($config['css']))
    @foreach ($config['css'] as $key => $value)
        {!! '<link rel="stylesheet" href="' . $value . '"></script>' !!}
    @endforeach
@endif
<link href="backend/css/style.css" rel="stylesheet">
<link href="backend/css/customize.css" rel="stylesheet">
<script src="backend/js/jquery-3.1.1.min.js"></script>