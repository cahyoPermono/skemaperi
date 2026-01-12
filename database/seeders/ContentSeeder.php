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
            [
                'title' => 'Tanda Bahaya pada Kehamilan',
                'category' => 'Kesehatan Fisik',
                'type' => 'article',
                'body' => "Segera bawa ibu hamil ke fasilitas kesehatan jika mengalami salah satu tanda baya berikut:
1. **Muntah terus menerus** dan tidak mau makan.
2. **Demam tinggi**.
3. **Bengkak pada kaki, tangan, atau wajah** disertai sakit kepala atau kejang.
4. **Janin dirasakan kurang bergerak** dibandingkan biasanya.
5. **Perdarahan** pada hamil muda maupun hamil tua.
6. **Air ketuban keluar** sebelum waktunya.

Jangan ditunda, penanganan cepat dapat menyelamatkan nyawa ibu dan bayi.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'Buku KIA Kementerian Kesehatan RI',
                'is_pinned' => true,
            ],
            [
                'title' => 'Porsi Makan dan Gizi Ibu Hamil',
                'category' => 'Gizi',
                'type' => 'article',
                'body' => "Ibu hamil perlu makan lebih banyak dari biasanya untuk pertumbuhan janin.
- **Makanan Pokok**: Nasi, jagung, ubi (sumber tenaga).
- **Lauk Pauk**: Ikan, telur, tempe, tahu, daging (sumber protein untuk pertumbuhan).
- **Sayur dan Buah**: Sumber vitamin dan mineral.
- **Minum Air Putih**: 8-10 gelas sehari.
- **Tablet Tambah Darah**: Minum 1 tablet setiap hari selama kehamilan minimal 90 tablet.

**Pantangan:** Hindari asap rokok, alkohol, dan jamu yang tidak jelas keamanannya.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'Buku KIA Kementerian Kesehatan RI',
                'is_pinned' => true,
            ],
            [
                'title' => 'Perawatan Sehari-hari Ibu Hamil',
                'category' => 'Kesehatan Fisik',
                'type' => 'article',
                'body' => "Menjaga kebersihan dan kesehatan diri sangat penting:
1. **Mandi** 2 kali sehari dengan sabun.
2. **Sikat gigi** 2 kali sehari (pagi dan malam).
3. **Istirahat yang cukup**, tidur malam 6-7 jam dan tidur siang 1-2 jam (tidur miring kiri lebih baik).
4. **Hubungan suami istri** boleh dilakukan selama tidak ada keluhan atau larangan dokter.
5. **Aktivitas fisik ringan** seperti jalan pagi sangat dianjurkan.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'Buku KIA Kementerian Kesehatan RI',
                'is_pinned' => true,
            ],
            [
                'title' => 'Persiapan Persalinan (P4K)',
                'category' => 'Persiapan Melahirkan',
                'type' => 'article',
                'body' => "Persiapkan persalinan sejak awal dengan Program Perencanaan Persalinan dan Pencegahan Komplikasi (P4K):
- **Tanyakan tanggal perkiraan lahir**.
- **Siapkan penolong persalinan** (dokter/bidan).
- **Siapkan dana** atau jaminan kesehatan (BPJS/KIS).
- **Siapkan transportasi** ke tempat persalinan.
- **Siapkan calon pendonor darah** jika sewaktu-waktu diperlukan.
- **Siapkan perlengkapan** bayi dan ibu.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'Buku KIA Kementerian Kesehatan RI',
                'is_pinned' => true,
            ],
            [
                'title' => 'Tanda-tanda Awal Persalinan',
                'category' => 'Persiapan Melahirkan',
                'type' => 'article',
                'body' => "Kenali tanda bahwa persalinan sudah dekat:
1. **Perut mulas** secara teratur, semakin lama semakin sering dan kuat.
2. **Keluar lendir bercampur darah** dari jalan lahir.
3. **Keluar air ketuban** dari jalan lahir.

Jika mengalami tanda-tanda ini, segera hubungi bidan atau dokter dan menuju fasilitas kesehatan.",
                'thumbnail_url' => 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1000',
                'video_url' => null,
                'source' => 'Buku KIA Kementerian Kesehatan RI',
                'is_pinned' => true,
            ],
        ];

        foreach ($contents as $content) {
            $slug = Str::slug($content['title']);

            Content::updateOrCreate(
                ['slug' => $slug],
                [
                    'title' => $content['title'],
                    'category' => $content['category'],
                    'type' => $content['type'],
                    'body' => $content['body'],
                    'thumbnail_url' => $content['thumbnail_url'],
                    'video_url' => $content['video_url'],
                    'source' => $content['source'],
                    'is_pinned' => $content['is_pinned'] ?? false,
                ]
            );
        }
    }
}
