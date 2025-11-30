<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->get();
        return Inertia::render('Admin/Contact/Index', ['contacts' => $contacts]);
    }

    public function create()
    {
        return Inertia::render('Admin/Contact/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
            'location' => 'nullable|string',
            'kecamatan' => 'nullable|string|max:255',
        ]);

        $kecamatan = $request->kecamatan ? Str::title(Str::lower(trim($request->kecamatan))) : null;

        Contact::create(array_merge($request->only(['name', 'type', 'phone', 'address', 'location']), ['kecamatan' => $kecamatan]));

        return redirect()->route('admin.contacts.index')->with('success', 'Kontak berhasil ditambahkan.');
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Admin/Contact/Edit', ['contact' => $contact]);
    }

    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string',
            'phone' => 'nullable|string',
            'address' => 'nullable|string',
            'location' => 'nullable|string',
            'kecamatan' => 'nullable|string|max:255',
        ]);

        $kecamatan = $request->kecamatan ? Str::title(Str::lower(trim($request->kecamatan))) : null;

        $contact->update(array_merge($request->only(['name', 'type', 'phone', 'address', 'location']), ['kecamatan' => $kecamatan]));

        return redirect()->route('admin.contacts.index')->with('success', 'Kontak berhasil diperbarui.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return redirect()->route('admin.contacts.index')->with('success', 'Kontak berhasil dihapus.');
    }
}
