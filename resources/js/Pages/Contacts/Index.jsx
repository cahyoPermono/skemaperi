import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import { Head, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export default function ContactIndex({ auth, contacts, types, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [type, setType] = useState(filters.type || 'All');
    const [debouncedSearch] = useDebounce(search, 300);

    useEffect(() => {
        const searchValue = debouncedSearch || '';
        const typeValue = type || 'All';
        const filtersSearch = filters.search || '';
        const filtersType = filters.type || 'All';

        if (searchValue !== filtersSearch || typeValue !== filtersType) {
            router.get(route('contacts.index'), { search: searchValue, type: typeValue }, {
                preserveState: true,
                replace: true,
            });
        }
    }, [debouncedSearch, type]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Direktori Kontak</h2>}
        >
            <Head title="Direktori Kontak" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="mb-6 flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <TextInput
                                type="text"
                                className="w-full"
                                placeholder="Cari nama atau lokasi..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <div className="w-full sm:w-48">
                            <select
                                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="All">Semua Tipe</option>
                                {types.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contacts.length > 0 ? (
                            contacts.map((contact) => (
                                <div key={contact.id} className="bg-white overflow-hidden shadow-sm sm:rounded-lg hover:shadow-md transition">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-semibold bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                                                {contact.type}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {contact.location}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                                            {contact.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {contact.address}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <a href={`tel:${contact.phone}`} className="flex-1 text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition">
                                                Hubungi
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 text-gray-500">
                                Tidak ada kontak yang ditemukan.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
