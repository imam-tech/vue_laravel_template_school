<!DOCTYPE html>
<html class="h-full bg-white" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Anggaran & Accounting</title>
    <link rel="stylesheet" href="{{ asset(mix('css/main.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

    <link rel="stylesheet" href="{{ asset('vendors/simplebar/css/simplebar.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/simplebar.css') }}">
    <!-- Main styles for this application-->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet">
    <!-- We use those styles to show code examples, you should remove them in your application.-->
    <link href="{{ asset('css/examples.css') }}" rel="stylesheet">
    <link href="{{ asset('vendors/@coreui/chartjs/css/coreui-chartjs.css') }}" rel="stylesheet">
</head>
<body class="h-full">
    <noscript>
        <strong>We're sorry but Importir.cm - Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div class="app" id="app"></div>
    <script src="{{ asset(mix('js/app.js')) }}"></script>


    <script src="{{ asset('vendors/@coreui/coreui/js/coreui.bundle.min.js') }}"></script>
    <script src="{{ asset('vendors/simplebar/js/simplebar.min.js') }}"></script>
    <script src="{{ asset('vendors/chart.js/js/chart.min.js') }}"></script>
    <script src="{{ asset('vendors/@coreui/chartjs/js/coreui-chartjs.js') }}"></script>
    <script src="{{ asset('vendors/@coreui/utils/js/coreui-utils.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>
