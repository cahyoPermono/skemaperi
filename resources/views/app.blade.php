<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- SEO Meta Tags -->
    <meta name="description"
        content="SKEMA PERI - Aplikasi Skrining Kesehatan Mental Ibu Perinatal. Deteksi dini risiko depresi pada ibu hamil dan pasca melahirkan dengan instrumen medis terpercaya (EPDS & PASS).">
    <meta name="keywords"
        content="kesehatan mental ibu, skrining kehamilan, depresi pasca melahirkan, baby blues, EPDS, PASS, ibu hamil, literasi kesehatan mental, puskesmas">
    <meta name="author" content="SKEMA PERI Team">
    <meta name="robots" content="index, follow">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:title" content="SKEMA PERI - Kesehatan Mental Ibu">
    <meta property="og:description"
        content="Platform edukasi dan skrining kesehatan mental untuk ibu hamil dan nifas. Kenali kondisi emosional Anda sejak dini.">
    <meta property="og:image" content="{{ asset('favicon.png') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url('/') }}">
    <meta property="twitter:title" content="SKEMA PERI - Kesehatan Mental Ibu">
    <meta property="twitter:description"
        content="Platform edukasi dan skrining kesehatan mental untuk ibu hamil dan nifas.">
    <meta property="twitter:image" content="{{ asset('favicon.png') }}">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('favicon.png') }}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>