<?php

namespace App\Http\Controllers;

use App\Models\Screening;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        $totalUsers = User::where('role', 'user')->count();
        $totalScreenings = Screening::count();

        $riskDistribution = Screening::selectRaw('risk_level, count(*) as count')
            ->groupBy('risk_level')
            ->pluck('count', 'risk_level')
            ->toArray();

        // Ensure all keys exist
        $riskDistribution = array_merge([
            'low' => 0,
            'medium' => 0,
            'high' => 0,
        ], $riskDistribution);

        $recentScreenings = Screening::with('user')
            ->latest()
            ->take(10)
            ->get();

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalUsers' => $totalUsers,
                'totalScreenings' => $totalScreenings,
                'riskDistribution' => $riskDistribution,
            ],
            'recentScreenings' => $recentScreenings,
        ]);
    }
}
