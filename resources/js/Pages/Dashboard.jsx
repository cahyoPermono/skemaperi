import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { getPregnancyInfo } from '@/Utils/PregnancyData';

export default function Dashboard({ auth }) {
    const user = auth.user;
    const pregnancyInfo = getPregnancyInfo(user.pregnancy_age_weeks || 0);

    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Beranda</h2>}
        >
            <Head title="Beranda" />

            <div className="py-8 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Welcome Section with Gradient */}
                    {/* Interactive Baby Monitor */}
                    <div className="mb-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-brand-100">
                        <div className="flex flex-col md:flex-row">
                             {/* Left: Baby Image */}
                            <div className="md:w-1/3 bg-brand-50 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-brand-100">
                                <div className="w-48 h-48 bg-white rounded-full shadow-inner flex items-center justify-center overflow-hidden mb-4 p-4 border-4 border-brand-200">
                                    <img 
                                        src={pregnancyInfo.image} 
                                        alt={`Bayi Bulan ${pregnancyInfo.month}`} 
                                        className="w-full h-full object-contain drop-shadow-md"
                                        onError={(e) => {e.target.src = 'https://via.placeholder.com/150?text=Bayi';}} 
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-700">Bulan Ke-{pregnancyInfo.month}</h3>
                                <div className="mt-2 px-3 py-1 bg-brand-200 text-brand-800 rounded-full text-xs font-semibold uppercase tracking-wider">
                                    Trimester {pregnancyInfo.trimester}
                                </div>
                            </div>

                            {/* Right: Info & Advice */}
                            <div className="md:w-2/3 p-8 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Halo, Bunda {user.name}! 👋</h2>
                                    <p className="text-gray-600">
                                        Usia kehamilan: <span className="font-bold text-brand-600">{user.pregnancy_age_weeks} Minggu</span>
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                        <h4 className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                                            <span className="text-xl">👶</span> Perkembangan Bayi
                                        </h4>
                                        <p className="text-blue-800 text-sm leading-relaxed">
                                            {pregnancyInfo.monthlyAdvice}
                                        </p>
                                    </div>

                                    <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
                                        <h4 className="font-bold text-pink-900 mb-1 flex items-center gap-2">
                                            <span className="text-xl">💡</span> Saran Trimester Ini
                                        </h4>
                                        <p className="text-pink-800 text-sm leading-relaxed">
                                            {pregnancyInfo.trimesterAdvice}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Status Kehamilan</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">Trimester {Math.ceil(user.pregnancy_age_weeks / 13)}</p>
                                </div>
                                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Minggu Tersisa</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{42 - user.pregnancy_age_weeks}</p>
                                </div>
                                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Perkembangan</p>
                                    <p className="text-2xl font-bold text-gray-900 mt-1">{Math.round((user.pregnancy_age_weeks / 40) * 100)}%</p>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Cards */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu Utama</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Screening Card */}
                            <Link href={route('screening.index')} className="group">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-300 transition duration-300 h-full">
                                    {/* Card Header */}
                                    <div className="h-32 bg-gradient-to-br from-brand-400 to-brand-600 relative overflow-hidden group-hover:scale-105 transition duration-300">
                                        <div className="absolute inset-0 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                                                <circle cx="20" cy="20" r="20" fill="white" />
                                                <circle cx="80" cy="80" r="30" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Cek Kesehatan Mental</h4>
                                        <p className="text-sm text-gray-600 mb-4">Lakukan skrining mandiri untuk mengetahui kondisi kesehatan mental Bunda dengan mudah.</p>
                                        <div className="flex items-center text-brand-600 font-semibold group-hover:translate-x-1 transition">
                                            Mulai Skrining
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Literacy Card */}
                            <Link href={route('literacy.index')} className="group">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-accent-300 transition duration-300 h-full">
                                    {/* Card Header */}
                                    <div className="h-32 bg-gradient-to-br from-accent-400 to-accent-600 relative overflow-hidden group-hover:scale-105 transition duration-300">
                                        <div className="absolute inset-0 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                                                <circle cx="20" cy="20" r="20" fill="white" />
                                                <circle cx="80" cy="80" r="30" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Baca Artikel & Tips</h4>
                                        <p className="text-sm text-gray-600 mb-4">Temukan informasi bermanfaat seputar kehamilan, gizi, dan relaksasi untuk Bunda.</p>
                                        <div className="flex items-center text-accent-600 font-semibold group-hover:translate-x-1 transition">
                                            Baca Sekarang
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* Contacts Card */}
                            <Link href={route('contacts.index')} className="group">
                                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-green-300 transition duration-300 h-full">
                                    {/* Card Header */}
                                    <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden group-hover:scale-105 transition duration-300">
                                        <div className="absolute inset-0 opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                                                <circle cx="20" cy="20" r="20" fill="white" />
                                                <circle cx="80" cy="80" r="30" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold text-gray-900 mb-2">Cari Bantuan Profesional</h4>
                                        <p className="text-sm text-gray-600 mb-4">Hubungi bidan, psikolog, atau rumah sakit terdekat jika Bunda butuh bantuan.</p>
                                        <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-1 transition">
                                            Lihat Kontak
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Progress Tracking */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Progres Kehamilan
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-medium text-gray-700">Minggu Kehamilan</span>
                                        <span className="font-bold text-brand-600">{user.pregnancy_age_weeks}/40</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-brand-500 to-brand-600 h-3 rounded-full transition-all duration-500"
                                            style={{ width: `${(user.pregnancy_age_weeks / 40) * 100}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600 mt-4">
                                    Bunda sudah melewati {Math.round((user.pregnancy_age_weeks / 40) * 100)}% dari perjalanan kehamilan. Luar biasa!
                                </p>
                            </div>
                        </div>

                        {/* Motivation */}
                        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    Semangat Bunda
                                </h3>
                                <blockquote className="text-lg font-semibold italic mb-4">
                                    "Setiap hari adalah kesempatan baru untuk merawat diri dan si Kecil. Bunda sangat hebat!"
                                </blockquote>
                                <p className="text-white/90">Ingat, kesehatan mental sama pentingnya dengan kesehatan fisik. Jangan ragu untuk meminta bantuan.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-gradient-to-r from-brand-600 via-purple-600 to-accent-600 rounded-2xl shadow-xl p-8 text-white text-center overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
                                <circle cx="20" cy="20" r="20" fill="white" />
                                <circle cx="80" cy="80" r="30" fill="white" />
                            </svg>
                        </div>
                        <div className="relative z-10">
                            <blockquote className="text-2xl font-bold italic mb-6">
                                "Menjadi ibu bukan tentang menjadi sempurna, tetapi tentang mencintai dengan sepenuh hati."
                            </blockquote>
                            <p className="font-semibold text-brand-100">✨ SKEMA PERI ✨</p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
