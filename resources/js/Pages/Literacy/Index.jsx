import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export default function LiteracyIndex({ auth, featuredContents, regularContents, categories, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [category, setCategory] = useState(filters.category || 'All');
    const [debouncedSearch] = useDebounce(search, 300);

    useEffect(() => {
        const searchValue = debouncedSearch || '';
        const categoryValue = category || 'All';
        const filtersSearch = filters.search || '';
        const filtersCategory = filters.category || 'All';

        if (searchValue !== filtersSearch || categoryValue !== filtersCategory) {
            router.get(route('literacy.index'), { search: searchValue, category: categoryValue }, {
                preserveState: true,
                replace: true,
            });
        }
    }, [debouncedSearch, category]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Literasi Kesehatan</h2>}
        >
            <Head title="Literasi Kesehatan" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <TextInput
                                type="text"
                                className="w-full"
                                placeholder="Cari artikel atau video..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="w-full sm:w-48">
                            <select
                                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="All">Semua Kategori</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {featuredContents.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-indigo-500 pl-3">
                                Bacaan Penting & Wajib
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {featuredContents.map((content) => (
                                    <Link key={content.id} href={route('literacy.show', content.slug)} className="block group relative">
                                        <div className="bg-white overflow-hidden shadow-lg rounded-xl h-full hover:shadow-xl transition border border-indigo-100 transform hover:-translate-y-1">
                                            {content.thumbnail_url && (
                                                <div className="relative">
                                                    <img src={content.thumbnail_url} alt={content.title} className="w-full h-56 object-cover" />
                                                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                                        PENTING
                                                    </div>
                                                </div>
                                            )}
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                                                        {content.category}
                                                    </span>
                                                    <span className="text-xs text-gray-500 uppercase">
                                                        {content.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition mb-2">
                                                    {content.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-3">
                                                    {content.body.substring(0, 150)}...
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">
                            Artikel Lainnya
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularContents.length > 0 ? (
                                regularContents.map((content) => (
                                    <Link key={content.id} href={route('literacy.show', content.slug)} className="block group">
                                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-full hover:shadow-md transition">
                                            {content.thumbnail_url && (
                                                <img src={content.thumbnail_url} alt={content.title} className="w-full h-48 object-cover" />
                                            )}
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                                        {content.category}
                                                    </span>
                                                    <span className="text-xs text-gray-500 uppercase">
                                                        {content.type}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition mb-2">
                                                    {content.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm line-clamp-3">
                                                    {content.body.substring(0, 150)}...
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-lg">
                                    {featuredContents.length > 0 ? "Tidak ada artikel tambahan." : "Tidak ada konten yang ditemukan."}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
