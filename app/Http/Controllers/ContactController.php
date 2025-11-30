<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index(Request $request)
    {
        $query = Contact::query();

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%')
                ->orWhere('location', 'like', '%' . $request->search . '%');
        }

        if ($request->has('type') && $request->type !== 'All') {
            $query->where('type', $request->type);
        }

        // If the authenticated user is not admin, limit contacts to the kecamatan
        $user = Auth::user();
        if ($user && $user->role !== 'admin') {
            // user->location is stored as "Kecamatan, Regency, Province" during registration
            $kecamatanRaw = trim(explode(',', $user->location)[0] ?? '');
            $kecamatan = Str::lower(trim($kecamatanRaw));
            if ($kecamatan) {
                // Use case-insensitive comparison and trim stored values in SQL
                $query->whereRaw('LOWER(TRIM(kecamatan)) = ?', [$kecamatan]);
            }
        }

        $contacts = $query->latest()->get();
        $types = Contact::select('type')->distinct()->pluck('type');

        return Inertia::render('Contacts/Index', [
            'contacts' => $contacts,
            'types' => $types,
            'filters' => $request->only(['search', 'type']),
        ]);
    }
}
