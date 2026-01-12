import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        location: '',
        role_type: 'district_admin',
    });

    const [provinces, setProvinces] = useState([]);
    const [regencies, setRegencies] = useState([]);
    const [districts, setDistricts] = useState([]);
    
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedRegency, setSelectedRegency] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    useEffect(() => {
        fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
            .then(response => response.json())
            .then(data => setProvinces(data));
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvince.id}.json`)
                .then(response => response.json())
                .then(data => setRegencies(data));
        } else {
            setRegencies([]);
        }
    }, [selectedProvince]);

    useEffect(() => {
        if (selectedRegency) {
            fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedRegency.id}.json`)
                .then(response => response.json())
                .then(data => setDistricts(data));
        } else {
            setDistricts([]);
        }
    }, [selectedRegency]);

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.users.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tambah Admin Baru</h2>}
        >
            <Head title="Tambah Admin" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <form onSubmit={submit} className="max-w-md mx-auto space-y-4">
                                <div>
                                    <InputLabel htmlFor="name" value="Nama Lengkap" />
                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        isFocused
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        className="mt-1 block w-full"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="role_type" value="Tipe Admin" />
                                    <select
                                        id="role_type"
                                        className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                        value={data.role_type}
                                        onChange={(e) => setData('role_type', e.target.value)}
                                    >
                                        <option value="district_admin">Admin Puskesmas/Kecamatan</option>
                                        <option value="admin">Super Admin</option>
                                    </select>
                                    <InputError message={errors.role_type} className="mt-2" />
                                </div>

                                {/* Location Picker (Only for District Admin usually, but let's keep it visible for now) */}
                                {data.role_type === 'district_admin' && (
                                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 space-y-4">
                                        <h3 className="font-medium text-gray-900">Lokasi Penugasan</h3>
                                        <div>
                                            <InputLabel value="Provinsi" />
                                            <select
                                                className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                onChange={(e) => {
                                                    const selected = provinces.find(p => p.id === e.target.value);
                                                    setSelectedProvince(selected);
                                                    setSelectedRegency(null);
                                                    setSelectedDistrict(null);
                                                    setData('location', '');
                                                }}
                                                value={selectedProvince?.id || ''}
                                            >
                                                <option value="">Pilih Provinsi</option>
                                                {provinces.map(p => (
                                                    <option key={p.id} value={p.id}>{p.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        {selectedProvince && (
                                            <div>
                                                <InputLabel value="Kota/Kabupaten" />
                                                <select
                                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                    onChange={(e) => {
                                                        const selected = regencies.find(r => r.id === e.target.value);
                                                        setSelectedRegency(selected);
                                                        setSelectedDistrict(null);
                                                        setData('location', '');
                                                    }}
                                                    value={selectedRegency?.id || ''}
                                                >
                                                    <option value="">Pilih Kota/Kabupaten</option>
                                                    {regencies.map(r => (
                                                        <option key={r.id} value={r.id}>{r.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}

                                        {selectedRegency && (
                                            <div>
                                                <InputLabel value="Kecamatan" />
                                                <select
                                                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                                    onChange={(e) => {
                                                        const selected = districts.find(d => d.id === e.target.value);
                                                        setSelectedDistrict(selected);
                                                        setData('location', `${selected.name}, ${selectedRegency.name}, ${selectedProvince.name}`);
                                                    }}
                                                    value={selectedDistrict?.id || ''}
                                                >
                                                    <option value="">Pilih Kecamatan</option>
                                                    {districts.map(d => (
                                                        <option key={d.id} value={d.id}>{d.name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        )}
                                        <InputError message={errors.location} className="mt-2" />
                                    </div>
                                )}

                                <div>
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        className="mt-1 block w-full"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>

                                <div>
                                    <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
                                    <TextInput
                                        id="password_confirmation"
                                        className="mt-1 block w-full"
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton className="ml-4" disabled={processing}>
                                        Simpan Admin
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
