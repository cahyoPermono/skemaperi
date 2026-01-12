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
        $currentUser = auth()->user();
        $isDistrictAdmin = $currentUser->role === 'district_admin';

        // Base Queries
        $usersQuery = User::where('role', 'user');
        $screeningsQuery = Screening::query();

        // Apply Scope if District Admin
        if ($isDistrictAdmin) {
            $location = $currentUser->location;

            $usersQuery->where('location', $location);

            $screeningsQuery->whereHas('user', function ($q) use ($location) {
                $q->where('location', $location);
            });
        }

        $totalUsers = $usersQuery->count();
        $totalScreenings = $screeningsQuery->count();

        // Risk Distribution (Scoped)
        // Note: We need to clone the query or re-apply scope because selectRaw modifies it
        $riskQuery = Screening::selectRaw('risk_level, count(*) as count')->groupBy('risk_level');
        if ($isDistrictAdmin) {
            $location = $currentUser->location;
            $riskQuery->whereHas('user', function ($q) use ($location) {
                $q->where('location', $location);
            });
        }

        $riskDistribution = $riskQuery->pluck('count', 'risk_level')->toArray();

        // Ensure all keys exist
        $riskDistribution = array_merge([
            'low' => 0,
            'medium' => 0,
            'high' => 0,
        ], $riskDistribution);

        // Recent Screenings (Scoped)
        $recentScreenings = $screeningsQuery->with('user')
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
            'isDistrictAdmin' => $isDistrictAdmin,
            'location' => $currentUser->location,
        ]);
    }
}
