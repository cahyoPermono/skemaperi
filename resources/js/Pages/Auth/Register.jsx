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
        location: '',
        nomor_hp: '',
    });

    const [provinces, setProvinces] = useState([]);
    const [regencies, setRegencies] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);

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

    const nextStep = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <GuestLayout>
            <Head title="Daftar" />

            {/* Progress Steps */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                    {[1, 2, 3].map((step) => (
                        <div key={step} className="flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition duration-300 ${
                                    step <= currentStep
                                        ? 'bg-brand-600 text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-600'
                                }`}
                            >
                                {step}
                            </div>
                            {step < 3 && (
                                <div
                                    className={`h-1 w-6 mx-1 rounded-full transition duration-300 ${
                                        step < currentStep ? 'bg-brand-600' : 'bg-gray-200'
                                    }`}
                                ></div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-900">
                        {currentStep === 1 && 'Data Pribadi Bunda'}
                        {currentStep === 2 && 'Lokasi & Nomor WhatsApp'}
                        {currentStep === 3 && 'Keamanan Akun'}
                    </h2>
                    <p className="text-xs text-gray-600 mt-1">
                        {currentStep === 1 && 'Mulai dengan memberitahu kami tentang diri Bunda'}
                        {currentStep === 2 && 'Kami butuh informasi lokasi dan nomor WhatsApp Bunda'}
                        {currentStep === 3 && 'Atur kata sandi dan selesaikan pendaftaran'}
                    </p>
                </div>
            </div>

            <form onSubmit={submit} className="space-y-4">
                {/* Error Alert */}
                {Object.keys(errors).length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <div className="flex gap-3">
                            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            <div>
                                <h3 className="font-semibold text-red-900 text-sm">Ada kesalahan:</h3>
                                <ul className="text-red-700 text-xs mt-2 list-disc list-inside">
                                    {Object.entries(errors).map(([key, message]) => (
                                        <li key={key}>{message}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                    <>
                        <div>
                            <InputLabel htmlFor="name" value="Nama Lengkap" />
                            <div className="mt-1 relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="pl-10 block w-full border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500"
                                    placeholder="Nama Lengkap Bunda"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />
                            </div>
                            <InputError message={errors.name} className="mt-1 text-red-600 text-sm" />
                        </div>

                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="mt-1 relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="pl-10 block w-full border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500"
                                    placeholder="nama@email.com"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />
                            </div>
                            <InputError message={errors.email} className="mt-1 text-red-600 text-sm" />
                        </div>
                    </>
                )}

                {currentStep === 2 && (
                    <>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                            <div className="flex items-start gap-2">
                                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M10 1v4.5h4" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-green-900 text-xs">Data Lengkap</h3>
                                    <p className="text-green-700 text-xs">Data lengkap ini akan membantu kami memberikan informasi kehamilan yang lebih akurat untuk Bunda.</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <InputLabel value="Lokasi Tinggal" />

                            {/* Province Select */}
                            <div className="mt-1">
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500 transition text-sm"
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
                                <div className="mt-1">
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500 transition text-sm"
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
                                <div className="mt-1">
                                    <select
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500 transition text-sm"
                                        onChange={(e) => {
                                            const selectedDist = districts.find(d => d.id === e.target.value);
                                            setSelectedDistrict(selectedDist);
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

                            <InputError message={errors.location} className="mt-1 text-red-600 text-sm" />
                        </div>

                        <div>
                            <InputLabel htmlFor="nomor_hp" value="Nomor WhatsApp" />
                            <div className="mt-1 relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.23.381-.846.954-1.035 1.154-.193.199-.377.247-.645.052-.268-.195-1.131-.417-2.154-1.327-.797-.710-1.333-1.588-1.49-1.858-.149-.259-.050-.4.112-.531.113-.11.249-.287.374-.43.111-.143.148-.243.222-.408.074-.165.037-.314-.037-.435-.074-.121-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.052 0-2.082.394-2.847 1.104-.735.682-1.16 1.599-1.16 2.723 0 2.247 1.909 4.176 4.154 4.176 1.124 0 2.04-.425 2.722-1.16.71-.765 1.104-1.795 1.104-2.847 0-2.245-1.93-4.196-4.174-4.196zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z" />
                                    </svg>
                                </div>
                                <TextInput
                                    id="nomor_hp"
                                    type="text"
                                    name="nomor_hp"
                                    value={data.nomor_hp || ''}
                                    className="pl-10 block w-full border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500"
                                    placeholder="Contoh: 08123456789"
                                    onChange={(e) => setData('nomor_hp', e.target.value)}
                                    required
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Untuk komunikasi khusus tentang kehamilan Bunda</p>
                            <InputError message={errors.nomor_hp} className="mt-1 text-red-600 text-sm" />
                        </div>
                    </>
                )}

                {/* Step 3: Security */}
                {currentStep === 3 && (
                    <>
                        <div>
                            <InputLabel htmlFor="password" value="Password" />
                            <div className="mt-1 relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="pl-10 block w-full border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500"
                                    placeholder="Minimal 8 karakter"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Gunakan kombinasi huruf besar, kecil, angka, dan simbol</p>
                            <InputError message={errors.password} className="mt-1 text-red-600 text-sm" />
                        </div>

                        <div>
                            <InputLabel htmlFor="password_confirmation" value="Konfirmasi Password" />
                            <div className="mt-1 relative">
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="pl-10 block w-full border-gray-300 rounded-lg focus:border-brand-500 focus:ring-brand-500"
                                    placeholder="Ulangi password"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />
                            </div>
                            <InputError message={errors.password_confirmation} className="mt-1 text-red-600 text-sm" />
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                                <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2z" clipRule="evenodd" />
                                </svg>
                                <div>
                                    <h3 className="font-semibold text-blue-900 text-xs">Privasi Terjamin</h3>
                                    <p className="text-blue-700 text-xs">Data kesehatan Bunda dilindungi dengan enkripsi tingkat tinggi.</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-2 mt-6">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={processing}
                            className="flex-1 px-3 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Kembali
                        </button>
                    )}

                    {currentStep < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            disabled={processing}
                            className="flex-1 px-3 py-2 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold rounded-lg hover:from-brand-600 hover:to-brand-700 transition duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Lanjut
                        </button>
                    ) : (
                        <PrimaryButton
                            className="flex-1 py-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-lg transition duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={processing}
                        >
                            {processing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Mendaftar...
                                </span>
                            ) : (
                                'Selesaikan Pendaftaran'
                            )}
                        </PrimaryButton>
                    )}
                </div>
            </form>

            {/* Login Link */}
            <div className="mt-3 text-center flex-shrink-0">
                <p className="text-gray-600 text-xs">
                    Sudah punya akun?{' '}
                    <Link
                        href={route('login')}
                        className="font-semibold text-brand-600 hover:text-brand-700 transition duration-200"
                    >
                        Masuk di sini
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
