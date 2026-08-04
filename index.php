Created At: 2026-08-04T13:27:52Z
Completed At: 2026-08-04T13:27:52Z
File Path: `file:///c:/Users/lewis/Desktop/richkem/index.php`
Total Lines: 1696
Total Bytes: 66542
Showing lines 1 to 80
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Richkem Services — Universal Marketplace & Elite Directory</title>
    
    <!-- Google Font: Onest -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=swap" rel="stylesheet">
    
    <script type="importmap">
    { "imports": { "lenis": "https://cdn.jsdelivr.net/npm/lenis@1.1.18/+esm" } }
    </script>

    <style>
        :root {
            --background: #ffffff;
            --foreground: #0a0a0a;
            --brand: #2563c9;       /* primary royal blue */
            --brand-deep: #0f2f63;  /* deep navy — hero/stats/footer base */
            --brand-light: #5790e6; /* light blue accent / focus ring */
            --accent-teal: #0b6e97; /* blue court caption tint */
            --surface: #f4f4f4;     /* off-white section bg */
            --surface-card: #ffffff;
            --ink: #0a0a0a;         /* near-black headings */
            --ink-soft: #717784;    /* muted body */
            --ghost: #d7dae1;       /* oversized ghost text */
            --hairline: #e6e8ec;    /* subtle borders */
            --on-brand: #ffffff;    /* text on navy */
            
            --radius-card: 1.5rem;
            --radius-card-lg: 2rem;
            --radius-pill: 62.5rem;
        }

        /* Adaptive rem grid */
        html { font-size: 16px; scroll-behavior: auto; }
        @media (max-width: 1920px) { html { font-size: 0.833333vw; } }
        @media (max-width: 1440px) { html { font-size: 1.111111vw; } }
        @media (max-width: 1024px) { html { font-size: 1.5625vw; } }
        @media (max-width: 640px)  { html { font-size: 4.444444vw; } }

        /* Reset & Base */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: "Onest", system-ui, sans-serif;
            background: var(--background);
            color: var(--foreground);
            min-height: 100vh;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
        }
        
        main {
            width: 100%;
            overflow-x: clip;
            padding: 0.5rem;
        }
        @media (min-width: 640px) {
            main { padding: 0.75rem; }
        }

        img { display: block; max-width: 100%; height: auto; }
        button, a { cursor: pointer; text-decoration: none; color: inherit; background: none; border: none; }
        :focus-visible { outline: 2px solid var(--brand-light); outline-offset: 2px; }

        /* Loader */
        #loader {
            position: fixed;
            inset: 0;
            z-index: 200;
            background: var(--brand-deep);
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.

