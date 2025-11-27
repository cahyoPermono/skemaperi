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

        $contents = $query->latest()->get();
        $categories = Content::select('category')->distinct()->pluck('category');

        return Inertia::render('Literacy/Index', [
            'contents' => $contents,
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
