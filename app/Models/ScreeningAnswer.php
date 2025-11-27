<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ScreeningAnswer extends Model
{
    protected $fillable = ['screening_id', 'question_id', 'answer_value'];

    public function screening()
    {
        return $this->belongsTo(Screening::class);
    }
}
