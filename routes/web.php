<?php

use App\Http\Controllers\AdminContentController;
use App\Http\Controllers\AdminContactController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileCompletionController;
use App\Http\Controllers\ScreeningController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $totalScreenings = \App\Models\Screening::count();
    $riskStats = \App\Models\Screening::selectRaw('risk_level, count(*) as count')
        ->groupBy('risk_level')
        ->pluck('count', 'risk_level')
        ->toArray();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'statistics' => [
            'total' => $totalScreenings,
            'risks' => $riskStats
        ]
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified', 'ensure.profile.completed'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile-completion', [ProfileCompletionController::class, 'show'])->name('profile.completion');
    Route::post('/profile-completion', [ProfileCompletionController::class, 'store'])->name('profile.completion.store');

    Route::middleware('ensure.profile.completed')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/screening', [ScreeningController::class, 'index'])->name('screening.index');
        Route::get('/screening/epds', [ScreeningController::class, 'epds'])->name('screening.epds');
        Route::get('/screening/pass', [ScreeningController::class, 'pass'])->name('screening.pass');
        Route::post('/screening', [ScreeningController::class, 'store'])->name('screening.store');
        Route::get('/screening/{screening}', [ScreeningController::class, 'show'])->name('screening.show');
        Route::get('/history', [ScreeningController::class, 'history'])->name('screening.history');

        Route::get('/literacy', [ContentController::class, 'index'])->name('literacy.index');
        Route::get('/literacy/{content:slug}', [ContentController::class, 'show'])->name('literacy.show');

        Route::get('/contacts', [ContactController::class, 'index'])->name('contacts.index');
    });
});

Route::get('/setup-db', function () {
    try {
        // Run migration
        Artisan::call('migrate', ['--force' => true]);
        $output = Artisan::output();

        return "Migration Success:<br><pre>$output</pre><br>Sekarang silakan import file skemaperi_data.sql di phpMyAdmin untuk data-nya.";
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage();
    }
});

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
    Route::resource('/content', AdminContentController::class);
    Route::resource('/contacts', AdminContactController::class);
    Route::resource('/users', \App\Http\Controllers\AdminUserController::class)->middleware('super_admin');
});

require __DIR__ . '/auth.php';
