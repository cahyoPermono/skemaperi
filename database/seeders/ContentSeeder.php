<?php

namespace Database\Seeders;

use App\Models\Content;
use Illuminate\Database\Seeder;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Content::create([
            'title' => 'Pentingnya Self-Care Selama Kehamilan',
            'slug' => 'pentingnya-self-care-selama-kehamilan',
            'body' => "Kehamilan adalah masa perubahan besar, baik secara fisik maupun emosional. Self-care atau perawatan diri bukan hanya tentang memanjakan diri, tetapi juga tentang menjaga kesehatan mental dan fisik Anda serta bayi Anda.\n\nTips Self-Care:\n1. Istirahat yang cukup.\n2. Makan makanan bergizi.\n3. Tetap terhidrasi.\n4. Lakukan aktivitas fisik ringan seperti yoga atau berjalan kaki.\n5. Luangkan waktu untuk hobi yang Anda nikmati.",
            'category' => 'Self-Care',
            'type' => 'article',
            'thumbnail_url' => 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);

        Content::create([
            'title' => 'Mengatasi Kecemasan Menjelang Persalinan',
            'slug' => 'mengatasi-kecemasan-menjelang-persalinan',
            'body' => "Merasa cemas menjelang persalinan adalah hal yang wajar. Namun, kecemasan yang berlebihan dapat mengganggu kesehatan Anda.\n\nCara Mengatasi:\n- Bicarakan ketakutan Anda dengan pasangan atau bidan.\n- Ikuti kelas persiapan persalinan.\n- Latih teknik pernapasan dan relaksasi.\n- Hindari cerita persalinan yang menakutkan.",
            'category' => 'Relaksasi',
            'type' => 'article',
            'thumbnail_url' => 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);

        Content::create([
            'title' => 'Nutrisi Seimbang untuk Ibu Hamil',
            'slug' => 'nutrisi-seimbang-untuk-ibu-hamil',
            'body' => "Asupan nutrisi yang baik sangat penting untuk pertumbuhan janin dan kesehatan ibu. Pastikan piring Anda berisi karbohidrat kompleks, protein, lemak sehat, serta sayur dan buah.\n\nZat Besi dan Asam Folat adalah dua nutrisi kunci yang tidak boleh dilewatkan.",
            'category' => 'Gizi',
            'type' => 'article',
            'thumbnail_url' => 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);

        Content::create([
            'title' => 'Video Relaksasi Pernapasan',
            'slug' => 'video-relaksasi-pernapasan',
            'body' => "Ikuti panduan video ini untuk melatih pernapasan dalam yang dapat membantu Anda merasa lebih tenang dan rileks.",
            'category' => 'Relaksasi',
            'type' => 'video',
            'video_url' => 'https://www.youtube.com/watch?v=inpok4MKVLM', // Contoh video relaksasi
            'thumbnail_url' => 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);
    }
}
