<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Screening;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ScreeningFlowTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_access_screening_selection_page()
    {
        $user = User::factory()->create([
            'profile_completed' => true
        ]);

        $response = $this->actingAs($user)->get('/screening');

        $response->assertStatus(200);
    }

    public function test_user_can_submit_epds_screening_high_risk()
    {
        $user = User::factory()->create(['profile_completed' => true]);

        // Max score (30) -> High Risk (>13)
        $answers = [
            1 => 3,
            2 => 3,
            3 => 3,
            4 => 3,
            5 => 3,
            6 => 3,
            7 => 3,
            8 => 3,
            9 => 3,
            10 => 3
        ];

        $response = $this->actingAs($user)->post('/screening', [
            'type' => 'epds',
            'answers' => $answers
        ]);

        $screening = Screening::where('user_id', $user->id)->first();

        $this->assertEquals('epds', $screening->type);
        $this->assertEquals(30, $screening->total_score);
        $this->assertEquals('high', $screening->risk_level);

        $response->assertRedirect(route('screening.show', $screening->id));
    }

    public function test_user_can_submit_pass_screening_high_risk()
    {
        $user = User::factory()->create(['profile_completed' => true]);

        // Max score (31 * 3 = 93) -> High Risk (>= 42)
        $answers = [];
        for ($i = 1; $i <= 31; $i++) {
            $answers[$i] = 3;
        }

        $response = $this->actingAs($user)->post('/screening', [
            'type' => 'pass',
            'answers' => $answers
        ]);

        $screening = Screening::where('user_id', $user->id)->first();

        $this->assertEquals('pass', $screening->type);
        $this->assertEquals(93, $screening->total_score);
        $this->assertEquals('high', $screening->risk_level);
    }

    public function test_user_can_submit_pass_screening_low_risk()
    {
        $user = User::factory()->create(['profile_completed' => true]);

        // Min score (0) -> Low Risk (< 21)
        $answers = [];
        for ($i = 1; $i <= 31; $i++) {
            $answers[$i] = 0;
        }

        $response = $this->actingAs($user)->post('/screening', [
            'type' => 'pass',
            'answers' => $answers
        ]);

        $screening = Screening::where('user_id', $user->id)->first();

        $this->assertEquals('pass', $screening->type);
        $this->assertEquals(0, $screening->total_score);
        $this->assertEquals('low', $screening->risk_level);
    }
}
