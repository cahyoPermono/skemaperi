<?php

namespace App\Http\Controllers;

use App\Models\Screening;
use App\Models\ScreeningAnswer;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ScreeningController extends Controller
{
    private $epdsQuestions = [
        [
            'id' => 1,
            'question' => 'Saya bisa tertawa dan melihat sisi lucu dari berbagai hal.',
            'options' => [
                ['value' => 0, 'label' => 'Sering sekali'],
                ['value' => 1, 'label' => 'Agak sering'],
                ['value' => 2, 'label' => 'Jarang'],
                ['value' => 3, 'label' => 'Tidak pernah sama sekali'],
            ]
        ],
        [
            'id' => 2,
            'question' => 'Saya menatap masa depan dengan senang.',
            'options' => [
                ['value' => 0, 'label' => 'Sering sekali'],
                ['value' => 1, 'label' => 'Agak sering'],
                ['value' => 2, 'label' => 'Jarang'],
                ['value' => 3, 'label' => 'Tidak pernah sama sekali'],
            ]
        ],
        [
            'id' => 3,
            'question' => 'Saya menyalahkan diri sendiri tanpa alasan ketika ada yang salah.',
            'options' => [
                ['value' => 3, 'label' => 'Ya, sering sekali'],
                ['value' => 2, 'label' => 'Ya, kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 4,
            'question' => 'Saya merasa cemas atau khawatir tanpa alasan yang jelas.',
            'options' => [
                ['value' => 3, 'label' => 'Sering sekali'],
                ['value' => 2, 'label' => 'Kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 5,
            'question' => 'Saya merasa takut atau panik tanpa alasan yang jelas.',
            'options' => [
                ['value' => 3, 'label' => 'Sering sekali'],
                ['value' => 2, 'label' => 'Kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 6,
            'question' => 'Berbagai hal terasa membebani saya.',
            'options' => [
                ['value' => 3, 'label' => 'Ya, sering sekali saya tidak bisa mengatasinya'],
                ['value' => 2, 'label' => 'Ya, kadang-kadang saya tidak bisa mengatasinya'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 7,
            'question' => 'Saya merasa sangat tidak bahagia sehingga sulit tidur.',
            'options' => [
                ['value' => 3, 'label' => 'Ya, sering sekali'],
                ['value' => 2, 'label' => 'Ya, kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 8,
            'question' => 'Saya merasa sedih atau menderita.',
            'options' => [
                ['value' => 3, 'label' => 'Ya, sering sekali'],
                ['value' => 2, 'label' => 'Ya, kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 9,
            'question' => 'Saya merasa sangat tidak bahagia sehingga saya menangis.',
            'options' => [
                ['value' => 3, 'label' => 'Ya, sering sekali'],
                ['value' => 2, 'label' => 'Ya, kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
        [
            'id' => 10,
            'question' => 'Pikiran untuk menyakiti diri sendiri muncul di benak saya.',
            'options' => [
                ['value' => 3, 'label' => 'Ya, sering sekali'],
                ['value' => 2, 'label' => 'Kadang-kadang'],
                ['value' => 1, 'label' => 'Jarang'],
                ['value' => 0, 'label' => 'Tidak pernah'],
            ]
        ],
    ];

    private $passQuestions = [
        'Khawatir tentang bayi/kehamilan',
        'Takut bahwa akan ada bahaya yang menimpa bayi',
        'Perasaan takut yang mendalam bahwa sesuatu yang buruk akan terjadi',
        'Khawatir tentang banyak hal',
        'Khawatir tentang masa depan',
        'Merasa kewalahan',
        'Ketakutan yang sangat kuat akan sesuatu',
        'Serangan rasa takut atau panik yang tiba-tiba',
        'Pikiran berulang yang sulit dihentikan',
        'Sulit tidur bahkan ketika ada kesempatan',
        'Harus melakukan sesuatu dengan cara atau urutan tertentu',
        'Ingin segala sesuatunya sempurna',
        'Perlu mengontrol segala sesuatu',
        'Sulit berhenti memeriksa atau melakukan sesuatu berulang-ulang',
        'Merasa kaget atau mudah terkejut',
        'Cemas tentang pikiran yang berulang',
        'Merasa "waspada" atau perlu berjaga-jaga',
        'Terganggu oleh ingatan, mimpi, atau mimpi buruk yang berulang',
        'Merasa terlepas seperti berada dalam mimpi',
        'Menghindari hal-hal atau tempat yang membuat cemas',
        'Merasa gelisah dan tidak bisa tenang',
        'Sulit berkonsentrasi karena khawatir',
        'Merasa mudah tersinggung atau marah',
        'Mengalami ketegangan otot atau sakit kepala',
        'Jantung berdebar-debar tanpa alasan fisik',
        'Merasa sesak napas atau tercekik',
        'Mengalami gangguan pencernaan karena cemas',
        'Menghindari pembicaraan tentang kehamilan/bayi',
        'Merasa perlu kepastian terus-menerus orang lain',
        'Takut ditinggalkan sendiri',
        'Merasa tidak mampu mengatasi tantangan sebagai ibu'
    ];

    public function index()
    {
        return Inertia::render('Screening/Index');
    }

    public function epds()
    {
        return Inertia::render('Screening/Epds', [
            'questions' => $this->epdsQuestions
        ]);
    }

    public function pass()
    {
        $formattedPassQuestions = collect($this->passQuestions)->map(function ($q, $index) {
            return [
                'id' => $index + 1,
                'question' => $q,
                'options' => [
                    ['value' => 0, 'label' => 'Tidak pernah'],
                    ['value' => 1, 'label' => 'Kadang-kadang'],
                    ['value' => 2, 'label' => 'Sering'],
                    ['value' => 3, 'label' => 'Hampir selalu'],
                ]
            ];
        })->toArray();

        return Inertia::render('Screening/Pass', [
            'questions' => $formattedPassQuestions
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'type' => 'required|in:epds,pass',
            'answers' => 'required|array',
            'answers.*' => 'required|integer|min:0|max:3',
        ]);

        $totalScore = array_sum($request->answers);
        $riskLevel = 'low';
        $type = $request->type;

        if ($type === 'epds') {
            if ($totalScore >= 13) {
                $riskLevel = 'high';
            } elseif ($totalScore >= 10) {
                $riskLevel = 'medium';
            }
        } elseif ($type === 'pass') {
            if ($totalScore >= 42) {
                $riskLevel = 'high';
            } elseif ($totalScore >= 21) {
                $riskLevel = 'medium';
            }
        }

        $screening = Screening::create([
            'user_id' => Auth::id(),
            'total_score' => $totalScore,
            'risk_level' => $riskLevel,
            'type' => $type,
        ]);

        foreach ($request->answers as $questionId => $answerValue) {
            ScreeningAnswer::create([
                'screening_id' => $screening->id,
                'question_id' => $questionId,
                'answer_value' => $answerValue,
            ]);
        }

        return redirect()->route('screening.show', $screening->id);
    }

    public function show(Screening $screening)
    {
        Log::info('screening.access-check', [
            'screening_id' => $screening->id,
            'screening_user_id' => $screening->user_id,
            'auth_id' => Auth::id(),
            'auth_user_role' => optional(Auth::user())->role,
        ]);

        $currentUser = Auth::user();
        $isOwner = ((int) $screening->user_id === (int) $currentUser->id);
        $isAdmin = $currentUser && $currentUser->role === 'admin';

        if (!$isOwner && !$isAdmin) {
            abort(403);
        }

        return Inertia::render('Screening/Result', [
            'screening' => $screening
        ]);
    }

    public function history()
    {
        $screenings = Auth::user()->screenings()->latest()->get();

        return Inertia::render('Screening/History', [
            'screenings' => $screenings
        ]);
    }
}
