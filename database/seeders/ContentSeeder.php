<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Content;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $contents = [
            [
                'title' => 'Mengenal Baby Blues dan Depresi Pasca Melahirkan',
                'category' => 'Kesehatan Mental',
                'type' => 'article',
                'body' => "Baby blues adalah kondisi perubahan suasana hati yang umum terjadi setelah melahirkan. Gejalanya meliputi menangis tanpa alasan jelas, mudah tersinggung, lelah, dan cemas. Kondisi ini biasanya berlangsung selama beberapa hari hingga dua minggu.

Namun, jika gejala ini menetap lebih dari dua minggu dan semakin parah, ini bisa menjadi tanda Depresi Pasca Melahirkan (Postpartum Depression). Gejala depresi ini lebih serius, seperti merasa putus asa, tidak bisa merawat bayi, menarik diri dari keluarga, atau bahkan memiliki pikiran untuk menyakiti diri sendiri atau bayi.

Penting untuk berbicara dengan pasangan, keluarga, atau tenaga profesional jika Bunda merasakan gejala-gejala ini. Ingat, meminta bantuan bukan tanda kelemahan, melainkan langkah penting untuk kesehatan Bunda dan si Kecil.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1555675661-096d4263e8a2?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'https://www.alodokter.com/baby-blues-syndrome',
            ],
            [
                'title' => 'Tips Menjaga Nutrisi Selama Kehamilan',
                'category' => 'Gizi',
                'type' => 'article',
                'body' => "Nutrisi yang baik sangat penting untuk pertumbuhan janin dan kesehatan ibu. Berikut beberapa tips menjaga asupan nutrisi:

1. **Konsumsi Asam Folat:** Penting untuk mencegah cacat tabung saraf. Sumbernya bisa dari sayuran hijau, kacang-kacangan, atau suplemen.
2. **Perbanyak Zat Besi:** Mencegah anemia yang sering terjadi pada ibu hamil. Makanlah daging merah, bayam, atau hati ayam.
3. **Kalsium untuk Tulang:** Janin membutuhkan kalsium untuk pembentukan tulang. Susu, keju, dan yogurt adalah sumber yang baik.
4. **Hidrasi yang Cukup:** Minum setidaknya 8-10 gelas air sehari untuk menjaga volume darah dan cairan ketuban.

Hindari makanan mentah, ikan bermerkuri tinggi, dan alkohol demi keamanan janin.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'Kementerian Kesehatan RI',
            ],
            [
                'title' => 'Relaksasi Pernapasan untuk Mengurangi Kecemasan',
                'category' => 'Relaksasi',
                'type' => 'article',
                'body' => "Kecemasan adalah hal yang wajar dialami selama kehamilan dan setelah melahirkan. Salah satu cara mudah untuk mengatasinya adalah dengan teknik pernapasan dalam.

**Langkah-langkah:**
1. Duduk atau berbaring di tempat yang nyaman.
2. Letakkan satu tangan di dada dan satu tangan di perut.
3. Tarik napas perlahan melalui hidung selama 4 hitungan, rasakan perut mengembang.
4. Tahan napas selama 2 hitungan.
5. Hembuskan napas perlahan melalui mulut selama 6 hitungan.
6. Ulangi siklus ini selama 5-10 menit.

Lakukan ini setiap kali Bunda merasa stres atau cemas untuk membantu menenangkan sistem saraf.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'American Psychological Association',
            ],
            [
                'title' => 'Pentingnya Self-Care untuk Ibu Baru',
                'category' => 'Self-Care',
                'type' => 'article',
                'body' => "Menjadi ibu baru adalah pekerjaan penuh waktu yang melelahkan. Seringkali, ibu lupa merawat dirinya sendiri karena sibuk mengurus bayi. Padahal, ibu yang bahagia akan lebih mampu merawat bayinya dengan baik.

Self-care tidak harus mewah. Beberapa ide sederhana:
- Tidur saat bayi tidur.
- Mandi air hangat dengan tenang.
- Membaca buku favorit selama 15 menit.
- Berjalan-jalan santai di pagi hari.
- Meminta bantuan pasangan atau keluarga untuk menjaga bayi sebentar.

Jangan merasa bersalah untuk meluangkan waktu bagi diri sendiri, Bunda.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => null,
            ],
            [
                'title' => 'Video: Senam Hamil Sederhana di Rumah',
                'category' => 'Relaksasi',
                'type' => 'video',
                'body' => "Tetap aktif selama kehamilan dapat membantu mengurangi sakit punggung, meningkatkan energi, dan mempersiapkan tubuh untuk persalinan. Berikut adalah panduan senam hamil sederhana yang aman dilakukan di rumah. Jangan lupa konsultasikan dengan dokter sebelum memulai program olahraga baru.",
                'thumbnail_url' => 'https://img.youtube.com/vi/BPS5A9F0D6o/maxresdefault.jpg',
                'video_url' => 'https://www.youtube.com/watch?v=BPS5A9F0D6o', // Contoh video acak
                'source' => 'YouTube',
            ],
        ];

        foreach ($contents as $content) {
            Content::create([
                'title' => $content['title'],
                'slug' => Str::slug($content['title']),
                'category' => $content['category'],
                'type' => $content['type'],
                'body' => $content['body'],
                'thumbnail_url' => $content['thumbnail_url'],
                'video_url' => $content['video_url'],
                'source' => $content['source'],
            ]);
        }
    }
}
