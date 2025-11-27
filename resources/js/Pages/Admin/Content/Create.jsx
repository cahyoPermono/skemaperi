import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function AdminContentCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        body: '',
        category: '',
        type: 'article',
        thumbnail_url: '',
        video_url: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.content.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Konten</h2>}
        >
            <Head title="Tambah Konten" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="title" value="Judul" />
                                    <TextInput
                                        id="title"
                                        type="text"
                                        className="mt-1 block w-full"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="category" value="Kategori" />
                                    <select
                                        id="category"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.category}
                                        onChange={(e) => setData('category', e.target.value)}
                                        required
                                    >
                                        <option value="">Pilih Kategori</option>
                                        <option value="Self-Care">Self-Care</option>
                                        <option value="Gizi">Gizi</option>
                                        <option value="Relaksasi">Relaksasi</option>
                                        <option value="Kesehatan Mental">Kesehatan Mental</option>
                                    </select>
                                    <InputError message={errors.category} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="type" value="Tipe" />
                                    <select
                                        id="type"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.type}
                                        onChange={(e) => setData('type', e.target.value)}
                                        required
                                    >
                                        <option value="article">Artikel</option>
                                        <option value="video">Video</option>
                                    </select>
                                    <InputError message={errors.type} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="body" value="Isi Konten" />
                                    <textarea
                                        id="body"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-48"
                                        value={data.body}
                                        onChange={(e) => setData('body', e.target.value)}
                                        required
                                    ></textarea>
                                    <InputError message={errors.body} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="thumbnail_url" value="URL Thumbnail (Opsional)" />
                                    <TextInput
                                        id="thumbnail_url"
                                        type="url"
                                        className="mt-1 block w-full"
                                        value={data.thumbnail_url}
                                        onChange={(e) => setData('thumbnail_url', e.target.value)}
                                    />
                                    <InputError message={errors.thumbnail_url} className="mt-2" />
                                </div>

                                {data.type === 'video' && (
                                    <div className="mb-4">
                                        <InputLabel htmlFor="video_url" value="URL Video (YouTube)" />
                                        <TextInput
                                            id="video_url"
                                            type="url"
                                            className="mt-1 block w-full"
                                            value={data.video_url}
                                            onChange={(e) => setData('video_url', e.target.value)}
                                        />
                                        <InputError message={errors.video_url} className="mt-2" />
                                    </div>
                                )}

                                <div className="flex items-center justify-end mt-4">
                                    <Link href={route('admin.content.index')} className="text-gray-600 hover:text-gray-900 mr-4">
                                        Batal
                                    </Link>
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Simpan
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
