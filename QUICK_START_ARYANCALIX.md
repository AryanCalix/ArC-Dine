# Quick Start Guide - AryanCalix Edition

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   ```
   http://localhost:3000
   ```

## 🎨 What's New in This Edition

### Design Features
- ✅ **Orange Gradient Background** with Japanese kanji pattern
- ✅ **White Glass Cards** for modern, clean look
- ✅ **Pitch Black Navigation** with smooth animations
- ✅ **Professional Footer** with AryanCalix branding
- ✅ **Enhanced Typography** for better readability

### Branding
- **Created by AryanCalix** displayed in:
  - Browser tab title
  - Hero section with badge
  - Menu section header
  - Footer with copyright
  - README documentation

## 📁 Project Structure

```
restaurant-menu/
├── app/
│   ├── globals.css          # Orange theme + kanji pattern
│   ├── layout.tsx           # Meta tags with AryanCalix
│   └── page.tsx             # Main page with footer
├── components/
│   ├── MenuGrid.tsx         # White cards with gradients
│   ├── CartModal.tsx        # Light theme modal
│   ├── Hero3D.tsx           # Enhanced hero section
│   ├── BottomNav.tsx        # Pitch black navigation
│   ├── OrderHistory.tsx     # Consistent theme
│   ├── Footer.tsx           # NEW - Branding footer
│   └── Toast.tsx            # Enhanced notifications
└── README.md                # Updated with credits
```

## 🎯 Key Features

### Menu System
- Beautiful white cards with orange accents
- 3D emoji animations on hover
- Gradient "Add to Cart" buttons
- Smooth scale hover effects

### Shopping Cart
- Light theme with backdrop blur
- Quantity controls with orange buttons
- Gradient checkout button
- Empty state with friendly message

### Order History
- Consistent white card design
- Status badges with colors
- Order details with emoji icons
- Total display with orange emphasis

### Navigation
- Pitch black bar at bottom
- Active state with orange highlight
- Cart badge with item count
- Smooth transitions

## 🎨 Color Palette

```css
Primary Orange: #FF6B00
Light Orange:   #ff8533
Black:          #000000
White:          #FFFFFF
Gray-900:       #1a1a1a
Gray-600:       #4b5563
```

## 🔧 Customization

### Change Menu Items
Edit `components/MenuGrid.tsx`:
```tsx
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Your Item',
    price: 15000,
    category: 'Category',
    description: 'Description',
    image: '🍕'
  },
  // Add more items...
]
```

### Modify Colors
Edit `app/globals.css`:
```css
body {
  background: linear-gradient(135deg, #ff6b00 0%, #ff8533 50%, #ff6b00 100%);
}
```

### Update Branding
Search for "AryanCalix" in:
- `app/layout.tsx`
- `components/Hero3D.tsx`
- `components/MenuGrid.tsx`
- `components/Footer.tsx`
- `README.md`

## 📱 Mobile Responsive
- All components are mobile-optimized
- Bottom navigation for easy thumb access
- Cards stack vertically on mobile
- Touch-friendly buttons and controls

## 🎭 Animations
- Fade-in on hero section
- Scale transforms on hover
- Smooth 300ms transitions
- 3D spinning food emojis

## 🌐 Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📦 Production Build

```bash
npm run build
npm start
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📚 Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Three.js Documentation](https://threejs.org/docs)
- [Framer Motion](https://www.framer.com/motion)

---

## 🎉 You're All Set!

Your restaurant menu website is ready to go with:
- ✅ Beautiful orange and white design
- ✅ Japanese kanji background pattern
- ✅ Professional branding
- ✅ Smooth animations
- ✅ Full cart functionality
- ✅ Mobile responsive

**Made with ❤️ by AryanCalix**

© 2024 ArC Group. All rights reserved.

---

**Need help? Check out the full documentation in README.md**
