import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ScreeningIndex({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Pilih Jenis Skrining</h2>}
        >
            <Head title="Pilih Skrining" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium text-center mb-8">Pilih Kategori yang Sesuai dengan Kondisi Anda Saat Ini</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <Link
                                    href={route('screening.pass')}
                                    className="block p-8 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 hover:shadow-lg transition text-center group"
                                >
                                    <div className="text-4xl mb-4">🤰</div>
                                    <h4 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-900">Saya Sedang Hamil</h4>
                                    <p className="text-blue-600 text-sm">
                                        Gunakan metode PASS (Perinatal Anxiety Screening Scale) untuk mendeteksi kecemasan selama kehamilan.
                                    </p>
                                </Link>

                                <Link
                                    href={route('screening.epds')}
                                    className="block p-8 bg-pink-50 border border-pink-200 rounded-xl hover:bg-pink-100 hover:shadow-lg transition text-center group"
                                >
                                    <div className="text-4xl mb-4">🤱</div>
                                    <h4 className="text-xl font-bold text-pink-800 mb-2 group-hover:text-pink-900">Saya Sudah Melahirkan</h4>
                                    <p className="text-pink-600 text-sm">
                                        Gunakan metode EPDS (Edinburgh Postnatal Depression Scale) untuk mendeteksi depresi pasca melahirkan.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
