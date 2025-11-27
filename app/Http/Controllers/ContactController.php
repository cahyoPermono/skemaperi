<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
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

        $contacts = $query->latest()->get();
        $types = Contact::select('type')->distinct()->pluck('type');

        return Inertia::render('Contacts/Index', [
            'contacts' => $contacts,
            'types' => $types,
            'filters' => $request->only(['search', 'type']),
        ]);
    }
}
