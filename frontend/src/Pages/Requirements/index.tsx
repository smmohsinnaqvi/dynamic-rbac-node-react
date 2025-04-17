import React from "react";

const Requirement = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800 space-y-6">
      {/* App Overview */}
      <h1 className="text-3xl font-bold mb-4">
        🍋 Mango Farm Business App – Overview
      </h1>
      <p>
        This app will serve as a marketplace platform in India where farm owners
        can sell their mangoes online to:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Distributors</li>
        <li>Shop Owners</li>
        <li>Direct Customers</li>
      </ul>
      <p>
        It empowers farm owners to showcase their products directly, manage
        listings, chat with buyers, and build customer relationships. It also
        helps buyers find fresh mangoes from trusted farms, enabling a
        transparent and efficient farm-to-table ecosystem.
      </p>

      {/* Core Features */}
      <h2 className="text-3xl font-bold mt-10">🧩 Core Features – In Detail</h2>

      {/* Feature 1 */}
      <section>
        <h3 className="text-2xl font-semibold">
          1. User Registration & Authentication
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Mobile number-based registration with OTP verification
            (Firebase/Twilio).
          </li>
          <li>
            User type selection: Farmer, Distributor, Shop Owner, Direct
            Customer.
          </li>
          <li>KYC upload for farm owners (e.g., Aadhar, PAN card).</li>
          <li>JWT-based secure authentication with refresh tokens.</li>
        </ul>
      </section>

      {/* Feature 2 */}
      <section>
        <h3 className="text-2xl font-semibold">2. Profile Management</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Farm Owners:</strong> Farm details, GPS location, mango
            variety, photos.
          </li>
          <li>
            <strong>Buyers:</strong> Saved addresses, order history,
            wishlist/favorites.
          </li>
        </ul>
      </section>

      {/* Feature 3 */}
      <section>
        <h3 className="text-2xl font-semibold">
          3. Product Listings (Mango Inventory)
        </h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Farmers can list mangoes with details: type, price, quantity,
            availability window.
          </li>
          <li>Upload images, mention chemical-free or organic tags.</li>
          <li>
            Buyers can filter by variety, price, farm location, harvest
            freshness.
          </li>
        </ul>
      </section>

      {/* Feature 4 */}
      <section>
        <h3 className="text-2xl font-semibold">4. Marketplace Browsing</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Grid/List view of mango listings with preview cards.</li>
          <li>
            Advanced filtering: by mango type, location, price, organic tags.
          </li>
          <li>
            Highlight badges: Verified Farm, Premium Listing, Organic Certified.
          </li>
        </ul>
      </section>

      {/* Feature 5 */}
      <section>
        <h3 className="text-2xl font-semibold">5. Order Workflow</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cart system for adding mangoes from multiple farms.</li>
          <li>
            Checkout with delivery type options: pickup, farmer-arranged,
            platform delivery.
          </li>
          <li>Payment integrations: Razorpay/Stripe/UPI, and optional COD.</li>
          <li>Track orders post-purchase: pending, dispatched, delivered.</li>
        </ul>
      </section>

      {/* Feature 6 */}
      <section>
        <h3 className="text-2xl font-semibold">6. Real-Time Chat</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Built-in chat for buyer and seller communication (e.g.
            Socket.IO/Firebase).
          </li>
          <li>Order-specific chat with context and message history.</li>
          <li>Basic features: text, emojis, file/image support.</li>
          <li>Push notifications and unread message badges.</li>
        </ul>
      </section>

      {/* Feature 7 */}
      <section>
        <h3 className="text-2xl font-semibold">7. Admin Panel</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Approve/reject seller KYC and listings.</li>
          <li>Handle disputes, user complaints, and reviews.</li>
          <li>Track orders, sales reports, and user activities.</li>
          <li>Manage categories, regions, and seasonal announcements.</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-3xl font-bold mt-10">🧱 Recommended Tech Stack</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Frontend:</strong> React, Tailwind CSS, Redux Toolkit, React
            Router
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Database:</strong> MongoDB (with Mongoose)
          </li>
          <li>
            <strong>Auth:</strong> Firebase Auth or custom JWT-based
          </li>
          <li>
            <strong>Realtime:</strong> Socket.IO or Firebase Realtime DB
          </li>
          <li>
            <strong>Payments:</strong> Razorpay / Stripe
          </li>
          <li>
            <strong>Storage:</strong> Cloudinary / Firebase Storage
          </li>
          <li>
            <strong>Hosting:</strong> Vercel (frontend), Render/Heroku
            (backend), MongoDB Atlas
          </li>
        </ul>
      </section>

      {/* Component Structure */}
      <section>
        <h2 className="text-3xl font-bold mt-10">
          🧩 Component Structure (Frontend)
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>Auth</strong>: Login, OTP Verification, Register
          </li>
          <li>
            <strong>Home</strong>: Hero Banner, Featured Mangoes, Explore Farms
          </li>
          <li>
            <strong>Product</strong>: ProductCard, ProductDetails, ImageGallery
          </li>
          <li>
            <strong>Chat</strong>: ChatWindow, MessageBubble, NewChatSidebar
          </li>
          <li>
            <strong>User</strong>: ProfilePage, Orders, Wishlist, KYCUpload
          </li>
          <li>
            <strong>Farmer</strong>: Dashboard, AddMangoForm, Listings
          </li>
          <li>
            <strong>Admin</strong>: Dashboard, UserManagement, ListingModeration
          </li>
          <li>
            <strong>Common</strong>: Navbar, Footer, Loader, Notification
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Requirement;
