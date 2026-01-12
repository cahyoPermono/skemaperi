<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AdminContentController extends Controller
{
    public function index()
    {
        $contents = Content::latest()->get();
        return Inertia::render('Admin/Content/Index', ['contents' => $contents]);
    }

    public function create()
    {
        return Inertia::render('Admin/Content/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'category' => 'required|string',
            'type' => 'required|string|in:article,video',
            'thumbnail_url' => 'nullable|url',
            'video_url' => 'nullable|url',
            'source' => 'nullable|string',
        ]);

        Content::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'body' => $request->body,
            'category' => $request->category,
            'type' => $request->type,
            'thumbnail_url' => $request->thumbnail_url,
            'video_url' => $request->video_url,
            'source' => $request->source,
        ]);

        return redirect()->route('admin.content.index')->with('success', 'Konten berhasil ditambahkan.');
    }

    public function edit(Content $content)
    {
        return Inertia::render('Admin/Content/Edit', ['content' => $content]);
    }

    public function update(Request $request, Content $content)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'category' => 'required|string',
            'type' => 'required|string|in:article,video',
            'thumbnail_url' => 'nullable|url',
            'video_url' => 'nullable|url',
            'source' => 'nullable|string',
        ]);

        $content->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title),
            'body' => $request->body,
            'category' => $request->category,
            'type' => $request->type,
            'thumbnail_url' => $request->thumbnail_url,
            'video_url' => $request->video_url,
            'source' => $request->source,
        ]);

        return redirect()->route('admin.content.index')->with('success', 'Konten berhasil diperbarui.');
    }

    public function destroy(Content $content)
    {
        $content->delete();
        return redirect()->route('admin.content.index')->with('success', 'Konten berhasil dihapus.');
    }
}
