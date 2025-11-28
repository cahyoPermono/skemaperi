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

        Content::create([
            'title' => 'Memahami Kecemasan pada Ibu Hamil',
            'slug' => 'memahami-kecemasan-pada-ibu-hamil',
            'body' => "Kecemasan selama kehamilan adalah pengalaman yang sangat umum. Perubahan hormon, tanggung jawab yang akan datang, dan ketidakpastian dapat memicu kecemasan.\n\nGejala Kecemasan:\n- Kesulitan tidur atau konsentrasi\n- Pikiran yang berpacu\n- Kegelisahan dan iritabilitas\n- Ketegangan otot\n\nSolusi:\n- Berbicara dengan dokter atau psikolog\n- Berlatih meditasi dan mindfulness\n- Terlibat dalam aktivitas yang menenangkan\n- Dukungan dari keluarga dan teman sangat penting",
            'category' => 'Mental Health',
            'type' => 'article',
            'thumbnail_url' => 'https://images.unsplash.com/photo-1573142651698-acff2f20579c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);

        Content::create([
            'title' => 'Depresi pada Ibu Hamil: Mengenali dan Mengatasi',
            'slug' => 'depresi-pada-ibu-hamil',
            'body' => "Depresi prenatal (depresi selama kehamilan) adalah kondisi medis serius yang mempengaruhi 1 dari 7 ibu hamil. Ini berbeda dengan 'baby blues' dan memerlukan perhatian medis.\n\nGejala Depresi Prenatal:\n- Perasaan sedih atau kosong yang berkepanjangan\n- Kehilangan minat pada aktivitas yang disukai\n- Perubahan pola makan dan tidur\n- Kelelahan ekstrem\n- Perasaan putus asa atau tidak berharga\n- Pikiran tentang menyakiti diri sendiri\n\nPenting untuk Diketahui:\n- Depresi prenatal BUKAN kesalahan Anda\n- Ini adalah kondisi medis yang dapat diobati\n- Pengobatan dapat mencakup terapi, obat-obatan yang aman selama kehamilan, atau keduanya\n- Dengan perawatan yang tepat, mayoritas ibu pulih sepenuhnya\n\nJangan ragu untuk meminta bantuan dari dokter, bidan, atau profesional kesehatan mental.",
            'category' => 'Mental Health',
            'type' => 'article',
            'thumbnail_url' => 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);

        Content::create([
            'title' => 'Psikosis pada Ibu Hamil dan Postpartum',
            'slug' => 'psikosis-pada-ibu-hamil',
            'body' => "Psikosis postpartum adalah kondisi kesehatan mental yang jarang namun serius yang dapat terjadi setelah melahirkan atau dalam kasus yang lebih jarang, selama kehamilan. Ini merupakan keadaan darurat medis yang memerlukan perhatian segera.\n\nGejala Psikosis:\n- Halusinasi (melihat, mendengar, atau merasakan hal yang tidak ada)\n- Delusi (kepercayaan yang salah atau aneh)\n- Kebingungan atau disorientasi\n- Pikiran yang tidak teratur\n- Perubahan mood yang ekstrem\n- Paranoia atau ketakutan yang tidak rasional\n- Perilaku berbahaya terhadap diri sendiri atau bayi\n\nFaktor Risiko:\n- Riwayat bipolar atau penyakit mental lainnya\n- Pengalaman psikosis sebelumnya\n- Keluarga dengan riwayat psikosis\n- Kurang tidur\n- Stres ekstrem\n\nTindakan Segera:\nJika Anda atau orang terkasih mengalami gejala ini, SEGERA hubungi:\n- Layanan darurat (119 atau nomor lokal)\n- Rumah sakit\n- Dokter kandungan atau psikiatri\n\nPengobatan:\n- Terapi farmakologis (obat-obatan)\n- Rawat inap jika diperlukan\n- Dukungan keluarga yang kuat\n- Terapi psikologis\n\nDengan perawatan cepat dan tepat, sebagian besar ibu dengan psikosis postpartum dapat sembuh sepenuhnya.",
            'category' => 'Mental Health',
            'type' => 'article',
            'thumbnail_url' => 'https://images.unsplash.com/photo-1527482797697-8795b1a55a45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        ]);
    }
}
