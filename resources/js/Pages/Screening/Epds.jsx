import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function ScreeningEpds({ auth, questions }) {
    const { data, setData, post, processing, errors } = useForm({
        type: 'epds',
        answers: {},
    });

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = questions.length;

    const handleOptionChange = (questionId, value) => {
        setData('answers', {
            ...data.answers,
            [questionId]: value,
        });
    };

    const nextStep = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('screening.store'));
    };

    const progress = ((currentStep + 1) / totalSteps) * 100;
    const allAnswered = Object.keys(data.answers).length === totalSteps;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Skrining EPDS (Postnatal)</h2>}
        >
            <Head title="Skrining EPDS" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                             <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            Mohon jawab pertanyaan di bawah ini sesuai dengan <strong>perasaan Anda dalam 7 hari terakhir</strong>, bukan hanya perasaan Anda hari ini.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                                </div>
                                <p className="text-right text-sm text-gray-500 mt-1">Pertanyaan {currentStep + 1} dari {totalSteps}</p>
                            </div>

                            <form onSubmit={submit}>
                                <div className="mb-8">
                                    <h3 className="text-lg font-medium mb-4">{questions[currentStep].question}</h3>
                                    <div className="space-y-3">
                                        {questions[currentStep].options.map((option) => (
                                            <label key={option.value} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition">
                                                <input
                                                    type="radio"
                                                    name={`question_${questions[currentStep].id}`}
                                                    value={option.value}
                                                    checked={data.answers[questions[currentStep].id] === option.value}
                                                    onChange={() => handleOptionChange(questions[currentStep].id, option.value)}
                                                    className="form-radio h-5 w-5 text-blue-600"
                                                />
                                                <span className="text-gray-700">{option.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.answers && <div className="text-red-500 mt-2">{errors.answers}</div>}
                                </div>

                                <div className="flex justify-between">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        disabled={currentStep === 0}
                                        className={`px-4 py-2 rounded-md ${currentStep === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                                    >
                                        Sebelumnya
                                    </button>

                                    {currentStep < totalSteps - 1 ? (
                                        <PrimaryButton type="button" onClick={nextStep} disabled={data.answers[questions[currentStep].id] === undefined}>
                                            Selanjutnya
                                        </PrimaryButton>
                                    ) : (
                                        <PrimaryButton disabled={!allAnswered || processing}>
                                            Lihat Hasil
                                        </PrimaryButton>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
