<script src="{{ asset('backend/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('backend/js/plugins/metisMenu/jquery.metisMenu.js') }}"></script>
<script src="{{ asset('backend/js/plugins/slimscroll/jquery.slimscroll.min.js') }}"></script>
<script src="{{ asset('backend/library/library.js') }}"></script>


{{-- jQuery UI --}}
<script src="backend/js/plugins/jquery-ui/jquery-ui.min.js"></script>

{{-- Dynamic JavaScript Files --}}
@if(isset($config['js']) && is_array($config['js']))
    @foreach ($config['js'] as $key => $value)
        <script src="{{ asset($value) }}"></script>
    @endforeach
@endif