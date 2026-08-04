Created At: 2026-08-04T13:38:02Z
Completed At: 2026-08-04T13:38:02Z
File Path: `file:///c:/Users/lewis/Desktop/richkem/includes/header.php`
Total Lines: 376
Total Bytes: 20438
Showing lines 1 to 376
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
<?php
// includes/header.php
// Usage: include at top of every page. Set $page_title before including.
$page_title = $page_title ?? 'Richkem Services';
$current_page = basename($_SERVER['PHP_SELF'], '.php');
// Detect depth for relative paths
$depth = substr_count(str_replace('\\', '/', $_SERVER['PHP_SELF']), '/') - 2;
$root = str_repeat('../', max(0, $depth));
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($page_title) ?> — Richkem Services</title>
    <meta name="description" content="Richkem Services — Africa's premier marketplace for products, vehicles, aviation assets, and professional services.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --background: #ffffff;
            --foreground: #0a0a0a;
            --brand: #2563c9;
            --brand-deep: #0f2f63;
            --brand-light: #5790e6;
            --accent-teal: #0b6e97;
            --accent-gold: #c9920a;
            --surface: #f4f4f4;
            --surface-card: #ffffff;
            --ink: #0a0a0a;
            --ink-soft: #717784;
            --ghost: #d7dae1;
            --hairline: #e6e8ec;
            --on-brand: #ffffff;
            --success: #16a34a;
            --warning: #d97706;
            --danger: #dc2626;
            --radius-card: 1.5rem;
            --radius-card-lg: 2rem;
            --radius-pill: 62.5rem;
            --nav-h: 4.5rem;
        }
        html { font-size: 16px; scroll-behavior: smooth; }
        @media (max-width: 1920px) { html { font-size: 0.833333vw; } }
        @media (max-width: 1440px) { html { font-size: 1.111111vw; } }
        @media (max-width: 1024px) { html { font-size: 1.5625vw; } }
        @media (max-width: 640px)  { html { font-size: 4.444444vw; } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: "Onest", system-ui, sans-serif;
            background: var(--background);
            color: var(--foreground);
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }
        img { display: block; max-width: 100%; height: auto; }
        a { text-decoration: none; color: inherit; cursor: pointer; }
        button { cursor: pointer; background: none; border: none; font-family: inherit; }
        :focus-visible { outline: 2px solid var(--brand-light); outline-offset: 2px; }
        /* Shared utility classes */
        .pill-btn {
            display: inline-flex; align-items: center; gap: 0.5rem;
            border-radius: var(--radius-pill); padding: 0.75rem 1.5rem;
            font-size: 0.8rem; font-weight: 600; text-transform: uppercase;
            letter-spacing: 0.08em; transition: all 0.25s ease; font-family: inherit;
        }
        .pill-btn.solid { background: var(--brand); color: #fff; }
        .pill-btn.solid:hover { background: var(--brand-deep); transform: translateY(-1px); }
        .pill-btn.outline { border: 1.5px solid var(--hairline); color: var(--ink); }
        .pill-btn.outline:hover { border-color: var(--brand); color: var(--brand); }
        .pill-btn.ghost { background: rgba(255,255,255,0.12); color: #fff; border: 1px solid rgba(255,255,255,0.18); }
        .pill-btn.ghost:hover { background: rgba(255,255,255,0.22); }
        .pill-btn.sm { padding: 0.5rem 1rem; font-size: 0.7rem; }
        .eyebrow {
            display: inline-flex; align-items: center; gap: 0.5rem;
            font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em;
        }
        .eyebrow::before { content: ''; width: 0.375rem; height: 0.375rem; border-radius: 50%; background: var(--brand); }
        .eyebrow.light { color: rgba(255,255,255,0.7); }
        .eyebrow.light::before { background: var(--brand-light); }
        .page-container { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }
        .badge {
            display: inline-flex; align-items: center; gap: 0.35rem;
            padding: 0.3rem 0.75rem; border-radius: var(--radius-pill);
            font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
        }
        .badge.blue { background: #dbeafe; color: var(--brand); }
        .badge.green { background: #dcfce7; color: var(--success); }
        .badge.gold { background: #fef3c7; color: var(--accent-gold); }
        .badge.red { background: #fee2e2; color: var(--danger); }
        .badge.gray { background: var(--surface); color: var(--ink-soft); }
        /* Page header band */
        .inner-hero {
            background: var(--brand-deep);
            color: #fff;
            padding: 6rem 0 4rem;
        }
        .inner-hero h1 { font-size: 2.8rem; font-weight: 700; line-height: 1.15; margin-bottom: 0.75rem; }
        .inner-hero p { font-size: 1.05rem; color: rgba(255,255,255,0.72); max-width: 52rem; }
        /* Cards */
        .card {
            background: var(--surface-card);
            border-radius: var(--radius-card);
            border: 1px solid var(--hairline);
            overflow: hidden;
        }
        /* Form elements */
        .form-label { font-size: 0.78rem; font-weight: 600; color: var(--ink); margin-bottom: 0.4rem; display: block; letter-spacing: 0.04em; text-transform: uppercase; }
        .form-input, .form-select, .form-textarea {
            width: 100%; padding: 0.875rem 1.1rem;
            border: 1.5px solid var(--hairline); border-radius: 0.875rem;
            font-size: 0.9rem; font-family: inherit; color: var(--ink);
            background: var(--surface-card); outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
            border-color: var(--brand); box-shadow: 0 0 0 3px rgba(37,99,201,0.12);
        }
        .form-textarea { resize: vertical; min-height: 7rem; }
        .form-group { margin-bottom: 1.25rem; }
        /* Toast */
        #toast-container { position: fixed; bottom: 2rem; right: 2rem; z-index: 999; display: flex; flex-direction: column; gap: 0.75rem; }
        .toast {
            background: var(--ink); color: #fff; padding: 1rem 1.5rem;
            border-radius: var(--radius-card); font-size: 0.85rem; font-weight: 500;
            display: flex; align-items: center; gap: 0.75rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.18); animation: toastIn 0.35s ease;
            max-width: 22rem;
        }
        .toast.success { background: var(--success); }
        .toast.error { background: var(--danger); }
        @keyframes toastIn { from { opacity: 0; transform: translateY(1rem); } to { opacity: 1; transform: translateY(0); } }
        /* Divider */
        .divider { border: none; border-top: 1px solid var(--hairline); margin: 2rem 0; }
        /* Spinner */
        .spinner { width: 1.25rem; height: 1.25rem; border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ─── NAV ─── */
        #site-nav {
            position: sticky; top: 0; z-index: 100;
            background: rgba(255,255,255,0.9); backdrop-filter: blur(18px);
            border-bottom: 1px solid var(--hairline);
            height: var(--nav-h); display: flex; align-items: center;
        }
        .nav-inner {
            width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 2rem;
            display: flex; align-items: center; gap: 2rem;
        }
        .nav-logo {
            display: flex; align-items: center; gap: 0.6rem; font-weight: 700;
            font-size: 1.1rem; color: var(--brand-deep); flex-shrink: 0;
        }
        .nav-logo-icon {
            width: 2.2rem; height: 2.2rem; background: var(--brand-deep);
            border-radius: 0.625rem; display: grid; place-items: center;
        }
        .nav-logo-icon svg { fill: none; stroke: #fff; stroke-width: 2; }
        .nav-links { display: flex; align-items: center; gap: 0.25rem; flex: 1; }
        .nav-link {
            padding: 0.5rem 0.9rem; border-radius: var(--radius-pill);
            font-size: 0.82rem; font-weight: 500; color: var(--ink-soft);
            transition: all 0.2s; white-space: nowrap;
        }
        .nav-link:hover, .nav-link.active { background: var(--surface); color: var(--ink); }
        .nav-search {
            flex: 1; max-width: 28rem;
            display: flex; align-items: center; gap: 0.5rem;
            background: var(--surface); border-radius: var(--radius-pill);
            padding: 0.55rem 1rem; border: 1.5px solid transparent;
            transition: border-color 0.2s;
        }
        .nav-search:focus-within { border-color: var(--brand); background: #fff; }
        .nav-search svg { flex-shrink: 0; color: var(--ink-soft); }
        .nav-search input {
            border: none; background: none; outline: none; font-family: inherit;
            font-size: 0.85rem; color: var(--ink); width: 100%;
        }
        .nav-actions { display: flex; align-items: center; gap: 0.75rem; flex-shrink: 0; }
        .nav-icon-btn {
            width: 2.5rem; height: 2.5rem; border-radius: var(--radius-pill);
            display: grid; place-items: center; transition: background 0.2s;
            position: relative; color: var(--ink-soft);
        }
        .nav-icon-btn:hover { background: var(--surface); color: var(--ink); }
        .nav-badge {
            position: absolute; top: 0.25rem; right: 0.25rem;
            width: 1rem; height: 1rem; border-radius: 50%;
            background: var(--brand); color: #fff;
            font-size: 0.55rem; font-weight: 700; display: grid; place-items: center;
            border: 2px solid #fff;
        }
        .nav-avatar {
            width: 2.5rem; height: 2.5rem; border-radius: var(--radius-pill);
            background: var(--brand-deep); color: #fff; display: grid; place-items: center;
            font-size: 0.75rem; font-weight: 700; transition: opacity 0.2s; flex-shrink: 0;
        }
        .nav-avatar:hover { opacity: 0.85; }
        /* Dropdown */
        .nav-dropdown { position: relative; }
        .nav-dropdown-menu {
            position: absolute; top: calc(100% + 0.5rem); right: 0;
            background: #fff; border: 1px solid var(--hairline); border-radius: var(--radius-card);
            box-shadow: 0 12px 40px rgba(0,0,0,0.12); min-width: 14rem; padding: 0.5rem;
            opacity: 0; visibility: hidden; transform: translateY(-0.5rem);
            transition: all 0.2s; z-index: 200;
        }
        .nav-dropdown:hover .nav-dropdown-menu,
        .nav-dropdown-menu.open { opacity: 1; visibility: visible; transform: translateY(0); }
        .nav-dropdown-item {
            display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem;
            border-radius: 0.75rem; font-size: 0.85rem; color: var(--ink);
            transition: background 0.15s; width: 100%; text-align: left;
        }
        .nav-dropdown-item:hover { background: var(--surface); }
        .nav-dropdown-item.danger { color: var(--danger); }
        .nav-dropdown-divider { border: none; border-top: 1px solid var(--hairline); margin: 0.5rem 0; }
        /* Mobile nav toggle */
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; padding: 0.5rem; }
        .nav-hamburger span { width: 1.5rem; height: 2px; background: var(--ink); border-radius: 2px; display: block; transition: all 0.3s; }
        @media (max-width: 900px) {
            .nav-links { display: none; }
            .nav-search { display: none; }
            .nav-hamburger { display: flex; }
        }
        /* Mobile drawer */
        #mobile-drawer {
            position: fixed; inset: 0; z-index: 300;
            background: rgba(0,0,0,0.5); opacity: 0; visibility: hidden;
            transition: all 0.3s;
        }
        #mobile-drawer.open { opacity: 1; visibility: visible; }
        #mobile-drawer-panel {
            position: absolute; right: 0; top: 0; bottom: 0; width: min(22rem, 90vw);
            background: #fff; padding: 2rem 1.5rem; overflow-y: auto;
            transform: translateX(100%); transition: transform 0.35s ease;
            display: flex; flex-direction: column; gap: 0.5rem;
        }
        #mobile-drawer.open #mobile-drawer-panel { transform: translateX(0); }
        .drawer-link {
            display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1rem;
            border-radius: 0.875rem; font-size: 0.9rem; color: var(--ink);
            transition: background 0.2s;
        }
        .drawer-link:hover { background: var(--surface); }
        .drawer-close {
            align-self: flex-end; width: 2.5rem; height: 2.5rem;
            border-radius: var(--radius-pill); background: var(--surface);
            display: grid; place-items: center; margin-bottom: 1rem;
        }
    </style>
</head>
<body>
<div id="toast-container"></div>

<!-- NAV -->
<nav id="site-nav">
  <div class="nav-inner">
    <!-- Logo -->
    <a href="<?= $root ?>index.php" class="nav-logo">
      <div class="nav-logo-icon">
        <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
      </div>
      Richkem
    </a>

    <!-- Desktop links -->
    <div class="nav-links">
      <a href="<?= $root ?>search.php?type=products" class="nav-link <?= $current_page === 'search' ? 'active' : '' ?>">Products</a>
      <a href="<?= $root ?>search.php?type=services" class="nav-link">Services</a>
      <a href="<?= $root ?>search.php?type=vehicles" class="nav-link">Vehicles</a>
      <a href="<?= $root ?>search.php?type=aviation" class="nav-link">Aviation</a>
      <a href="<?= $root ?>category.php" class="nav-link <?= $current_page === 'category' ? 'active' : '' ?>">Categories</a>
    </div>

    <!-- Search -->
    <form class="nav-search" action="<?= $root ?>search.php" method="GET">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <input type="text" name="q" placeholder="Search products, services, professionals..." autocomplete="off">
    </form>

    <!-- Actions -->
    <div class="nav-actions">
      <a href="<?= $root ?>cart.php" class="nav-icon-btn" title="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <span class="nav-badge">3</span>
      </a>
      <a href="<?= $root ?>dashboard/inbox.php" class="nav-icon-btn" title="Messages">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span class="nav-badge" style="background:var(--accent-gold)">5</span>
      </a>

      <!-- User menu dropdown -->
      <div class="nav-dropdown">
        <a href="#" class="nav-avatar" id="nav-avatar-btn">LS</a>
        <div class="nav-dropdown-menu" id="nav-user-menu">
          <a href="<?= $root ?>dashboard/index.php" class="nav-dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            My Dashboard
          </a>
          <a href="<?= $root ?>dashboard/orders.php" class="nav-dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
            My Orders
          </a>
          <a href="<?= $root ?>merchant/dashboard.php" class="nav-dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Merchant Panel
          </a>
          <hr class="nav-dropdown-divider">
          <a href="<?= $root ?>dashboard/settings.php" class="nav-dropdown-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            Settings
          </a>
          <a href="<?= $root ?>login.php?logout=1" class="nav-dropdown-item danger">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
          </a>
        </div>
      </div>

      <!-- Sell button -->
      <a href="<?= $root ?>merchant/apply.php" class="pill-btn solid sm" style="flex-shrink:0">
        + Sell
      </a>

      <!-- Hamburger -->
      <button class="nav-hamburger" id="hamburger-btn" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Mobile Drawer -->
<div id="mobile-drawer">
  <div id="mobile-drawer-panel">
    <button class="drawer-close" id="drawer-close-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <a href="<?= $root ?>search.php?type=products" class="drawer-link">🛍 Products</a>
    <a href="<?= $root ?>search.php?type=services" class="drawer-link">🔧 Services</a>
    <a href="<?= $root ?>search.php?type=vehicles" class="drawer-link">🚗 Vehicles</a>
    <a href="<?= $root ?>search.php?type=aviation" class="drawer-link">✈ Aviation & Marine</a>
    <a href="<?= $root ?>category.php" class="drawer-link">📦 All Categories</a>
    <hr class="nav-dropdown-divider">
    <a href="<?= $root ?>dashboard/index.php" class="drawer-link">👤 My Dashboard</a>
    <a href="<?= $root ?>merchant/dashboard.php" class="drawer-link">🏪 Merchant Panel</a>
    <a href="<?= $root ?>cart.php" class="drawer-link">🛒 Cart</a>
    <hr class="nav-dropdown-divider">
    <a href="<?= $root ?>login.php" class="pill-btn solid" style="width:100%;justify-content:center">Sign In</a>
  </div>
</div>

<script>
// Mobile drawer toggle
const hamburger = document.getElementById('hamburger-btn');
const drawer = document.getElementById('mobile-drawer');
const drawerClose = document.getElementById('drawer-close-btn');
hamburger?.addEventListener('click', () => drawer.classList.add('open'));
drawerClose?.addEventListener('click', () => drawer.classList.remove('open'));
drawer?.addEventListener('click', e => { if (e.target === drawer) drawer.classList.remove('open'); });

// Toast helper
function showToast(msg, type = '') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.innerHTML = msg;
    c.appendChild(t);
    setTimeout(() => t.remove(), 4000);
}
window.showToast = showToast;
</script>

The above content shows the entire, complete file contents of the requested file.

