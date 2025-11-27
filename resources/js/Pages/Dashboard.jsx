import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    const user = auth.user;

    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Beranda</h2>}
        >
            <Head title="Beranda" />

            <div className="py-12 bg-brand-50 min-h-screen">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Welcome Section */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-8 border-l-4 border-brand-500">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-2xl font-bold text-brand-700 mb-2">Selamat Datang, Bunda {user.name}!</h3>
                            <p className="text-gray-600">
                                Bagaimana perasaan Bunda hari ini? Semoga Bunda dan si Kecil selalu sehat dan bahagia.
                            </p>
                            {user.pregnancy_age_weeks > 0 && (
                                <div className="mt-4 inline-flex items-center px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Usia Kehamilan: {user.pregnancy_age_weeks} Minggu
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Access Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* Screening Card */}
                        <Link href={route('screening.index')} className="group">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-full border border-gray-100 hover:border-brand-300 hover:shadow-md transition duration-300">
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-200 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600">Cek Kesehatan Mental</h4>
                                    <p className="text-sm text-gray-500">Lakukan skrining mandiri untuk mengetahui kondisi kesehatan mental Bunda.</p>
                                </div>
                            </div>
                        </Link>

                        {/* Literacy Card */}
                        <Link href={route('literacy.index')} className="group">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-full border border-gray-100 hover:border-accent-300 hover:shadow-md transition duration-300">
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-200 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent-600">Baca Artikel & Tips</h4>
                                    <p className="text-sm text-gray-500">Temukan informasi bermanfaat seputar kehamilan, gizi, dan relaksasi.</p>
                                </div>
                            </div>
                        </Link>

                        {/* Contacts Card */}
                        <Link href={route('contacts.index')} className="group">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-full border border-gray-100 hover:border-green-300 hover:shadow-md transition duration-300">
                                <div className="p-6 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Cari Bantuan Profesional</h4>
                                    <p className="text-sm text-gray-500">Hubungi bidan, psikolog, atau rumah sakit terdekat jika Bunda butuh bantuan.</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Quote Section */}
                    <div className="bg-gradient-to-r from-brand-400 to-brand-600 rounded-lg shadow-lg p-8 text-white text-center">
                        <blockquote className="text-xl font-medium italic mb-4">
                            "Menjadi ibu bukan tentang menjadi sempurna, tetapi tentang mencintai dengan sepenuh hati."
                        </blockquote>
                        <p className="font-semibold">- SKEMA PERI</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
