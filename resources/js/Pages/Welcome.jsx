import { Link, Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth, statistics }) {
    return (
        <>
            <Head title="Selamat Datang" />
            <div className="min-h-screen bg-white selection:bg-brand-500 selection:text-white font-sans text-gray-900 antialiased">
                {/* Navigation */}
                <nav className="absolute top-0 left-0 right-0 z-50">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <ApplicationLogo className="h-24 w-auto fill-current text-brand-600" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {auth.user ? (
                                        <Link
                                            href={route('dashboard')}
                                            className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 transition duration-300 shadow-md hover:shadow-lg"
                                        >
                                            Dashboard
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                href={route('login')}
                                                className="text-gray-600 hover:text-brand-600 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                                            >
                                                Masuk
                                            </Link>
                                            <Link
                                                href={route('register')}
                                                className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 transition duration-300 shadow-md hover:shadow-lg"
                                            >
                                                Daftar Sekarang
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 text-center lg:text-left z-10">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                                Kesehatan Mental Bunda,<br />
                                <span className="text-brand-500">Prioritas Utama Kami</span>
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                SKEMA PERI hadir untuk mendampingi perjalanan kehamilan Bunda. 
                                Lakukan skrining mandiri, temukan informasi terpercaya, dan dapatkan dukungan yang Bunda butuhkan.
                            </p>
                            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                                <Link
                                    href={route('register')}
                                    className="rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition duration-300"
                                >
                                    Mulai Skrining Gratis
                                </Link>
                                <a href="#features" className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-600 transition">
                                    Pelajari Lebih Lanjut <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-200 to-accent-200 rounded-full blur-3xl opacity-30 transform scale-90"></div>
                            <img 
                                src="/images/hero.png" 
                                alt="Ibu Hamil Bahagia" 
                                className="relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </div>
                
                {/* Statistics Section */}
                <div className="bg-brand-600 py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-none">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Dampak Kami Sejauh Ini</h2>
                                <p className="mt-4 text-lg leading-8 text-brand-100">
                                    Bersama membangun kesadaran akan pentingnya kesehatan mental ibu.
                                </p>
                            </div>
                            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                <div className="flex flex-col gap-y-4 rounded-xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm border border-white/20">
                                    <dt className="text-sm leading-7 text-brand-100">Total Skrining Dilakukan</dt>
                                    <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        {statistics?.total || 0}
                                    </dd>
                                </div>
                                <div className="flex flex-col gap-y-4 rounded-xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm border border-white/20">
                                    <dt className="text-sm leading-7 text-brand-100">Risiko Rendah (Aman)</dt>
                                    <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        {statistics?.risks?.low || 0}
                                    </dd>
                                </div>
                                <div className="flex flex-col gap-y-4 rounded-xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm border border-white/20">
                                    <dt className="text-sm leading-7 text-brand-100">Risiko Sedang</dt>
                                    <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        {statistics?.risks?.medium || 0}
                                    </dd>
                                </div>
                                <div className="flex flex-col gap-y-4 rounded-xl bg-white/10 p-6 text-center shadow-lg backdrop-blur-sm border border-white/20">
                                    <dt className="text-sm leading-7 text-brand-100">Risiko Tinggi</dt>
                                    <dd className="order-first text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                        {statistics?.risks?.high || 0}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
                <div id="features" className="py-24 sm:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:text-center mb-16">
                            <h2 className="text-base font-semibold leading-7 text-brand-600">Fitur Unggulan</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Semua yang Bunda Butuhkan
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Kami menyediakan alat dan sumber daya untuk memastikan kesehatan mental Bunda tetap terjaga selama masa kehamilan.
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                                <div className="flex flex-col items-center text-center p-8 bg-brand-50 rounded-3xl hover:shadow-xl transition duration-300 border border-brand-100 group">
                                    <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition duration-300">
                                        <img src="/images/feature-screening.png" alt="Skrining Mandiri" className="h-full w-full object-cover" />
                                    </div>
                                    <dt className="text-xl font-bold leading-7 text-gray-900">Skrining Mandiri</dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">Deteksi dini risiko depresi perinatal dengan kuesioner EPDS yang terstandarisasi dan mudah digunakan.</p>
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center text-center p-8 bg-accent-50 rounded-3xl hover:shadow-xl transition duration-300 border border-accent-100 group">
                                    <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition duration-300">
                                        <img src="/images/feature-literacy.png" alt="Edukasi & Literasi" className="h-full w-full object-cover" />
                                    </div>
                                    <dt className="text-xl font-bold leading-7 text-gray-900">Edukasi & Literasi</dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">Akses artikel dan video edukatif seputar kesehatan mental, gizi, dan tips relaksasi untuk ibu hamil.</p>
                                    </dd>
                                </div>
                                <div className="flex flex-col items-center text-center p-8 bg-green-50 rounded-3xl hover:shadow-xl transition duration-300 border border-green-100 group">
                                    <div className="mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition duration-300">
                                        <img src="/images/feature-support.png" alt="Dukungan Profesional" className="h-full w-full object-cover" />
                                    </div>
                                    <dt className="text-xl font-bold leading-7 text-gray-900">Dukungan Profesional</dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">Temukan kontak penting bidan, psikolog, dan rumah sakit terdekat untuk mendapatkan bantuan profesional.</p>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-white border-t border-gray-100">
                    <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                        <div className="flex justify-center space-x-6 md:order-2">
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                        <div className="mt-8 md:order-1 md:mt-0">
                            <p className="text-center text-xs leading-5 text-gray-500">
                                &copy; 2025 SKEMA PERI. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
