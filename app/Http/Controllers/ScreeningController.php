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
        'Saya merasa sangat cemas mengenai kesehatan bayi atau masalah dalam kehamilan saya.',
        'Saya memiliki ketakutan yang mendalam bahwa ada bahaya yang akan menimpa bayi saya.',
        'Saya memiliki perasaan takut yang kuat bahwa sesuatu yang buruk akan terjadi.',
        'Saya merasa khawatir tentang banyak hal, bahkan hal-hal kecil.',
        'Saya merasa sangat cemas memikirkan masa depan saya dan keluarga.',
        'Saya merasa segala sesuatunya terlalu berat dan saya merasa kewalahan.',
        'Saya merasakan ketakutan yang sangat kuat terhadap hal tertentu (misalnya, darah, jarum, atau rumah sakit).',
        'Saya mengalami serangan panik atau rasa takut yang tiba-tiba muncul.',
        'Saya memiliki pikiran yang berulang-ulang dan mengganggu yang sulit saya hentikan.',
        'Saya sulit tidur di malam hari atau sulit tidur kembali setelah terbangun.',
        'Saya merasa harus melakukan sesuatu dengan urutan atau cara tertentu agar merasa tenang.',
        'Saya memiliki keinginan kuat agar segala sesuatunya berjalan sempurna (perfeksionis).',
        'Saya merasa perlu untuk mengontrol segala hal di sekitar saya agar merasa aman.',
        'Saya sulit berhenti memeriksa ulang sesuatu (seperti kunci pintu, kompor) berulang kali.',
        'Saya merasa mudah kaget, gugup, atau terkejut oleh hal-hal kecil.',
        'Saya merasa cemas karena pikiran-pikiran mengganggu yang terus muncul kembali di benak saya.',
        'Saya merasa selalu waspada dan "berjaga-jaga", sulit untuk rileks.',
        'Saya terganggu oleh mimpi buruk atau ingatan masa lalu yang tidak menyenangkan.',
        'Saya merasa seperti terpisah dari kenyataan, seolah-olah saya sedang bermimpi atau tidak nyata.',
        'Saya menghindari tempat, orang, atau aktivitas tertentu yang membuat saya merasa cemas.',
        'Saya merasa sangat gelisah, tidak bisa duduk diam, atau terus bergerak.',
        'Saya sulit berkonsentrasi pada aktivitas sehari-hari karena pikiran saya penuh kekhawatiran.',
        'Saya merasa mudah tersinggung, marah, atau kehilangan kesabaran.',
        'Saya merasakan ketegangan otot, sakit punggung, leher kaku, atau sakit kepala.',
        'Jantung saya sering berdebar-debar kencang meskipun tidak sedang berolahraga.',
        'Saya sering merasa sesak napas atau seperti tercekik ketika merasa cemas.',
        'Saya mengalami masalah pencernaan (sakit perut, mual) ketika merasa khawatir.',
        'Saya menghindari pembicaraan, bacaan, atau informasi tentang kelahiran dan bayi.',
        'Saya merasa perlu terus-menerus meminta kepastian atau dukungan dari orang lain.',
        'Saya sangat takut jika harus ditinggalkan sendirian.',
        'Saya merasa ragu dan takut tidak mampu mengatasi tantangan sebagai seorang ibu.'
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
