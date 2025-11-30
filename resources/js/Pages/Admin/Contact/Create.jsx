import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function AdminContactCreate({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        type: 'Puskesmas',
        phone: '',
        address: '',
        location: '',
        kecamatan: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.contacts.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Kontak</h2>}
        >
            <Head title="Tambah Kontak" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={submit}>
                                <div className="mb-4">
                                    <InputLabel htmlFor="name" value="Nama" />
                                    <TextInput id="name" className="mt-1 block w-full" value={data.name} onChange={(e) => setData('name', e.target.value)} required />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="type" value="Tipe" />
                                    <select id="type" className="mt-1 block w-full" value={data.type} onChange={(e) => setData('type', e.target.value)}>
                                        <option value="Puskesmas">Puskesmas</option>
                                        <option value="Bidan">Bidan</option>
                                        <option value="Psikolog">Psikolog</option>
                                        <option value="RS">RS</option>
                                    </select>
                                    <InputError message={errors.type} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="phone" value="Nomor Telepon" />
                                    <TextInput id="phone" className="mt-1 block w-full" value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                                    <InputError message={errors.phone} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="address" value="Alamat" />
                                    <textarea id="address" className="mt-1 block w-full" value={data.address} onChange={(e) => setData('address', e.target.value)} />
                                    <InputError message={errors.address} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="location" value="Kota/Kabupaten" />
                                    <TextInput id="location" className="mt-1 block w-full" value={data.location} onChange={(e) => setData('location', e.target.value)} />
                                    <InputError message={errors.location} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="kecamatan" value="Kecamatan" />
                                    <TextInput id="kecamatan" className="mt-1 block w-full" value={data.kecamatan} onChange={(e) => setData('kecamatan', e.target.value)} />
                                    <InputError message={errors.kecamatan} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Link href={route('admin.contacts.index')} className="text-gray-600 hover:text-gray-900 mr-4">Batal</Link>
                                    <PrimaryButton className="ml-4" disabled={processing}>Simpan</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
