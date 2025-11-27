import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link } from '@inertiajs/react';

export default function ScreeningResult({ auth, screening }) {
    const getRiskInfo = (level) => {
        switch (level) {
            case 'high':
                return {
                    label: 'Risiko Tinggi',
                    color: 'text-red-600',
                    bgColor: 'bg-red-100',
                    description: 'Skor Anda menunjukkan adanya risiko depresi atau kecemasan yang signifikan.',
                    recommendation: 'Sangat disarankan untuk segera berkonsultasi dengan tenaga kesehatan profesional (Psikolog/Psikiater) atau Bidan/Dokter Kandungan Anda untuk pemeriksaan lebih lanjut.',
                };
            case 'medium':
                return {
                    label: 'Risiko Sedang',
                    color: 'text-yellow-600',
                    bgColor: 'bg-yellow-100',
                    description: 'Skor Anda menunjukkan adanya beberapa gejala yang perlu diperhatikan.',
                    recommendation: 'Disarankan untuk memantau perasaan Anda dan melakukan teknik relaksasi. Jika gejala berlanjut, hubungi tenaga kesehatan.',
                };
            default:
                return {
                    label: 'Risiko Rendah',
                    color: 'text-green-600',
                    bgColor: 'bg-green-100',
                    description: 'Skor Anda berada dalam batas normal.',
                    recommendation: 'Pertahankan kesehatan mental Anda dengan istirahat cukup, makan bergizi, dan tetap aktif.',
                };
        }
    };

    const riskInfo = getRiskInfo(screening.risk_level);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Hasil Skrining</h2>}
        >
            <Head title="Hasil Skrining" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 text-center">
                            <h3 className="text-2xl font-bold mb-4">Hasil Skrining Anda</h3>
                            
                            <div className={`inline-block px-6 py-3 rounded-full text-xl font-bold mb-6 ${riskInfo.bgColor} ${riskInfo.color}`}>
                                {riskInfo.label}
                            </div>

                            <p className="text-4xl font-bold mb-2">{screening.total_score} <span className="text-lg font-normal text-gray-500">/ 30</span></p>
                            <p className="text-gray-500 mb-8">Total Skor</p>

                            <div className="max-w-2xl mx-auto text-left bg-gray-50 p-6 rounded-lg mb-8">
                                <h4 className="font-bold text-lg mb-2">Interpretasi:</h4>
                                <p className="mb-4">{riskInfo.description}</p>
                                
                                <h4 className="font-bold text-lg mb-2">Rekomendasi:</h4>
                                <p>{riskInfo.recommendation}</p>
                            </div>

                            <div className="flex justify-center gap-4">
                                <Link href={route('screening.index')}>
                                    <PrimaryButton>
                                        Ulangi Skrining
                                    </PrimaryButton>
                                </Link>
                                <Link href={route('screening.history')} className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150">
                                    Riwayat Skrining
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
