<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */

// -----------------------------------------------------------------
// API routes — all under /api, namespaced to App\Controllers\Api
// -----------------------------------------------------------------
$routes->group('api', ['namespace' => 'App\Controllers\Api'], static function (RouteCollection $routes): void {
    // Example: $routes->get('users', 'UserController::index');
});

// -----------------------------------------------------------------
// React SPA catch-all — must come last
// Serves public/dist/index.html for every non-API browser request.
// -----------------------------------------------------------------
$routes->get('/', 'ReactApp::index');
$routes->get('(:any)', 'ReactApp::index');
