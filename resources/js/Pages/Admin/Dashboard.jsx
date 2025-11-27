import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function AdminDashboard({ auth, stats, recentScreenings }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Admin Dashboard</h2>}
        >
            <Head title="Admin Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-6">
                        <Link href={route('admin.content.index')} className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
                            Kelola Konten Edukasi
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-500 text-sm uppercase font-semibold mb-2">Total Pengguna</div>
                            <div className="text-3xl font-bold text-gray-900">{stats.totalUsers}</div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-500 text-sm uppercase font-semibold mb-2">Total Skrining</div>
                            <div className="text-3xl font-bold text-gray-900">{stats.totalScreenings}</div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                            <div className="text-gray-500 text-sm uppercase font-semibold mb-2">Risiko Tinggi</div>
                            <div className="text-3xl font-bold text-red-600">{stats.riskDistribution.high}</div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6 mb-8">
                        <h3 className="text-lg font-bold mb-4">Distribusi Risiko Kesehatan Mental</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <div className="text-green-700 font-semibold mb-1">Risiko Rendah</div>
                                <div className="text-2xl font-bold text-green-800">{stats.riskDistribution.low}</div>
                                <div className="text-sm text-green-600">Ibu hamil</div>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                <div className="text-yellow-700 font-semibold mb-1">Risiko Sedang</div>
                                <div className="text-2xl font-bold text-yellow-800">{stats.riskDistribution.medium}</div>
                                <div className="text-sm text-yellow-600">Ibu hamil</div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <div className="text-red-700 font-semibold mb-1">Risiko Tinggi</div>
                                <div className="text-2xl font-bold text-red-800">{stats.riskDistribution.high}</div>
                                <div className="text-sm text-red-600">Ibu hamil</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <h3 className="text-lg font-bold mb-4">Riwayat Skrining Terbaru</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nama Pengguna
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tanggal
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Skor
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Risiko
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {recentScreenings && recentScreenings.length > 0 ? (
                                        recentScreenings.map((screening) => (
                                            <tr key={screening.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">{screening.user ? screening.user.name : 'Unknown User'}</div>
                                                    <div className="text-sm text-gray-500">{screening.user ? screening.user.email : ''}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{new Date(screening.created_at).toLocaleDateString('id-ID')}</div>
                                                    <div className="text-sm text-gray-500">{new Date(screening.created_at).toLocaleTimeString('id-ID')}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">{screening.total_score}</div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                        ${screening.risk_level === 'high' ? 'bg-red-100 text-red-800' : 
                                                          screening.risk_level === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                                                          'bg-green-100 text-green-800'}`}>
                                                        {screening.risk_level === 'high' ? 'Tinggi' : 
                                                         screening.risk_level === 'medium' ? 'Sedang' : 'Rendah'}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                                                Belum ada data skrining.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
