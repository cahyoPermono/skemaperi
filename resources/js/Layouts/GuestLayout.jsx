import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="h-screen w-screen fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-brand-900 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-brand-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>

            <div className="w-full max-w-md relative z-10 px-6 flex flex-col items-center justify-center max-h-screen">
                {/* Logo */}
                <div className="flex flex-col items-center mb-6 flex-shrink-0">
                    <Link href="/" className="mb-4 transform hover:scale-110 transition duration-300 flex-shrink-0">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                            <ApplicationLogo className="w-14 h-14 fill-current text-brand-600" />
                        </div>
                    </Link>
                    <h1 className="text-3xl font-bold text-white">SKEMA PERI</h1>
                    <p className="text-brand-200 text-center mt-1 text-sm">Kesehatan Mental Ibu Hamil</p>
                </div>

                {/* Card with scrollable content */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden w-full max-h-[calc(100vh-180px)] flex flex-col">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-accent-500 to-purple-500"></div>
                    <div className="overflow-y-auto flex-1">
                        <div className="p-8">
                            {children}
                        </div>
                    </div>
                </div>

                {/* Footer text */}
                <p className="text-center text-gray-300 text-xs mt-4 flex-shrink-0 px-6">
                    Mendampingi setiap langkah perjalanan kehamilan Bunda dengan penuh kasih sayang
                </p>
            </div>
        </div>
    );
}
