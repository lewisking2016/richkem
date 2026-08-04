Created At: 2026-08-04T13:27:51Z
Completed At: 2026-08-04T13:27:52Z
File Path: `file:///C:/Users/lewis/.gemini/antigravity-ide/brain/ae3cab85-a0e0-4035-bb74-72f81c0a8a8c/exhaustive_pages_list.md`
Total Lines: 109
Total Bytes: 6871
Showing lines 1 to 109
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
# Exhaustive Pages, Screens, and User Flow Checklist

This document is a comprehensive, production-ready directory of every single page, screen, sub-page, modal, and state required to make the **Richkem Services** hybrid marketplace 100% operational.

---

## Part 1: Public Buyer & Client Experience (C2C & B2C)

### 1. Welcome & Onboarding
*   `index.php` (Home / Landing Page) - *Core marketing introduction.*
*   `login.php` (Sign In Portal) - *Forms for Username/Email and password.*
*   `register.php` (Registration Selector) - *Choice to sign up as Buyer or Merchant.*
*   `register-buyer.php` (Buyer Registration form) - *Standard name, email, phone (M-Pesa linked).*
*   `forgot-password.php` (Password Recovery request) - *Email/SMS recovery trigger.*
*   `reset-password.php` (New Password submission) - *Security verification token input.*

### 2. Search & Discovery
*   `search.php` (Unified Search results page) - *Grid / Map view matching products and services.*
*   `category.php` (Category hubs) - *Curated pages for major verticals (e.g. Vehicles, Aviation, Medical, Legal).*
*   `search-map-view.php` (Interactive Proximity map overlay) - *Full-screen map showing local provider pins.*

### 3. Product Catalog Detail Pages (PDP)
*   `product-standard.php` (Standard E-commerce PDP) - *E.g., phones, laptops. Traditional Add to Cart, reviews.*
*   `product-vehicle.php` (High-Value Vehicle PDP) - *E.g., cars. Displays mileage, chassis check, Book Inspection trigger.*
*   `product-aviation-marine.php` (Ultra-High Asset PDP) - *E.g., planes, yachts. Displays flight hours, maritime certificates, Escrow Broker contact.*
*   `product-virtual-tour.php` (360° Media viewer modal) - *Full screen immersive cockpit/cabin tour.*
*   `inspection-report-view.php` (Certified Checklist PDF viewer) - *Inspector checklist verification interface.*

### 4. Professional Service Directory (GBP Storefronts)
*   `profile.php` (Main GBP Business profile) - *NAP info, verified badge, quick actions, services catalog.*
*   `profile-reviews.php` (Review Feed sub-page) - *Detailed star ratings, audio clips, video review attachments.*
*   `profile-updates.php` (Updates & Posts feed) - *Merchant announcements, updates timeline, discount vouchers.*
*   `profile-map-directions.php` (Direction details) - *Geo-location guide and operating hours check.*

### 5. Shopping, Cart & Escrow Payments
*   `cart.php` (Unified Shopping Cart) - *Displays products and attached services (e.g. TV + Mount Technician).*
*   `checkout.php` (Secure Payment checkout) - *Lipa na M-Pesa selection, billing form.*
*   `mpesa-waiting.php` (STK Push Pending status screen) - *Loading screen listening for Daraja API callback.*
*   `payment-success.php` (Payment Complete page) - *Transaction reference, escrow receipts.*
*   `payment-failed.php` (Transaction Failed screen) - *M-Pesa error diagnosis (e.g., Insufficient funds).*

### 6. Client Dashboard (`/dashboard/`)
*   `dashboard/index.php` (Account overview) - *Active purchases, pending escrows, notification inbox.*
*   `dashboard/orders.php` (Product order history) - *Delivery tracking codes, vendor details.*
*   `dashboard/escrows.php` (Active Escrow jobs) - *Milestone completion checklist, "Confirm Job Done" button.*
*   `dashboard/inbox.php` (Message center) - *Negotiation chat list.*
*   `dashboard/chat.php?user=X` (Direct chat window) - *Accept/reject custom quote offers.*
*   `dashboard/settings.php` (Profile settings) - *Password change, phone update, primary address.*

---

## Part 2: Merchant & Professional Experience (B2B Storefronts)

### 1. Merchant Setup & Verification
*   `merchant/apply.php` (Merchant Application) - *Business description, bank accounts/Paybill details.*
*   `merchant/kyc.php` (Identity Verification upload) - *National ID front/back, medical/engineer license photo.*
*   `merchant/kyc-pending.php` (Verification Status) - *Lock screen while admin reviews credentials.*

### 2. Merchant Dashboard Control Panel (`/merchant/`)
*   `merchant/dashboard.php` (Main panel) - *Store visits, conversion metrics, balance logs.*
*   `merchant/wallet.php` (Financial control) - *Request payouts, withdrawal transaction log.*
*   `merchant/inventory.php` (Catalog listing index) - *Active/Draft/Sold products list.*
*   `merchant/add-product.php` (Universal Listing Wizard) - *Step 1: Category selection.*
*   `merchant/add-product-details.php` (Dynamic Attribute Form) - *Step 2: Category-specific attribute form.*
*   `merchant/services.php` (Service Storefront manager) - *List services, prices, duration config.*
*   `merchant/business-profile.php` (Google Business Profile editor) - *Upload cover pictures, map coordinates, updates.*
*   `merchant/orders.php` (Incoming Product orders) - *Update delivery status, print shipping labels.*
*   `merchant/bookings.php` (Incoming Service bookings) - *Manage schedule reservations, propose quote changes.*
*   `merchant/chat.php?client=Y` (Negotiation room) - *Trigger "Send Custom Offer" quote modal.*

---

## Part 3: Platform Administration Portal (`/admin/`)

### 1. Platform Metrics & Control
*   `admin/login.php` (Secure Admin sign-in) - *Access control page.*
*   `admin/dashboard.php` (Global Analytics) - *Aggregate revenue, active escrows, total payouts.*
*   `admin/users.php` (User directory) - *Manage buyers, vendors, professionals.*
*   `admin/user-detail.php?id=Z` (User record detail) - *Logs warning count, ban toggle, activity logs.*

### 2. Vetting Queues
*   `admin/kyc-queue.php` (Identity verification approvals) - *Vetting dashboard for licenses and IDs.*
*   `admin/asset-verifications.php` (High-Value Asset audits) - *Vetting logbooks for aircraft/ships.*

### 3. Escrow Control & Disputes
*   `admin/escrows.php` (Global Escrow ledger) - *List of locked funds, transaction statuses.*
*   `admin/disputes.php` (Disputed Escrow ticket queue) - *Open disputes where buyer/merchant disagreed.*
*   `admin/dispute-detail.php?id=W` (Adjudication room) - *View chat transcripts, split funds selector.*

---

## Part 4: System Views & Transactional Templates

### 1. Error & Safety Screens
*   `404.php` (File Not Found) - *Custom stylized redirect.*
*   `500.php` (Server Error) - *Error handler warning.*
*   `maintenance.php` (Platform offline status page).

### 2. Automated Document Templates
*   `invoice-pdf.php` (Transaction invoice) - *For physical products.*
*   `escrow-contract-pdf.php` (Escrow Milestone agreement) - *For services.*
*   `inspection-checksheet-pdf.php` (Inspection report check).

### 3. Transactional Notifications (Email/SMS scripts)
*   `sms-verify-phone.php` (One-Time PIN text trigger).
*   `email-reset-password.php` (Password recovery mail link).
*   `email-escrow-locked.php` (Notification that escrow balance is secured).
*   `email-escrow-released.php` (Notification of payout dispatch).

The above content shows the entire, complete file contents of the requested file.

