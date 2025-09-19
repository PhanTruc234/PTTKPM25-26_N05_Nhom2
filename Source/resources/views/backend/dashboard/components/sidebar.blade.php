<nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
        <ul class="nav metismenu" id="side-menu">
            
            {{-- Header Profile Section --}}
            <li class="nav-header">
                <div class="dropdown profile-element">
                    <span>
                        <img alt="image" class="img-circle" style="width:40px; height:40px; object-fit:cover;" src="https://cafefcdn.com/203337114487263232/2023/9/10/ai-1-2024-1694311345299-16943113463961135970938.jpg" />
                    </span>
                    
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold">David Williams</strong>
                            </span>
                            <span class="text-muted text-xs block">
                                Art Director 
                                <b class="caret"></b>
                            </span>
                        </span>
                    </a>
                    
                    {{-- Profile Dropdown Menu --}}
                    <ul class="dropdown-menu animated fadeInRight m-t-xs">
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                        <li><a href="mailbox.html">Mailbox</a></li>
                        <li class="divider"></li>
                        <li><a href="{{ route('auth.logout') }}">Logout</a></li>
                    </ul>
                </div>
                
                {{-- Logo Element --}}
                <div class="logo-element">
                    IN+
                </div>
            </li>

            {{-- Menu Items --}}
            <li class="active">
                <a href="#">
                    <i class="fa fa-th-large"></i> 
                    <span class="nav-label">Quản lí thành viên</span> 
                    <span class="fa arrow"></span>
                </a>
                
                {{-- Sub Menu --}}
                <ul class="nav nav-second-level">
                    <li>
                        <a href="index.html">Quản lí nhóm thành viên</a>
                    </li>
                    <li>
                        <a href="{{ route('user.index') }}">Quản lí thành viên</a>
                    </li>
                </ul>
            </li>
            
        </ul>
    </div>
</nav>