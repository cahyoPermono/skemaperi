<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Contact::create([
            'name' => 'Puskesmas Kecamatan Gambir',
            'type' => 'Puskesmas',
            'phone' => '021-3843958',
            'address' => 'Jl. Tanah Abang I No.10, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat',
            'location' => 'Jakarta Pusat',
        ]);

        Contact::create([
            'name' => 'RSIA Bunda Jakarta',
            'type' => 'Rumah Sakit',
            'phone' => '1-500-799',
            'address' => 'Jl. Teuku Cik Ditiro No.28, Gondangdia, Kec. Menteng, Kota Jakarta Pusat',
            'location' => 'Jakarta Pusat',
        ]);

        Contact::create([
            'name' => 'Bidan Delima',
            'type' => 'Bidan Praktik Mandiri',
            'phone' => '0812-3456-7890',
            'address' => 'Jl. Kebon Jeruk Raya No. 15, Jakarta Barat',
            'location' => 'Jakarta Barat',
        ]);

        Contact::create([
            'name' => 'Layanan Psikologi Sehati',
            'type' => 'Psikolog',
            'phone' => '0811-9876-5432',
            'address' => 'Jl. Fatmawati No. 99, Jakarta Selatan',
            'location' => 'Jakarta Selatan',
        ]);
    }
}
