<?php

namespace App\Controllers;

/**
 * Serves the built React SPA for all non-API routes.
 * Run `npm run build` in frontend/ to generate public/dist/index.html.
 */
class ReactApp extends BaseController
{
    public function index(): string
    {
        $distIndex = FCPATH . 'dist/index.html';

        if (! file_exists($distIndex)) {
            return '<p style="font-family:sans-serif;padding:2rem">
                React app not built yet.<br>
                Run <code>npm run build</code> inside the <code>frontend/</code> directory.
            </p>';
        }

        return file_get_contents($distIndex);
    }
}
