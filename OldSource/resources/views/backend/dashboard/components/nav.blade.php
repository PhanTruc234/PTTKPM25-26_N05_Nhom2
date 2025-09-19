{{-- Top Navigation Bar --}}
<div class="row border-bottom">
    <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
        
        {{-- Navbar Header --}}
        <div class="navbar-header">
            {{-- Menu Toggle Button --}}
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">
                <i class="fa fa-bars"></i>
            </a>
            
            {{-- Search Form --}}
            <form role="search" class="navbar-form-custom" action="search_results.html">
                <div class="form-group">
                    <input 
                        type="text" 
                        placeholder="Search for something..." 
                        class="form-control" 
                        name="top-search" 
                        id="top-search"
                    >
                </div>
            </form>
        </div>

        {{-- Top Right Navigation Links --}}
        <ul class="nav navbar-top-links navbar-right">
            {{-- Welcome Message --}}
            <li>
                <span class="m-r-sm text-muted welcome-message">
                    Welcome to INSPINIA+ Admin Theme.
                </span>
            </li>

            {{-- Messages Dropdown --}}
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-envelope"></i>
                    <span class="label label-warning">16</span>
                </a>
                
                <ul class="dropdown-menu dropdown-messages">
                    {{-- Message Item 1 --}}
                    <li>
                        <div class="dropdown-messages-box">
                            <a href="profile.html" class="pull-left">
                                <img alt="image" class="img-circle" src="img/a7.jpg">
                            </a>
                            <div>
                                <small class="pull-right">46h ago</small>
                                <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>.<br>
                                <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>

                    {{-- Message Item 2 --}}
                    <li>
                        <div class="dropdown-messages-box">
                            <a href="profile.html" class="pull-left">
                                <img alt="image" class="img-circle" src="img/a4.jpg">
                            </a>
                            <div>
                                <small class="pull-right text-navy">5h ago</small>
                                <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>.<br>
                                <small class="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>

                    {{-- Message Item 3 --}}
                    <li>
                        <div class="dropdown-messages-box">
                            <a href="profile.html" class="pull-left">
                                <img alt="image" class="img-circle" src="img/profile.jpg">
                            </a>
                            <div>
                                <small class="pull-right">23h ago</small>
                                <strong>Monica Smith</strong> love <strong>Kim Smith</strong>.<br>
                                <small class="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                            </div>
                        </div>
                    </li>
                    <li class="divider"></li>

                    {{-- View All Messages Link --}}
                    <li>
                        <div class="text-center link-block">
                            <a href="mailbox.html">
                                <i class="fa fa-envelope"></i>
                                <strong>Read All Messages</strong>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            {{-- Notifications Dropdown --}}
            <li class="dropdown">
                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                    <i class="fa fa-bell"></i>
                    <span class="label label-primary">8</span>
                </a>
                
                <ul class="dropdown-menu dropdown-alerts">
                    {{-- Alert Item 1 --}}
                    <li>
                        <a href="mailbox.html">
                            <div>
                                <i class="fa fa-envelope fa-fw"></i> You have 16 messages
                                <span class="pull-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>

                    {{-- Alert Item 2 --}}
                    <li>
                        <a href="profile.html">
                            <div>
                                <i class="fa fa-twitter fa-fw"></i> 3 New Followers
                                <span class="pull-right text-muted small">12 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>

                    {{-- Alert Item 3 --}}
                    <li>
                        <a href="grid_options.html">
                            <div>
                                <i class="fa fa-upload fa-fw"></i> Server Rebooted
                                <span class="pull-right text-muted small">4 minutes ago</span>
                            </div>
                        </a>
                    </li>
                    <li class="divider"></li>

                    {{-- View All Alerts Link --}}
                    <li>
                        <div class="text-center link-block">
                            <a href="notifications.html">
                                <strong>See All Alerts</strong>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </li>

            {{-- Logout Link --}}
            <li>
                <a href="{{ route('auth.logout') }}">
                    <i class="fa fa-sign-out"></i> Log out
                </a>
            </li>

            {{-- Right Sidebar Toggle --}}
            <li>
                <a class="right-sidebar-toggle">
                    <i class="fa fa-tasks"></i>
                </a>
            </li>
        </ul>
    </nav>
</div>