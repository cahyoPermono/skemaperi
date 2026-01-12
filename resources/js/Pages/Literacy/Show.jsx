import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function LiteracyShow({ auth, content }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Literasi Kesehatan</h2>}
        >
            <Head title={content.title} />

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <Link href={route('literacy.index')} className="text-blue-600 hover:underline mb-4 inline-block">
                        &larr; Kembali ke Daftar
                    </Link>
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {content.thumbnail_url && (
                            <img src={content.thumbnail_url} alt={content.title} className="w-full h-64 object-cover" />
                        )}
                        
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                    {content.category}
                                </span>
                                <span className="text-sm text-gray-500 uppercase">
                                    {content.type}
                                </span>
                                <span className="text-sm text-gray-400">
                                    {new Date(content.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-6">{content.title}</h1>

                            {content.type === 'video' && content.video_url && (
                                <div className="mb-8 aspect-w-16 aspect-h-9">
                                    <iframe 
                                        src={content.video_url.replace('watch?v=', 'embed/')} 
                                        title={content.title}
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                        className="w-full h-96 rounded-lg"
                                    ></iframe>
                                </div>
                            )}

                            <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                                {content.body}
                            </div>

                            {content.source && (
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Sumber Referensi:</h4>
                                    {content.source.startsWith('http') ? (
                                        <a href={content.source} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm break-all">
                                            {content.source}
                                        </a>
                                    ) : (
                                        <p className="text-sm text-gray-600">{content.source}</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
