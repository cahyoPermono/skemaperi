<?php

namespace App\Http\Controllers;

use App\Models\Content;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class SitemapController extends Controller
{
    public function index()
    {
        // 1. Static Pages
        $urls = [
            [
                'loc' => route('welcome'), // Need to sure 'welcome' route name exists or use url('/')
                'lastmod' => date('Y-m-d'),
                'priority' => '1.0',
                'changefreq' => 'daily',
            ],
            [
                'loc' => route('screening.index'),
                'lastmod' => date('Y-m-d'),
                'priority' => '0.9',
                'changefreq' => 'weekly',
            ],
            [
                'loc' => route('literacy.index'),
                'lastmod' => date('Y-m-d'),
                'priority' => '0.8',
                'changefreq' => 'daily',
            ],
            [
                'loc' => route('contacts.index'),
                'lastmod' => date('Y-m-d'),
                'priority' => '0.7',
                'changefreq' => 'monthly',
            ],
        ];

        // 2. Dynamic Content (Literacy Articles)
        $contents = Content::latest()->get();

        foreach ($contents as $content) {
            $urls[] = [
                'loc' => route('literacy.show', $content->slug),
                'lastmod' => $content->updated_at->format('Y-m-d'),
                'priority' => '0.8',
                'changefreq' => 'weekly',
            ];
        }

        // 3. Generate XML
        $xml = '<?xml version="1.0" encoding="UTF-8"?>';
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

        foreach ($urls as $url) {
            $xml .= '<url>';
            $xml .= '<loc>' . $url['loc'] . '</loc>';
            $xml .= '<lastmod>' . $url['lastmod'] . '</lastmod>';
            $xml .= '<changefreq>' . $url['changefreq'] . '</changefreq>';
            $xml .= '<priority>' . $url['priority'] . '</priority>';
            $xml .= '</url>';
        }

        $xml .= '</urlset>';

        return Response::make($xml, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}
