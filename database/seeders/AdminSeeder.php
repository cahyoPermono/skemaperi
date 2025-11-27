<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin Skemaperi',
            'email' => 'admin@skemaperi.com',
            'password' => Hash::make('password'),
            'role' => 'admin',
            'pregnancy_age_weeks' => 0,
            'location' => 'Kantor Pusat',
        ]);
    }
}
