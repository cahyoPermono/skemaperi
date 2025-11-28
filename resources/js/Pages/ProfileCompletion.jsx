import { useState, useEffect } from 'react';
import { Head, useForm, router } from '@inertiajs/react';

export default function ProfileCompletion() {
    const { data, setData, post, processing, errors } = useForm({
        tanggal_lahir: '',
        berat_badan: '',
        tinggi_badan: '',
        lingkar_lengan: '',
        hpht: '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3;

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('profile.completion.store'));
    };

    // Calculate age from birth date
    const calculateAge = (birthDate) => {
        if (!birthDate) return '';
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const month = today.getMonth() - birth.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    };

    // Calculate pregnancy age from HPHT
    const calculatePregnancyWeeks = (hpht) => {
        if (!hpht) return '';
        const today = new Date();
        const lastMenstruation = new Date(hpht);
        const diffTime = Math.abs(today - lastMenstruation);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(diffDays / 7);
        return weeks;
    };

    const pregnancyWeeks = calculatePregnancyWeeks(data.hpht);
    const age = calculateAge(data.tanggal_lahir);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-brand-900 flex items-center justify-center p-4 overflow-hidden">
            <Head title="Lengkapi Data Diri" />

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>

            <div className="w-full max-w-2xl relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Selamat Datang, Bunda! 👋</h1>
                    <p className="text-brand-200 text-lg">Mari kita lengkapi data diri Bunda untuk memberikan monitoring terbaik</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                        {[1, 2, 3].map((step) => (
                            <div key={step} className="flex items-center flex-1">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition duration-300 ${
                                    step <= currentStep
                                        ? 'bg-brand-600 text-white shadow-lg'
                                        : 'bg-gray-600 text-gray-300'
                                }`}>
                                    {step}
                                </div>
                                {step < 3 && (
                                    <div className={`h-1 flex-1 mx-3 rounded-full transition duration-300 ${
                                        step < currentStep ? 'bg-brand-600' : 'bg-gray-600'
                                    }`}></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white">
                            {currentStep === 1 && 'Data Kesehatan Fisik'}
                            {currentStep === 2 && 'Data Kehamilan'}
                            {currentStep === 3 && 'Konfirmasi Data'}
                        </h2>
                        <p className="text-brand-200 mt-2">
                            {currentStep === 1 && 'Informasi tentang kondisi fisik Bunda saat ini'}
                            {currentStep === 2 && 'Informasi tentang kehamilan Bunda'}
                            {currentStep === 3 && 'Periksa kembali semua data Bunda sebelum submit'}
                        </p>
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-purple-500"></div>

                    <form onSubmit={submit} className="p-10">
                        {/* Error Alert */}
                        {Object.keys(errors).length > 0 && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                <div className="flex gap-3">
                                    <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h3 className="font-semibold text-red-900 text-sm">Ada kesalahan:</h3>
                                        <ul className="text-red-700 text-xs mt-2 list-disc list-inside">
                                            {Object.entries(errors).map(([key, message]) => (
                                                <li key={key}>{message}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 1: Physical Health */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Tanggal Lahir
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={data.tanggal_lahir}
                                            onChange={(e) => setData('tanggal_lahir', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                                            required
                                        />
                                        {age && (
                                            <p className="text-xs text-green-600 mt-1">Usia Bunda: {age} tahun</p>
                                        )}
                                    </div>
                                    {errors.tanggal_lahir && (
                                        <p className="text-sm text-red-600 mt-1">{errors.tanggal_lahir}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Berat Badan (kg)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={data.berat_badan}
                                        onChange={(e) => setData('berat_badan', e.target.value)}
                                        placeholder="Contoh: 65"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                                        required
                                    />
                                    {errors.berat_badan && (
                                        <p className="text-sm text-red-600 mt-1">{errors.berat_badan}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Tinggi Badan (cm)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={data.tinggi_badan}
                                        onChange={(e) => setData('tinggi_badan', e.target.value)}
                                        placeholder="Contoh: 165"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                                        required
                                    />
                                    {errors.tinggi_badan && (
                                        <p className="text-sm text-red-600 mt-1">{errors.tinggi_badan}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        Lingkar Lengan Atas (cm)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.1"
                                        value={data.lingkar_lengan}
                                        onChange={(e) => setData('lingkar_lengan', e.target.value)}
                                        placeholder="Contoh: 27"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                                        required
                                    />
                                    {errors.lingkar_lengan && (
                                        <p className="text-sm text-red-600 mt-1">{errors.lingkar_lengan}</p>
                                    )}
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                                    <div className="flex gap-3">
                                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-blue-900">Informasi Penting</p>
                                            <p className="text-sm text-blue-700 mt-1">Data fisik digunakan untuk memantau kesehatan Bunda dan si Kecil selama kehamilan.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Pregnancy Data */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                                        HPHT (Hari Pertama Haid Terakhir)
                                    </label>
                                    <input
                                        type="date"
                                        value={data.hpht}
                                        onChange={(e) => setData('hpht', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-2 focus:ring-brand-500 focus:outline-none transition"
                                        required
                                    />
                                    {pregnancyWeeks && (
                                        <div className="mt-3 p-4 bg-brand-50 border border-brand-200 rounded-lg">
                                            <p className="text-sm font-semibold text-brand-900">Usia Kehamilan Bunda: <span className="text-2xl text-brand-600">{pregnancyWeeks}</span> Minggu</p>
                                            <p className="text-xs text-brand-700 mt-1">Trimester {Math.ceil(pregnancyWeeks / 13)}</p>
                                        </div>
                                    )}
                                    {errors.hpht && (
                                        <p className="text-sm text-red-600 mt-1">{errors.hpht}</p>
                                    )}
                                </div>

                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="flex gap-3">
                                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-green-900">Cara Menentukan HPHT</p>
                                            <p className="text-sm text-green-700 mt-1">HPHT adalah hari pertama menstruasi terakhir Bunda sebelum hamil. Informasi ini membantu kami menghitung usia kehamilan yang akurat.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Review & Confirm */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="font-bold text-gray-900 mb-4">Ringkasan Data Bunda</h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Umur:</span>
                                            <span className="font-semibold text-gray-900">{age ? `${age} tahun` : '-'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Berat Badan:</span>
                                            <span className="font-semibold text-gray-900">{data.berat_badan ? `${data.berat_badan} kg` : '-'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Tinggi Badan:</span>
                                            <span className="font-semibold text-gray-900">{data.tinggi_badan ? `${data.tinggi_badan} cm` : '-'}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Lingkar Lengan:</span>
                                            <span className="font-semibold text-gray-900">{data.lingkar_lengan ? `${data.lingkar_lengan} cm` : '-'}</span>
                                        </div>
                                        <div className="border-t pt-3 mt-3">
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Usia Kehamilan:</span>
                                                <span className="font-bold text-brand-600">{pregnancyWeeks ? `${pregnancyWeeks} minggu` : '-'}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="flex gap-3">
                                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <p className="font-semibold text-blue-900">Data Lengkap & Aman</p>
                                            <p className="text-sm text-blue-700 mt-1">Semua data telah diisi dengan lengkap. Data Bunda dilindungi dengan enkripsi tingkat tinggi.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex gap-4 mt-10">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-300"
                                >
                                    Kembali
                                </button>
                            )}

                            {currentStep < 3 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-lg hover:from-brand-600 hover:to-brand-700 transition duration-300"
                                >
                                    Lanjut
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="flex-1 px-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-lg hover:from-brand-600 hover:to-brand-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {processing ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Menyimpan...
                                        </span>
                                    ) : (
                                        'Selesai & Lanjut ke Dashboard'
                                    )}
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <p className="text-center text-gray-300 text-sm mt-6">
                    ✨ Data Bunda aman dan terlindungi dengan enkripsi tingkat tinggi ✨
                </p>
            </div>
        </div>
    );
}
