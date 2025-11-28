<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class ProfileCompletionController extends Controller
{
    /**
     * Show the profile completion wizard.
     */
    public function show()
    {
        return Inertia::render('ProfileCompletion');
    }

    /**
     * Store the completed profile data.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'tanggal_lahir' => 'required|date|before:today',
            'berat_badan' => 'required|numeric|min:30|max:200',
            'tinggi_badan' => 'required|numeric|min:130|max:220',
            'lingkar_lengan' => 'required|numeric|min:15|max:50',
            'hpht' => 'required|date|before:today|after:1_year_ago',
        ], [
            'tanggal_lahir.required' => 'Tanggal lahir harus diisi',
            'tanggal_lahir.date' => 'Format tanggal tidak valid',
            'tanggal_lahir.before' => 'Tanggal lahir harus di masa lalu',
            'berat_badan.required' => 'Berat badan harus diisi',
            'berat_badan.numeric' => 'Berat badan harus berupa angka',
            'berat_badan.min' => 'Berat badan tidak realistis',
            'tinggi_badan.required' => 'Tinggi badan harus diisi',
            'tinggi_badan.numeric' => 'Tinggi badan harus berupa angka',
            'tinggi_badan.min' => 'Tinggi badan tidak realistis',
            'lingkar_lengan.required' => 'Lingkar lengan harus diisi',
            'lingkar_lengan.numeric' => 'Lingkar lengan harus berupa angka',
            'hpht.required' => 'HPHT harus diisi',
            'hpht.date' => 'Format HPHT tidak valid',
            'hpht.before' => 'HPHT harus di masa lalu',
            'hpht.after' => 'HPHT terlalu lama yang lalu (kemungkinan sudah melahirkan)',
        ]);

        // Calculate pregnancy age in weeks from HPHT
        $hpht = Carbon::createFromFormat('Y-m-d', $validated['hpht']);
        $today = Carbon::now();
        $pregnancyWeeks = $hpht->diffInWeeks($today);

        // Update user with profile data
        $request->user()->update([
            'tanggal_lahir' => $validated['tanggal_lahir'],
            'berat_badan' => $validated['berat_badan'],
            'tinggi_badan' => $validated['tinggi_badan'],
            'lingkar_lengan' => $validated['lingkar_lengan'],
            'hpht' => $validated['hpht'],
            'pregnancy_age_weeks' => $pregnancyWeeks,
            'profile_completed' => true,
        ]);

        return redirect()->route('dashboard')->with('message', 'Profil Bunda berhasil dilengkapi!');
    }
}
