# 📂 Project Structure

```
restaurant-menu/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── tsconfig.json             # TypeScript configuration
│   ├── next.config.js            # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── .gitignore                # Git ignore rules
│   └── .env.local.example        # Environment variables template
│
├── 📱 App Directory (Next.js 14 App Router)
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Homepage (main entry point)
│   └── globals.css               # Global styles and animations
│
├── 🧩 Components
│   ├── Hero3D.tsx                # 3D spinning food animation hero
│   ├── MenuGrid.tsx              # Menu items display grid
│   ├── BottomNav.tsx             # Bottom navigation bar
│   ├── CartModal.tsx             # Shopping cart modal
│   └── OrderHistory.tsx          # Order history display
│
├── 🔄 Context (State Management)
│   └── CartContext.tsx           # Cart & order state + localStorage
│
└── 📚 Documentation
    ├── README.md                 # Main documentation
    ├── SETUP_GUIDE.md            # Installation instructions
    ├── FEATURES.md               # Complete features list
    └── PROJECT_STRUCTURE.md      # This file!
```

## 🔍 File Descriptions

### Configuration Files

**package.json**
- All project dependencies
- Scripts for dev, build, start
- React, Next.js, Three.js, Framer Motion

**tsconfig.json**
- TypeScript compiler options
- Path aliases configuration
- Strict mode enabled

**tailwind.config.js**
- Custom orange/black color scheme
- Extended theme configuration
- Content paths for CSS purging

### App Directory

**layout.tsx**
- Root layout wrapper
- Global metadata (title, description)
- Font configuration (Inter)
- Background styling

**page.tsx** ⭐ Main Component
- Tab management (Menu/Orders)
- Cart modal state
- Integrates all components
- CartProvider wrapper

**globals.css**
- Tailwind directives
- CSS custom properties
- Custom animations (float, glow)
- Scrollbar styling

### Components

**Hero3D.tsx** (3D Animation)
```
Features:
- Three.js canvas
- Spinning distorted sphere
- 100 floating particles
- Auto-rotating camera
- Orange lighting effects
- Text overlay
```

**MenuGrid.tsx** (Menu Display)
```
Features:
- 5 menu items hardcoded
- Grid layout (responsive)
- Food emoji icons
- Add to cart functionality
- Price formatting (IDR)
- Hover animations
```

**BottomNav.tsx** (Navigation)
```
Features:
- Fixed bottom position
- 3 tabs (Menu, Orders, Cart)
- Active state highlighting
- Cart badge counter
- Smooth transitions
```

**CartModal.tsx** (Shopping Cart)
```
Features:
- Slide-up modal
- Item list with controls
- Quantity +/- buttons
- Remove item button
- Clear cart button
- Checkout button
- Total calculation
- Empty state
```

**OrderHistory.tsx** (Orders)
```
Features:
- Order list display
- Order cards layout
- Status badges
- Date/time formatting
- Item breakdown
- Total per order
- Empty state
```

### Context

**CartContext.tsx** (State Management)
```
Features:
- Cart state management
- Order history state
- localStorage sync
- Add/remove/update items
- Checkout logic
- Order ID generation
- Total calculations
```

## 🔗 Component Relationships

```
App (page.tsx)
├── Hero3D
│   ├── AnimatedFood (3D sphere)
│   └── FoodParticles (3D particles)
│
├── [Conditional Rendering]
│   ├── MenuGrid (if activeTab === 'menu')
│   │   └── Menu Item Cards (×5)
│   │
│   └── OrderHistory (if activeTab === 'orders')
│       └── Order Cards (dynamic)
│
├── BottomNav
│   ├── Menu Tab
│   ├── Orders Tab
│   └── Cart Button (with badge)
│
└── CartModal (conditional)
    └── Cart Items List (dynamic)

[Wraps Everything]
CartProvider (Context)
├── Provides: cart, orders, functions
└── Manages: localStorage sync
```

## 📊 Data Flow

```
User Action → Component → Context → LocalStorage
                           ↓
                      Update State
                           ↓
                    Re-render UI
```

### Example: Add to Cart Flow
```
1. User clicks "Add to Cart" in MenuGrid
2. MenuGrid calls addToCart(item)
3. CartContext updates cart state
4. CartContext saves to localStorage
5. BottomNav badge updates (shows count)
6. CartModal shows new item (if open)
```

### Example: Checkout Flow
```
1. User clicks "Checkout" in CartModal
2. CartModal calls checkout()
3. CartContext creates new Order object
4. Order added to orders array
5. Cart cleared
6. Both saved to localStorage
7. Modal closes
8. Alert shows success message
9. OrderHistory shows new order
```

## 🎨 Styling Architecture

```
Tailwind CSS (Utility Classes)
├── Custom Theme (tailwind.config.js)
│   ├── Orange colors
│   └── Black colors
│
├── Global Styles (globals.css)
│   ├── Animations (@keyframes)
│   ├── Scrollbar styling
│   └── Base resets
│
└── Component Styles
    ├── Inline Tailwind classes
    └── Conditional classes (active states)
```

## 🔐 Data Persistence

```
Browser LocalStorage
├── Key: "cart"
│   └── Value: CartItem[] (JSON)
│
└── Key: "orders"
    └── Value: Order[] (JSON)

[Automatically synced on every change]
```

## 🚀 Build Output

```
After 'npm run build':
.next/
├── static/
│   ├── chunks/          # Code split bundles
│   └── css/             # Compiled CSS
├── server/              # Server-side code
└── cache/               # Build cache
```

## 📱 Responsive Breakpoints

```
Mobile First Approach:
- Base: 320px+ (Mobile)
- md: 768px+ (Tablet)
- lg: 1024px+ (Desktop)

Grid Columns:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
```

## 🎯 Entry Points

**Development:**
```
npm run dev → next dev → http://localhost:3000
```

**Production:**
```
npm run build → next build → .next/
npm start → next start → http://localhost:3000
```

## 🧪 Testing Guide

**Manual Testing Checklist:**
- [ ] 3D animation loads and spins
- [ ] All 5 menu items display correctly
- [ ] Add to cart works
- [ ] Cart badge updates
- [ ] Cart modal opens/closes
- [ ] Quantity +/- buttons work
- [ ] Remove item works
- [ ] Clear cart works
- [ ] Checkout creates order
- [ ] Order appears in history
- [ ] Data persists after refresh
- [ ] Bottom nav tabs switch
- [ ] Responsive on mobile
- [ ] All animations smooth

---

## 💡 Quick Reference

**Start Development:**
```bash
npm install && npm run dev
```

**Main Entry Point:**
```
app/page.tsx
```

**Add Menu Item:**
```
components/MenuGrid.tsx → menuItems array
```

**Modify Colors:**
```
tailwind.config.js → theme.extend.colors
```

**Change 3D Animation:**
```
components/Hero3D.tsx
```

---

This structure is **modular**, **scalable**, and **easy to maintain**! 🎉
