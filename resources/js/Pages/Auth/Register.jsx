import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        pregnancy_age_weeks: '',
        location: '',
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

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="pregnancy_age_weeks" value="Usia Kehamilan (minggu)" />

                    <TextInput
                        id="pregnancy_age_weeks"
                        type="number"
                        name="pregnancy_age_weeks"
                        value={data.pregnancy_age_weeks}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('pregnancy_age_weeks', e.target.value)}
                        required
                        min="1"
                        max="42"
                    />

                    <InputError message={errors.pregnancy_age_weeks} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="location" value="Lokasi (Provinsi, Kota/Kab, Kecamatan)" />
                    
                    {/* Province Select */}
                    <div className="mt-2">
                        <select
                            className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            onChange={(e) => {
                                const selectedProv = provinces.find(p => p.id === e.target.value);
                                setSelectedProvince(selectedProv);
                                setSelectedRegency(null);
                                setSelectedDistrict(null);
                                setData('location', '');
                            }}
                            value={selectedProvince?.id || ''}
                        >
                            <option value="">Pilih Provinsi</option>
                            {provinces.map(prov => (
                                <option key={prov.id} value={prov.id}>{prov.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Regency Select */}
                    {selectedProvince && (
                        <div className="mt-2">
                            <select
                                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                onChange={(e) => {
                                    const selectedReg = regencies.find(r => r.id === e.target.value);
                                    setSelectedRegency(selectedReg);
                                    setSelectedDistrict(null);
                                    setData('location', '');
                                }}
                                value={selectedRegency?.id || ''}
                            >
                                <option value="">Pilih Kota/Kabupaten</option>
                                {regencies.map(reg => (
                                    <option key={reg.id} value={reg.id}>{reg.name}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* District Select */}
                    {selectedRegency && (
                        <div className="mt-2">
                            <select
                                className="w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                                onChange={(e) => {
                                    const selectedDist = districts.find(d => d.id === e.target.value);
                                    setSelectedDistrict(selectedDist);
                                    // Set the final location string
                                    setData('location', `${selectedDist.name}, ${selectedRegency.name}, ${selectedProvince.name}`);
                                }}
                                value={selectedDistrict?.id || ''}
                            >
                                <option value="">Pilih Kecamatan</option>
                                {districts.map(dist => (
                                    <option key={dist.id} value={dist.id}>{dist.name}</option>
                                ))}
                            </select>
                        </div>
                    )}

                    <InputError message={errors.location} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
