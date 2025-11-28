import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Masuk" />

            {status && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm font-medium">
                    {status}
                </div>
            )}

            {/* Header */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Selamat Datang Kembali</h2>
                <p className="text-gray-600 text-sm mt-1">Masuk ke akun Bunda untuk melanjutkan</p>
            </div>

            <form onSubmit={submit} className="space-y-5">
                {/* Email Field */}
                <div>
                    <InputLabel htmlFor="email" value="Email Bunda" />
                    <div className="mt-2 relative">
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
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.email} className="mt-2 text-red-600" />
                </div>

                {/* Password Field */}
                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <div className="mt-2 relative">
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
                            placeholder="••••••••"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                    </div>
                    <InputError message={errors.password} className="mt-2 text-red-600" />
                </div>

                {/* Remember & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center group cursor-pointer">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="rounded"
                        />
                        <span className="ms-2 text-sm text-gray-700 group-hover:text-gray-900">Ingat saya</span>
                    </label>
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="text-sm font-medium text-brand-600 hover:text-brand-700 transition duration-200"
                        >
                            Lupa password?
                        </Link>
                    )}
                </div>

                {/* Submit Button */}
                <PrimaryButton
                    className="w-full mt-6 py-3 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={processing}
                >
                    {processing ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sedang masuk...
                        </span>
                    ) : (
                        'Masuk ke Akun'
                    )}
                </PrimaryButton>
            </form>

            {/* Register Link */}
            <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                    Belum punya akun?{' '}
                    <Link
                        href={route('register')}
                        className="font-semibold text-brand-600 hover:text-brand-700 transition duration-200"
                    >
                        Daftar sekarang
                    </Link>
                </p>
            </div>
        </GuestLayout>
    );
}
