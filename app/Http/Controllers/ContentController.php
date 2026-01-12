<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContentController extends Controller
{
    public function index(Request $request)
    {
        $query = Content::query();

        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                ->orWhere('body', 'like', '%' . $request->search . '%');
        }

        if ($request->has('category') && $request->category !== 'All') {
            $query->where('category', $request->category);
        }

        $allContents = $query->latest()->get();

        $featuredContents = $allContents->where('is_pinned', true)->values();
        $regularContents = $allContents->where('is_pinned', false)->values();

        $categories = Content::select('category')->distinct()->pluck('category');

        return Inertia::render('Literacy/Index', [
            'featuredContents' => $featuredContents,
            'regularContents' => $regularContents,
            'categories' => $categories,
            'filters' => $request->only(['search', 'category']),
        ]);
    }

    public function show(Content $content)
    {
        return Inertia::render('Literacy/Show', [
            'content' => $content
        ]);
    }
}
