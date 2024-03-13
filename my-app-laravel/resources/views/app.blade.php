
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Other meta tags and head elements... -->

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Include any other head elements your application needs -->
</head>
<body>
<!-- Your application content goes here -->

@yield('content')

<!-- Include any scripts or other elements your application needs -->
</body>
</html>
