<!DOCTYPE html>
<html lang="vi">
<head>
    {{-- Include Head Section --}}
    @include('backend.dashboard.components.head')
</head>

<body>
    <div id="wrapper">
        {{-- Sidebar Navigation --}}
        @include('backend.dashboard.components.sidebar')

        {{-- Main Content Wrapper --}}
        <div id="page-wrapper" class="gray-bg">
            {{-- Top Navigation --}}
            @include('backend.dashboard.components.nav')
            
            {{-- Page Content --}}
            @include($template)
            
            {{-- Footer --}}
            @include('backend.dashboard.components.footer')
        </div>
    </div>

    {{-- JavaScript Files --}}
    @include('backend.dashboard.components.script')
</body>
</html>
