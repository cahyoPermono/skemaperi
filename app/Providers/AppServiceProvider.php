<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Khusus untuk Shared Hosting (Hostinger)
        // Jika folder public_html ada di luar folder aplikasi, gunakan itu sebagai public path
        $publicPath = base_path('../public_html');

        if (file_exists($publicPath) && is_dir($publicPath) && env('APP_ENV') === 'production') {
            $this->app->usePublicPath($publicPath);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
