# 🎨 Customization Guide

Complete guide to customizing your restaurant menu website.

---

## 📝 Menu Items

### Location: `components/MenuGrid.tsx`

**Add/Edit Menu Items:**

```typescript
const menuItems: MenuItem[] = [
  {
    id: 1,                          // Unique ID
    name: 'Your Dish Name',         // Display name
    price: 25000,                   // Price in Rupiah
    category: 'Main Course',        // Category
    description: 'Your description', // Short description
    image: '🍗'                     // Emoji icon
  },
  // Add more items here...
]
```

**Available Categories:**
- Main Course
- Beverage
- Dessert
- Appetizer

**Emoji Icons:**
Find emojis at: https://emojipedia.org/
- Food: 🍕🍔🍟🌭🍗🍖🥓🥩🍱🍛🍜🍝
- Drinks: ☕🍵🧃🥤🍹🍺🍻🥂🍷
- Desserts: 🍰🎂🧁🍪🍩🍨🍦

### Example: Add New Item

```typescript
{
  id: 6,
  name: 'Nasi Goreng Special',
  price: 30000,
  category: 'Main Course',
  description: 'Authentic Indonesian fried rice with chicken',
  image: '🍛'
}
```

---

## 🎨 Colors

### Location: `tailwind.config.js`

**Change Color Scheme:**

```javascript
colors: {
  primary: {
    orange: '#FF6B00',        // Main accent color
    'orange-dark': '#CC5500', // Hover/active state
    black: '#0A0A0A',         // Background
    'black-light': '#1A1A1A', // Cards/containers
  }
}
```

**Popular Color Schemes:**

**Red & Black (Elegant):**
```javascript
orange: '#E63946',
'orange-dark': '#B81D24',
```

**Blue & Black (Modern):**
```javascript
orange: '#3B82F6',
'orange-dark': '#1E40AF',
```

**Green & Black (Fresh):**
```javascript
orange: '#10B981',
'orange-dark': '#047857',
```

**Purple & Black (Luxurious):**
```javascript
orange: '#8B5CF6',
'orange-dark': '#6D28D9',
```

**Gold & Black (Premium):**
```javascript
orange: '#F59E0B',
'orange-dark': '#D97706',
```

---

## 🎭 3D Animation

### Location: `components/Hero3D.tsx`

**Adjust Sphere Properties:**

```typescript
<MeshDistortMaterial
  color="#FF6B00"      // Change color
  distort={0.5}        // 0-1: distortion amount
  speed={2}            // Animation speed
  roughness={0.2}      // 0-1: surface roughness
  metalness={0.8}      // 0-1: metallic look
/>
```

**Adjust Particle Count:**

```typescript
const particlesCount = 100  // Change to 50, 200, etc.
```

**Change Rotation Speed:**

```typescript
<OrbitControls 
  autoRotateSpeed={0.5}  // Change speed (default: 0.5)
/>
```

**Disable Auto-rotation:**

```typescript
<OrbitControls 
  autoRotate={false}  // Set to false
/>
```

---

## 📱 Navigation

### Location: `components/BottomNav.tsx`

**Add New Tab:**

```typescript
const navItems = [
  { id: 'menu', label: 'Menu', icon: '🍽️' },
  { id: 'orders', label: 'Orders', icon: '📋' },
  { id: 'profile', label: 'Profile', icon: '👤' },  // NEW
]
```

Then add corresponding component in `app/page.tsx`:

```typescript
{activeTab === 'profile' && <ProfileComponent />}
```

---

## 🏷️ Branding

### Restaurant Name

**Location: `app/layout.tsx`**

```typescript
export const metadata: Metadata = {
  title: 'Your Restaurant Name',  // Change this
  description: 'Your custom description',
}
```

**Location: `components/Hero3D.tsx`**

```typescript
<h1 className="...">
  Welcome to Your Restaurant  {/* Change this */}
</h1>
<p className="...">
  Your custom tagline here  {/* Change this */}
</p>
```

---

## 💰 Currency

### Change from Rupiah to Other Currency

**Create helper function in `lib/utils.ts`:**

```typescript
// For USD
export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}

// For EUR
export function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`
}

// For other currencies
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'  // Change to EUR, GBP, etc.
  }).format(price)
}
```

**Update menu prices accordingly:**

```typescript
// If using USD, adjust prices
{
  id: 1,
  name: 'Geprek Yuks',
  price: 1.67,  // Was 25000 IDR, now ~$1.67
  // ...
}
```

---

## 🖼️ Images

### Replace Emojis with Real Images

**1. Add images to `public/images/` folder**

```
public/
  images/
    geprek-yuks.jpg
    coto-dawata.jpg
    americano.jpg
```

**2. Update MenuItem interface in `context/CartContext.tsx`:**

```typescript
export interface MenuItem {
  id: number
  name: string
  price: number
  category: string
  description: string
  image: string  // Now holds image path
}
```

**3. Update menu items:**

```typescript
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Geprek Yuks',
    price: 25000,
    category: 'Main Course',
    description: 'Spicy smashed fried chicken',
    image: '/images/geprek-yuks.jpg'  // Image path
  },
]
```

**4. Update MenuGrid.tsx to use Image component:**

```typescript
import Image from 'next/image'

// Replace emoji div with:
<div className="relative w-full h-48">
  <Image 
    src={item.image} 
    alt={item.name}
    fill
    className="object-cover rounded-t-xl"
  />
</div>
```

---

## 🎨 Fonts

### Change Font Family

**Location: `app/layout.tsx`**

```typescript
import { Inter, Poppins, Roboto } from 'next/font/google'

// Change to your preferred font
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

// Apply to body
<body className={poppins.className}>
```

**Popular Font Combinations:**
- **Modern**: Inter + Roboto
- **Elegant**: Playfair Display + Source Sans Pro
- **Fun**: Fredoka + Open Sans
- **Professional**: Montserrat + Lato

---

## 📐 Layout

### Change Grid Columns

**Location: `components/MenuGrid.tsx`**

```typescript
// Current (1 / 2 / 3 columns)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Change to (1 / 3 / 4 columns)
className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"

// Or (1 / 1 / 2 columns for larger cards)
className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"
```

### Change Container Width

**Location: `app/page.tsx`**

```typescript
// Current
<div className="container mx-auto px-4 py-8">

// Wider
<div className="max-w-7xl mx-auto px-4 py-8">

// Narrower
<div className="max-w-4xl mx-auto px-4 py-8">
```

---

## 🔔 Notifications

### Customize Toast Messages

**Location: `components/Toast.tsx`**

**Change Duration:**

```typescript
const timer = setTimeout(() => {
  onClose()
}, 3000)  // Change to 2000, 5000, etc. (milliseconds)
```

**Change Colors:**

```typescript
const colors = {
  success: 'bg-green-500',   // Change to bg-blue-500, etc.
  error: 'bg-red-500',
  info: 'bg-primary-orange'
}
```

---

## ⚡ Performance

### Reduce 3D Particles (Faster Loading)

**Location: `components/Hero3D.tsx`**

```typescript
const particlesCount = 50  // Reduced from 100
```

### Disable 3D Animation (Much Faster)

**Replace Hero3D with simple header:**

```typescript
// In app/page.tsx, replace:
<Hero3D />

// With:
<div className="w-full h-[400px] bg-gradient-to-b from-primary-black-light to-primary-black flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-6xl font-bold text-primary-orange mb-4">
      Your Restaurant
    </h1>
    <p className="text-xl text-gray-300">
      Delicious Food Delivered
    </p>
  </div>
</div>
```

---

## 🌍 Language/Locale

### Change to English

**Location: `context/CartContext.tsx`**

```typescript
// Change date format
const formattedDate = new Intl.DateTimeFormat('en-US', {
  // Was 'id-ID'
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
}).format(date)
```

**Update all text labels throughout components**

---

## 🎯 Order Statuses

### Add Custom Statuses

**Location: `context/CartContext.tsx`**

```typescript
export interface Order {
  // ...
  status: 'pending' | 'completed' | 'cancelled' | 'preparing' | 'ready'
}
```

**Location: `components/OrderHistory.tsx`**

```typescript
const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'text-green-500 bg-green-500/20'
    case 'preparing':
      return 'text-blue-500 bg-blue-500/20'
    case 'ready':
      return 'text-purple-500 bg-purple-500/20'
    // ... add more
  }
}
```

---

## 📊 Add Discounts/Promotions

**Location: `components/MenuGrid.tsx`**

**Add discount field to menu items:**

```typescript
{
  id: 1,
  name: 'Geprek Yuks',
  price: 25000,
  originalPrice: 30000,  // NEW
  discount: 17,           // NEW (percentage)
  // ...
}
```

**Display discount badge:**

```typescript
{item.discount && (
  <span className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
    -{item.discount}%
  </span>
)}
```

---

## 🔧 Advanced Customizations

### Add User Authentication

Use NextAuth.js:
```bash
npm install next-auth
```

### Add Backend Database

Use Prisma + PostgreSQL:
```bash
npm install prisma @prisma/client
```

### Add Payment Gateway

Use Stripe:
```bash
npm install @stripe/stripe-js stripe
```

### Add Real-time Updates

Use Socket.io or Pusher:
```bash
npm install socket.io-client
```

---

## 📱 Social Media Links

**Add to bottom navigation or create footer:**

```typescript
const socialLinks = {
  instagram: 'https://instagram.com/yourrestaurant',
  facebook: 'https://facebook.com/yourrestaurant',
  whatsapp: 'https://wa.me/62xxxxxxxxxx',
}
```

---

## 💡 Quick Tips

1. **Test after every change** - Run `npm run dev` and check
2. **Keep backups** - Commit to Git frequently
3. **Mobile first** - Always test on mobile
4. **Performance** - Use Lighthouse to check performance
5. **Accessibility** - Ensure good contrast and keyboard navigation

---

## 🆘 Need Help?

- Check documentation files
- Read component comments
- Use browser DevTools (F12)
- Search online for specific issues

---

**Happy Customizing! 🎨✨**
