export const getPregnancyInfo = (weeks) => {
    let month = 1;
    let trimester = 1;
    let image = `/images/fetus_month_${month}.png`;
    let advice = 'Jaga asupan asam folat dan istirahat yang cukup.';

    if (weeks >= 1 && weeks <= 4) month = 1;
    else if (weeks <= 8) month = 2;
    else if (weeks <= 13) month = 3;
    else if (weeks <= 17) month = 4;
    else if (weeks <= 21) month = 5;
    else if (weeks <= 26) month = 6;
    else if (weeks <= 30) month = 7;
    else if (weeks <= 35) month = 8;
    else month = 9;
    
    // Ensure month is within 1-9
    if (month < 1) month = 1;
    if (month > 9) month = 9;

    image = `/images/fetus_month_${month}.png`;

    if (month >= 1 && month <= 3) {
        trimester = 1;
        advice = "Trimester Pertama: Fokus pada nutrisi penting seperti asam folat. Istirahat cukup dan hindari stres. Mual dan muntah adalah hal wajar, makanlah dalam porsi kecil tapi sering.";
    } else if (month >= 4 && month <= 6) {
        trimester = 2;
        advice = "Trimester Kedua: Energi Bunda mulai kembali. Mulailah senam hamil ringan. Perhatikan gerakan janin dan nikmati masa 'bulan madu' kehamilan ini.";
    } else {
        trimester = 3;
        advice = "Trimester Ketiga: Persiapkan tas persalinan. Latih pernapasan dan posisi tidur miring ke kiri untuk aliran darah optimal ke bayi.";
    }

    // Specific monthly modifications if needed
    const monthlyAdvice = [
         "", // 0 index
         "Bulan 1: Sel telur telah dibuahi. Jaga pola makan sehat.",
         "Bulan 2: Jantung bayi mulai berdetak. Hindari aktivitas berat.",
         "Bulan 3: Jari-jari bayi mulai terbentuk. Mulai screening rutin.",
         "Bulan 4: Bayi mulai bisa mendengar suara Bunda. Seringlah mengajak bicara.",
         "Bulan 5: Rambut bayi mulai tumbuh. Perhatikan nutrisi kalsium.",
         "Bulan 6: Bayi mulai membuka mata. Jaga posisi tidur yang nyaman.",
         "Bulan 7: Otak bayi berkembang pesat. Konsumsi omega-3.",
         "Bulan 8: Paru-paru bayi mematangkan diri. Kurangi aktivitas fisik.",
         "Bulan 9: Bayi siap lahir! Tetap tenang dan bahagia."
    ];

    return {
        month,
        trimester,
        image,
        trimesterAdvice: advice,
        monthlyAdvice: monthlyAdvice[month] || advice
    };
};
