# Restaurant Menu Website 🍽️

A modern, full-stack Next.js restaurant menu website with a stunning orange and black color scheme, featuring 3D spinning food animations, Supabase authentication, and complete transaction management.

**Created by AryanCalix**

## ✨ Features

- 🎨 **Beautiful Design**: Orange and black color scheme with modern UI/UX
- 🎭 **3D Animations**: Spinning food animation using Three.js
- 🔐 **Authentication**: Supabase-powered user authentication (login/signup)
- 📱 **Bottom Navigation**: Easy-to-use navigation bar at the bottom
- 🛒 **Shopping Cart**: Full cart functionality with add/remove/update items
- 💾 **Data Persistence**: Cart and order history saved in localStorage
- 📋 **Order History**: Track all your past orders
- 🎯 **Responsive**: Works perfectly on mobile, tablet, and desktop
- ⚡ **Fast Performance**: Built with Next.js 14 and optimized for speed
- 🚀 **Vercel Ready**: Optimized for deployment with build fixes applied

## 🍴 Menu Items

1. **Geprek Yuks** - Spicy smashed fried chicken (Rp 25,000)
2. **Coto Dawata** - Traditional Indonesian beef soup (Rp 35,000)
3. **Americano** - Strong espresso coffee (Rp 15,000)
4. **Mie Gacoan** - Spicy noodles with savory broth (Rp 20,000)
5. **Milk (100% Milk)** - Pure fresh milk (Rp 12,000)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Supabase account (free tier available)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up Supabase Authentication:**
   - See detailed guide: [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
   - Create a Supabase project
   - Copy `.env.local.example` to `.env.local`
   - Add your Supabase credentials to `.env.local`

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

- **[SUPABASE_SETUP.md](./SUPABASE_SETUP.md)** - Complete guide for setting up Supabase authentication
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Step-by-step deployment guide for Vercel
- **[DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)** - Pre and post-deployment checklist

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
restaurant-menu/
├── app/
│   ├── layout.tsx          # Root layout with global settings
│   ├── page.tsx            # Main homepage
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Hero3D.tsx          # 3D spinning food animation
│   ├── MenuGrid.tsx        # Menu items display
│   ├── BottomNav.tsx       # Bottom navigation bar
│   ├── CartModal.tsx       # Shopping cart modal
│   └── OrderHistory.tsx    # Order history component
├── context/
│   └── CartContext.tsx     # Cart & transaction state management
└── package.json            # Dependencies and scripts
```

## 🎮 How to Use

### For Customers:

1. **Browse Menu**: View all available items on the homepage
2. **Add to Cart**: Click "Add to Cart" on any item
3. **Manage Cart**: Open cart from bottom navigation to:
   - Adjust quantities with +/- buttons
   - Remove items
   - See total price
   - Clear entire cart
4. **Checkout**: Click "Checkout" to complete your order
5. **View Orders**: Check "Orders" tab to see your order history

### Transaction Data Management

All transaction data is automatically handled:
- **Cart Data**: Stored in browser localStorage (persists across sessions)
- **Order History**: Automatically saved when you checkout
- **Order IDs**: Auto-generated unique IDs (ORD-timestamp format)
- **Order Status**: Tracks pending/completed/cancelled status
- **Timestamps**: Automatic date/time recording for each order

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    orange: '#FF6B00',      // Main orange
    'orange-dark': '#CC5500', // Darker orange
    black: '#0A0A0A',        // Main black
    'black-light': '#1A1A1A', // Lighter black
  }
}
```

### Menu Items

Edit `components/MenuGrid.tsx` to add/modify menu items:
```typescript
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Your Item Name',
    price: 25000,
    category: 'Main Course',
    description: 'Item description',
    image: '🍕' // Any emoji
  },
  // Add more items...
]
```

## 📱 Features Breakdown

### 3D Hero Animation
- Spinning distorted sphere with orange glow
- Floating particles
- Auto-rotating camera
- Responsive design

### Shopping Cart
- Add/remove items
- Update quantities
- Real-time total calculation
- Persistent storage (localStorage)
- Smooth animations

### Order Management
- Automatic order ID generation
- Timestamp recording
- Status tracking
- Order history display
- Data persistence

### Bottom Navigation
- Menu browsing
- Order history
- Shopping cart with badge counter
- Smooth tab transitions

## 🔒 Data Storage

This application uses browser localStorage to store:
- Shopping cart items
- Order history
- User preferences

**Note**: Data is stored locally on the user's device. For production use, consider implementing a backend API with database storage.

## 📝 Future Enhancements

Potential features to add:
- Backend API integration
- User authentication
- Payment gateway integration
- Order status updates
- Admin dashboard
- Real-time notifications
- Multiple restaurant support

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Built with ❤️ by **[AryanCalix](https://github.com/AryanCalix)**

© 2024 ArC Group. All rights reserved.

---

**Enjoy your restaurant menu website!** 🎉
