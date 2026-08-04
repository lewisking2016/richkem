Created At: 2026-08-04T14:07:08Z
Completed At: 2026-08-04T14:07:09Z
File Path: `file:///c:/Users/lewis/Desktop/richkem/router.php`
Total Lines: 34
Total Bytes: 946
Showing lines 1 to 34
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
<?php
// router.php
// PHP Dev Server Router — maps all requests to frontend/ pages or root index.php
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Root landing page
if ($uri === '/' || $uri === '/index.php') {
    require __DIR__ . '/index.php';
    return;
}

// Direct file requests (CSS, JS, images, etc.)
if (file_exists(__DIR__ . $uri) && !is_dir(__DIR__ . $uri)) {
    return false; // Serve static files directly
}

// frontend/ pages — if request matches a frontend page, serve it
$frontend_file = __DIR__ . '/frontend' . $uri;
if (file_exists($frontend_file) && !is_dir($frontend_file)) {
    require $frontend_file;
    return;
}

// Check root-level PHP files (backward compat)
$root_file = __DIR__ . $uri;
if (file_exists($root_file . '.php')) {
    require $root_file . '.php';
    return;
}

// 404 fallback
http_response_code(404);
echo "<h1>404 — Page not found</h1><p><a href='/'>← Back to home</a></p>";

The above content shows the entire, complete file contents of the requested file.

