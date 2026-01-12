SET FOREIGN_KEY_CHECKS=0;
START TRANSACTION;

-- Data for table `users`
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `pregnancy_age_weeks`, `location`, `remember_token`, `created_at`, `updated_at`, `role`, `tanggal_lahir`, `berat_badan`, `tinggi_badan`, `lingkar_lengan`, `hpht`, `nomor_hp`, `profile_completed`) VALUES (1, 'bunda2', 'bunda2@gmail.com', NULL, '$2y$12$9jWm7u2SNh7Y2LFqHUT5ceDkWna38QYVygxKLfCLEIjnUQKZYtVUG', 1, 'GUNUNG RAYA, KABUPATEN KERINCI, JAMBI', 'L8LCFCbACxzFE3TlYgpgOJKwxgGNHz8ZokncSkD9rVUbgTMVlxuHESjWuYcJ', '2026-01-12 04:36:28', '2026-01-12 04:36:49', 'user', '1991-02-01', 89, 165, 27, '2026-01-01', NULL, 1);
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `pregnancy_age_weeks`, `location`, `remember_token`, `created_at`, `updated_at`, `role`, `tanggal_lahir`, `berat_badan`, `tinggi_badan`, `lingkar_lengan`, `hpht`, `nomor_hp`, `profile_completed`) VALUES (2, 'Admin Skemaperi', 'admin@skemaperi.com', NULL, '$2y$12$vrP0T9GImFrHz8zuR1TCWuHs4BKzLcd82ogasgBhV9BvMaA3I7jfq', 0, 'Kantor Pusat', NULL, '2026-01-12 04:52:32', '2026-01-12 04:52:32', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, 0);

-- Data for table `contents`
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (1, 'Mengenal Baby Blues dan Depresi Pasca Melahirkan', 'mengenal-baby-blues-dan-depresi-pasca-melahirkan', 'Baby blues adalah kondisi perubahan suasana hati yang umum terjadi setelah melahirkan. Gejalanya meliputi menangis tanpa alasan jelas, mudah tersinggung, lelah, dan cemas. Kondisi ini biasanya berlangsung selama beberapa hari hingga dua minggu.

Namun, jika gejala ini menetap lebih dari dua minggu dan semakin parah, ini bisa menjadi tanda Depresi Pasca Melahirkan (Postpartum Depression). Gejala depresi ini lebih serius, seperti merasa putus asa, tidak bisa merawat bayi, menarik diri dari keluarga, atau bahkan memiliki pikiran untuk menyakiti diri sendiri atau bayi.

Penting untuk berbicara dengan pasangan, keluarga, atau tenaga profesional jika Bunda merasakan gejala-gejala ini. Ingat, meminta bantuan bukan tanda kelemahan, melainkan langkah penting untuk kesehatan Bunda dan si Kecil.', 'Kesehatan Mental', 'article', 'https://images.unsplash.com/photo-1555675661-096d4263e8a2?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 04:54:10', '2026-01-12 11:00:40', 'https://www.alodokter.com/baby-blues-syndrome', 0);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (2, 'Tips Menjaga Nutrisi Selama Kehamilan', 'tips-menjaga-nutrisi-selama-kehamilan', 'Nutrisi yang baik sangat penting untuk pertumbuhan janin dan kesehatan ibu. Berikut beberapa tips menjaga asupan nutrisi:

1. **Konsumsi Asam Folat:** Penting untuk mencegah cacat tabung saraf. Sumbernya bisa dari sayuran hijau, kacang-kacangan, atau suplemen.
2. **Perbanyak Zat Besi:** Mencegah anemia yang sering terjadi pada ibu hamil. Makanlah daging merah, bayam, atau hati ayam.
3. **Kalsium untuk Tulang:** Janin membutuhkan kalsium untuk pembentukan tulang. Susu, keju, dan yogurt adalah sumber yang baik.
4. **Hidrasi yang Cukup:** Minum setidaknya 8-10 gelas air sehari untuk menjaga volume darah dan cairan ketuban.

Hindari makanan mentah, ikan bermerkuri tinggi, dan alkohol demi keamanan janin.', 'Gizi', 'article', 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 04:54:10', '2026-01-12 11:00:40', 'Kementerian Kesehatan RI', 0);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (3, 'Relaksasi Pernapasan untuk Mengurangi Kecemasan', 'relaksasi-pernapasan-untuk-mengurangi-kecemasan', 'Kecemasan adalah hal yang wajar dialami selama kehamilan dan setelah melahirkan. Salah satu cara mudah untuk mengatasinya adalah dengan teknik pernapasan dalam.

**Langkah-langkah:**
1. Duduk atau berbaring di tempat yang nyaman.
2. Letakkan satu tangan di dada dan satu tangan di perut.
3. Tarik napas perlahan melalui hidung selama 4 hitungan, rasakan perut mengembang.
4. Tahan napas selama 2 hitungan.
5. Hembuskan napas perlahan melalui mulut selama 6 hitungan.
6. Ulangi siklus ini selama 5-10 menit.

Lakukan ini setiap kali Bunda merasa stres atau cemas untuk membantu menenangkan sistem saraf.', 'Relaksasi', 'article', 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 04:54:10', '2026-01-12 11:00:40', 'American Psychological Association', 0);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (4, 'Pentingnya Self-Care untuk Ibu Baru', 'pentingnya-self-care-untuk-ibu-baru', 'Menjadi ibu baru adalah pekerjaan penuh waktu yang melelahkan. Seringkali, ibu lupa merawat dirinya sendiri karena sibuk mengurus bayi. Padahal, ibu yang bahagia akan lebih mampu merawat bayinya dengan baik.

Self-care tidak harus mewah. Beberapa ide sederhana:
- Tidur saat bayi tidur.
- Mandi air hangat dengan tenang.
- Membaca buku favorit selama 15 menit.
- Berjalan-jalan santai di pagi hari.
- Meminta bantuan pasangan atau keluarga untuk menjaga bayi sebentar.

Jangan merasa bersalah untuk meluangkan waktu bagi diri sendiri, Bunda.', 'Self-Care', 'article', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 04:54:10', '2026-01-12 11:00:40', NULL, 0);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (5, 'Video: Senam Hamil Sederhana di Rumah', 'video-senam-hamil-sederhana-di-rumah', 'Tetap aktif selama kehamilan dapat membantu mengurangi sakit punggung, meningkatkan energi, dan mempersiapkan tubuh untuk persalinan. Berikut adalah panduan senam hamil sederhana yang aman dilakukan di rumah. Jangan lupa konsultasikan dengan dokter sebelum memulai program olahraga baru.', 'Relaksasi', 'video', 'https://img.youtube.com/vi/BPS5A9F0D6o/maxresdefault.jpg', 'https://www.youtube.com/watch?v=BPS5A9F0D6o', '2026-01-12 04:54:10', '2026-01-12 11:00:40', 'YouTube', 0);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (6, 'Tanda Bahaya pada Kehamilan', 'tanda-bahaya-pada-kehamilan', 'Segera bawa ibu hamil ke fasilitas kesehatan jika mengalami salah satu tanda baya berikut:
1. **Muntah terus menerus** dan tidak mau makan.
2. **Demam tinggi**.
3. **Bengkak pada kaki, tangan, atau wajah** disertai sakit kepala atau kejang.
4. **Janin dirasakan kurang bergerak** dibandingkan biasanya.
5. **Perdarahan** pada hamil muda maupun hamil tua.
6. **Air ketuban keluar** sebelum waktunya.

Jangan ditunda, penanganan cepat dapat menyelamatkan nyawa ibu dan bayi.', 'Kesehatan Fisik', 'article', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 10:55:21', '2026-01-12 11:00:40', 'Buku KIA Kementerian Kesehatan RI', 1);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (7, 'Porsi Makan dan Gizi Ibu Hamil', 'porsi-makan-dan-gizi-ibu-hamil', 'Ibu hamil perlu makan lebih banyak dari biasanya untuk pertumbuhan janin.
- **Makanan Pokok**: Nasi, jagung, ubi (sumber tenaga).
- **Lauk Pauk**: Ikan, telur, tempe, tahu, daging (sumber protein untuk pertumbuhan).
- **Sayur dan Buah**: Sumber vitamin dan mineral.
- **Minum Air Putih**: 8-10 gelas sehari.
- **Tablet Tambah Darah**: Minum 1 tablet setiap hari selama kehamilan minimal 90 tablet.

**Pantangan:** Hindari asap rokok, alkohol, dan jamu yang tidak jelas keamanannya.', 'Gizi', 'article', 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 10:55:21', '2026-01-12 11:00:40', 'Buku KIA Kementerian Kesehatan RI', 1);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (8, 'Perawatan Sehari-hari Ibu Hamil', 'perawatan-sehari-hari-ibu-hamil', 'Menjaga kebersihan dan kesehatan diri sangat penting:
1. **Mandi** 2 kali sehari dengan sabun.
2. **Sikat gigi** 2 kali sehari (pagi dan malam).
3. **Istirahat yang cukup**, tidur malam 6-7 jam dan tidur siang 1-2 jam (tidur miring kiri lebih baik).
4. **Hubungan suami istri** boleh dilakukan selama tidak ada keluhan atau larangan dokter.
5. **Aktivitas fisik ringan** seperti jalan pagi sangat dianjurkan.', 'Kesehatan Fisik', 'article', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 10:55:21', '2026-01-12 11:00:40', 'Buku KIA Kementerian Kesehatan RI', 1);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (9, 'Persiapan Persalinan (P4K)', 'persiapan-persalinan-p4k', 'Persiapkan persalinan sejak awal dengan Program Perencanaan Persalinan dan Pencegahan Komplikasi (P4K):
- **Tanyakan tanggal perkiraan lahir**.
- **Siapkan penolong persalinan** (dokter/bidan).
- **Siapkan dana** atau jaminan kesehatan (BPJS/KIS).
- **Siapkan transportasi** ke tempat persalinan.
- **Siapkan calon pendonor darah** jika sewaktu-waktu diperlukan.
- **Siapkan perlengkapan** bayi dan ibu.', 'Persiapan Melahirkan', 'article', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 10:55:21', '2026-01-12 11:00:40', 'Buku KIA Kementerian Kesehatan RI', 1);
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`, `source`, `is_pinned`) VALUES (10, 'Tanda-tanda Awal Persalinan', 'tanda-tanda-awal-persalinan', 'Kenali tanda bahwa persalinan sudah dekat:
1. **Perut mulas** secara teratur, semakin lama semakin sering dan kuat.
2. **Keluar lendir bercampur darah** dari jalan lahir.
3. **Keluar air ketuban** dari jalan lahir.

Jika mengalami tanda-tanda ini, segera hubungi bidan atau dokter dan menuju fasilitas kesehatan.', 'Persiapan Melahirkan', 'article', 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=1000', NULL, '2026-01-12 10:55:21', '2026-01-12 11:00:40', 'Buku KIA Kementerian Kesehatan RI', 1);

-- Data for table `screenings`
INSERT INTO `screenings` (`id`, `user_id`, `total_score`, `risk_level`, `created_at`, `updated_at`, `type`) VALUES (1, 1, 57, 'high', '2026-01-12 04:42:05', '2026-01-12 04:42:05', 'pass');
INSERT INTO `screenings` (`id`, `user_id`, `total_score`, `risk_level`, `created_at`, `updated_at`, `type`) VALUES (2, 1, 5, 'low', '2026-01-12 09:44:07', '2026-01-12 09:44:07', 'pass');

-- Data for table `screening_answers`
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (1, 1, 1, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (2, 1, 2, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (3, 1, 3, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (4, 1, 4, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (5, 1, 5, 0, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (6, 1, 6, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (7, 1, 7, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (8, 1, 8, 0, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (9, 1, 9, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (10, 1, 10, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (11, 1, 11, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (12, 1, 12, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (13, 1, 13, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (14, 1, 14, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (15, 1, 15, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (16, 1, 16, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (17, 1, 17, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (18, 1, 18, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (19, 1, 19, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (20, 1, 20, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (21, 1, 21, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (22, 1, 22, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (23, 1, 23, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (24, 1, 24, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (25, 1, 25, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (26, 1, 26, 1, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (27, 1, 27, 2, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (28, 1, 28, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (29, 1, 29, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (30, 1, 30, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (31, 1, 31, 3, '2026-01-12 04:42:05', '2026-01-12 04:42:05');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (32, 2, 1, 2, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (33, 2, 2, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (34, 2, 3, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (35, 2, 4, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (36, 2, 5, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (37, 2, 6, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (38, 2, 7, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (39, 2, 8, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (40, 2, 9, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (41, 2, 10, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (42, 2, 11, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (43, 2, 12, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (44, 2, 13, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (45, 2, 14, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (46, 2, 15, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (47, 2, 16, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (48, 2, 17, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (49, 2, 18, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (50, 2, 19, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (51, 2, 20, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (52, 2, 21, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (53, 2, 22, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (54, 2, 23, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (55, 2, 24, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (56, 2, 25, 2, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (57, 2, 26, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (58, 2, 27, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (59, 2, 28, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (60, 2, 29, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (61, 2, 30, 0, '2026-01-12 09:44:07', '2026-01-12 09:44:07');
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES (62, 2, 31, 1, '2026-01-12 09:44:07', '2026-01-12 09:44:07');

COMMIT;
SET FOREIGN_KEY_CHECKS=1;
