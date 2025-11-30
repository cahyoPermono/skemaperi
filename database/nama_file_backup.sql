-- Hapus semua tabel jika sudah ada untuk memastikan skema bersih
DROP TABLE IF EXISTS `migrations`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `password_reset_tokens`;
DROP TABLE IF EXISTS `failed_jobs`;
DROP TABLE IF EXISTS `personal_access_tokens`;
DROP TABLE IF EXISTS `screening_answers`;
DROP TABLE IF EXISTS `screenings`;
DROP TABLE IF EXISTS `contents`;
DROP TABLE IF EXISTS `contacts`;

--
-- Struktur untuk tabel `migrations`
--
CREATE TABLE `migrations` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `migration` VARCHAR(255) NOT NULL,
  `batch` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `migrations`
--
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(25, '2014_10_12_000000_create_users_table', 1),
(26, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(27, '2019_08_19_000000_create_failed_jobs_table', 1),
(28, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(29, '2025_11_26_071733_create_screening_answers_table', 1),
(30, '2025_11_26_071733_create_screenings_table', 1),
(31, '2025_11_26_072159_create_contents_table', 1),
(32, '2025_11_26_124316_create_contacts_table', 1),
(33, '2025_11_26_133443_add_role_to_users_table', 1),
(34, '2025_11_28_000001_add_profile_fields_to_users_table', 1),
(35, '2025_11_30_153000_add_kecamatan_to_contacts_table', 2);

--
-- Struktur untuk tabel `users`
--
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `email_verified_at` DATETIME NULL,
  `password` VARCHAR(255) NOT NULL,
  `pregnancy_age_weeks` INT NULL,
  `location` VARCHAR(255) NULL,
  `remember_token` VARCHAR(100) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `role` VARCHAR(255) NOT NULL DEFAULT 'user',
  `tanggal_lahir` DATE NULL,
  `berat_badan` DECIMAL(8, 2) NULL,
  `tinggi_badan` DECIMAL(8, 2) NULL,
  `lingkar_lengan` DECIMAL(8, 2) NULL,
  `hpht` DATE NULL,
  `nomor_hp` VARCHAR(255) NULL,
  `profile_completed` TINYINT(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `users`
--
INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `pregnancy_age_weeks`, `location`, `remember_token`, `created_at`, `updated_at`, `role`, `tanggal_lahir`, `berat_badan`, `tinggi_badan`, `lingkar_lengan`, `hpht`, `nomor_hp`, `profile_completed`) VALUES
(1, 'Admin Skemaperi', 'admin@skemaperi.com', NULL, '$2y$12$q7ooi7g3WKGlq2.9WptoAeHumhjBdfxF.xLAXinm7eNr3Jasjj3S6', 0, 'Kantor Pusat', NULL, '2025-11-28 01:59:21', '2025-11-28 01:59:21', 'admin', NULL, NULL, NULL, NULL, NULL, NULL, 0),
(2, 'rahmi', 'rahmi@gmail.com', NULL, '$2y$12$FPcEK6s.Mm6OSq36dHdD5.Dk23qoGzERzLKvAkq1ehWtaQxZPMLdi', 25, 'BALUNG, KABUPATEN JEMBER, JAWA TIMUR', NULL, '2025-11-30 02:16:48', '2025-11-30 02:17:17', 'user', '1990-05-22', 100.00, 170.00, 30.00, '2025-06-02', NULL, 1);

--
-- Struktur untuk tabel `password_reset_tokens`
--
CREATE TABLE `password_reset_tokens` (
  `email` VARCHAR(255) NOT NULL PRIMARY KEY,
  `token` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `password_reset_tokens` (Kosong)
--

--
-- Struktur untuk tabel `failed_jobs`
--
CREATE TABLE `failed_jobs` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `uuid` VARCHAR(255) NOT NULL UNIQUE,
  `connection` LONGTEXT NOT NULL,
  `queue` LONGTEXT NOT NULL,
  `payload` LONGTEXT NOT NULL,
  `exception` LONGTEXT NOT NULL,
  `failed_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `failed_jobs` (Kosong)
--

--
-- Struktur untuk tabel `personal_access_tokens`
--
CREATE TABLE `personal_access_tokens` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `tokenable_type` VARCHAR(255) NOT NULL,
  `tokenable_id` BIGINT UNSIGNED NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `token` VARCHAR(64) NOT NULL UNIQUE,
  `abilities` TEXT NULL,
  `last_used_at` DATETIME NULL,
  `expires_at` DATETIME NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`, `tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `personal_access_tokens` (Kosong)
--

--
-- Struktur untuk tabel `screenings`
--
CREATE TABLE `screenings` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT UNSIGNED NOT NULL,
  `total_score` INT NOT NULL,
  `risk_level` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `screenings`
--
INSERT INTO `screenings` (`id`, `user_id`, `total_score`, `risk_level`, `created_at`, `updated_at`) VALUES
(1, 2, 20, 'high', '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(2, 2, 10, 'medium', '2025-11-30 02:39:30', '2025-11-30 02:39:30');

--
-- Struktur untuk tabel `screening_answers`
--
CREATE TABLE `screening_answers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `screening_id` INT UNSIGNED NOT NULL,
  `question_id` INT UNSIGNED NOT NULL,
  `answer_value` INT NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  FOREIGN KEY (`screening_id`) REFERENCES `screenings` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `screening_answers`
--
INSERT INTO `screening_answers` (`id`, `screening_id`, `question_id`, `answer_value`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(2, 1, 2, 1, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(3, 1, 3, 3, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(4, 1, 4, 3, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(5, 1, 5, 3, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(6, 1, 6, 1, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(7, 1, 7, 3, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(8, 1, 8, 3, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(9, 1, 9, 2, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(10, 1, 10, 1, '2025-11-30 02:37:56', '2025-11-30 02:37:56'),
(11, 2, 1, 0, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(12, 2, 2, 1, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(13, 2, 3, 1, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(14, 2, 4, 1, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(15, 2, 5, 0, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(16, 2, 6, 1, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(17, 2, 7, 2, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(18, 2, 8, 3, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(19, 2, 9, 1, '2025-11-30 02:39:30', '2025-11-30 02:39:30'),
(20, 2, 10, 0, '2025-11-30 02:39:30', '2025-11-30 02:39:30');

--
-- Struktur untuk tabel `contents`
--
CREATE TABLE `contents` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `body` LONGTEXT NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL DEFAULT 'article',
  `thumbnail_url` VARCHAR(255) NULL,
  `video_url` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `contents` (Fungsi replace() telah dihilangkan dan konten dimasukkan sebagai string literal)
--
INSERT INTO `contents` (`id`, `title`, `slug`, `body`, `category`, `type`, `thumbnail_url`, `video_url`, `created_at`, `updated_at`) VALUES
(1, 'Pentingnya Self-Care Selama Kehamilan', 'pentingnya-self-care-selama-kehamilan', 'Kehamilan adalah masa perubahan besar, baik secara fisik maupun emosional. Self-care atau perawatan diri bukan hanya tentang memanjakan diri, tetapi juga tentang menjaga kesehatan mental dan fisik Anda serta bayi Anda.\r\n\r\nTips Self-Care:\r\n1. Istirahat yang cukup.\r\n2. Makan makanan bergizi.\r\n3. Tetap terhidrasi.\r\n4. Lakukan aktivitas fisik ringan seperti yoga atau berjalan kaki.\r\n5. Luangkan waktu untuk hobi yang Anda nikmati.', 'Self-Care', 'article', 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', NULL, '2025-11-28 02:00:03', '2025-11-28 02:00:03'),
(2, 'Mengatasi Kecemasan Menjelang Persalinan', 'mengatasi-kecemasan-menjelang-persalinan', 'Merasa cemas menjelang persalinan adalah hal yang wajar. Namun, kecemasan yang berlebihan dapat mengganggu kesehatan Anda.\r\n\r\nCara Mengatasi:\r\n- Bicarakan ketakutan Anda dengan pasangan atau bidan.\r\n- Ikuti kelas persiapan persalinan.\r\n- Latih teknik pernapasan dan relaksasi.\r\n- Hindari cerita persalinan yang menakutkan.', 'Relaksasi', 'article', 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', NULL, '2025-11-28 02:00:03', '2025-11-28 02:00:03'),
(3, 'Nutrisi Seimbang untuk Ibu Hamil', 'nutrisi-seimbang-untuk-ibu-hamil', 'Asupan nutrisi yang baik sangat penting untuk pertumbuhan janin dan kesehatan ibu. Pastikan piring Anda berisi karbohidrat kompleks, protein, lemak sehat, serta sayur dan buah.\r\n\r\nZat Besi dan Asam Folat adalah dua nutrisi kunci yang tidak boleh dilewatkan.', 'Gizi', 'article', 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', NULL, '2025-11-28 02:00:03', '2025-11-28 02:00:03'),
(4, 'Video Relaksasi Pernapasan', 'video-relaksasi-pernapasan', 'Ikuti panduan video ini untuk melatih pernapasan dalam yang dapat membantu Anda merasa lebih tenang dan rileks.', 'Relaksasi', 'video', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 'https://www.youtube.com/watch?v=inpok4MKVLM', '2025-11-28 02:00:03', '2025-11-28 02:00:03'),
(5, 'Memahami Kecemasan pada Ibu Hamil', 'memahami-kecemasan-pada-ibu-hamil', 'Kecemasan selama kehamilan adalah pengalaman yang sangat umum. Perubahan hormon, tanggung jawab yang akan datang, dan ketidakpastian dapat memicu kecemasan.\r\n\r\nGejala Kecemasan:\r\n- Kesulitan tidur atau konsentrasi\r\n- Pikiran yang berpacu\r\n- Kegelisahan dan iritabilitas\r\n- Ketegangan otot\r\n\r\nSolusi:\r\n- Berbicara dengan dokter atau psikolog\r\n- Berlatih meditasi dan mindfulness\r\n- Terlibat dalam aktivitas yang menenangkan\r\n- Dukungan dari keluarga dan teman sangat penting', 'Self-Care', 'article', 'https://plus.unsplash.com/premium_vector-1682306467703-20315a0656c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlZ25hbnQlMjBkZXByZXNzaW9ufGVufDB8fDB8fHww', NULL, '2025-11-28 02:00:03', '2025-11-30 04:29:01'),
(6, 'Depresi pada Ibu Hamil: Mengenali dan Mengatasi', 'depresi-pada-ibu-hamil', 'Depresi prenatal (depresi selama kehamilan) adalah kondisi medis serius yang mempengaruhi 1 dari 7 ibu hamil. Ini berbeda dengan ''baby blues'' dan memerlukan perhatian medis.\r\n\r\nGejala Depresi Prenatal:\r\n- Perasaan sedih atau kosong yang berkepanjangan\r\n- Kehilangan minat pada aktivitas yang disukai\r\n- Perubahan pola makan dan tidur\r\n- Kelelahan ekstrem\r\n- Perasaan putus asa atau tidak berharga\r\n- Pikiran tentang menyakiti diri sendiri\r\n\r\nPenting untuk Diketahui:\r\n- Depresi prenatal BUKAN kesalahan Anda\r\n- Ini adalah kondisi medis yang dapat diobati\r\n- Pengobatan dapat mencakup terapi, obat-obatan yang aman selama kehamilan, atau keduanya\r\n- Dengan perawatan yang tepat, mayoritas ibu pulih sepenuhnya\r\n\r\nJangan ragu untuk meminta bantuan dari dokter, bidan, atau profesional kesehatan mental.', 'Mental Health', 'article', 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', NULL, '2025-11-28 02:00:03', '2025-11-28 02:00:03'),
(7, 'Psikosis pada Ibu Hamil dan Postpartum', 'psikosis-pada-ibu-hamil-dan-postpartum', 'Psikosis postpartum adalah kondisi kesehatan mental yang jarang namun serius yang dapat terjadi setelah melahirkan atau dalam kasus yang lebih jarang, selama kehamilan. Ini merupakan keadaan darurat medis yang memerlukan perhatian segera.\r\n\r\nGejala Psikosis:\r\n- Halusinasi (melihat, mendengar, atau merasakan hal yang tidak ada)\r\n- Delusi (kepercayaan yang salah atau aneh)\r\n- Kebingungan atau disorientasi\r\n- Pikiran yang tidak teratur\r\n- Perubahan mood yang ekstrem\r\n- Paranoia atau ketakutan yang tidak rasional\r\n- Perilaku berbahaya terhadap diri sendiri atau bayi\r\n\r\nFaktor Risiko:\r\n- Riwayat bipolar atau penyakit mental lainnya\r\n- Pengalaman psikosis sebelumnya\r\n- Keluarga dengan riwayat psikosis\r\n- Kurang tidur\r\n- Stres ekstrem\r\n\r\nTindakan Segera:\r\nJika Anda atau orang terkasih mengalami gejala ini, SEGERA hubungi:\r\n- Layanan darurat (119 atau nomor lokal)\r\n- Rumah sakit\r\n- Dokter kandungan atau psikiatri\r\n\r\nPengobatan:\r\n- Terapi farmakologis (obat-obatan)\r\n- Rawat inap jika diperlukan\r\n- Dukungan keluarga yang kuat\r\n- Terapi psikologis\r\n\r\nDengan perawatan cepat dan tepat, sebagian besar ibu dengan psikosis postpartum dapat sembuh sepenuhnya.', 'Kesehatan Mental', 'article', 'https://media.istockphoto.com/id/2197618081/photo/mother-and-baby-in-counseling-session-healthcare-professional-listening.webp?a=1&b=1&s=612x612&w=0&k=20&c=O_7CzcEYv7BWed27YodRmyvq92q6Tf7p_Lv-2mycuAY=', NULL, '2025-11-28 02:00:03', '2025-11-30 04:22:20');

--
-- Struktur untuk tabel `contacts`
--
CREATE TABLE `contacts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `type` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NULL,
  `address` TEXT NULL,
  `location` VARCHAR(255) NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `kecamatan` VARCHAR(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Data untuk tabel `contacts`
--
INSERT INTO `contacts` (`id`, `name`, `type`, `phone`, `address`, `location`, `created_at`, `updated_at`, `kecamatan`) VALUES
(1, 'Puskesmas Kecamatan Gambir', 'Puskesmas', '021-3843958', 'Jl. Tanah Abang I No.10, Petojo Sel., Kecamatan Gambir, Kota Jakarta Pusat', 'Jakarta Pusat', '2025-11-28 02:00:03', '2025-11-28 02:00:03', NULL),
(2, 'RSIA Bunda Jakarta', 'Rumah Sakit', '1-500-799', 'Jl. Teuku Cik Ditiro No.28, Gondangdia, Kec. Menteng, Kota Jakarta Pusat', 'Jakarta Pusat', '2025-11-28 02:00:03', '2025-11-28 02:00:03', NULL),
(3, 'Bidan Delima', 'Bidan Praktik Mandiri', '0812-3456-7890', 'Jl. Kebon Jeruk Raya No. 15, Jakarta Barat', 'Jakarta Barat', '2025-11-28 02:00:03', '2025-11-28 02:00:03', NULL),
(4, 'Layanan Psikologi Sehati', 'Psikolog', '0811-9876-5432', 'Jl. Fatmawati No. 99, Jakarta Selatan', 'Jakarta Selatan', '2025-11-28 02:00:03', '2025-11-28 02:00:03', NULL),
(5, 'Puskesmas Balung', 'Puskesmas', '081287885356', 'balung', 'jember', '2025-11-30 02:15:49', '2025-11-30 02:15:49', 'Balung');
