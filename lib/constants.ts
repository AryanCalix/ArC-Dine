/**
 * Application constants
 */

export const APP_NAME = 'Restaurant Menu'
export const APP_DESCRIPTION = 'Delicious food at your fingertips'

// Storage keys
export const STORAGE_KEYS = {
  CART: 'cart',
  ORDERS: 'orders',
  PREFERENCES: 'user_preferences'
} as const

// Order status
export const ORDER_STATUS = {
  PENDING: 'pending',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
} as const

// Categories
export const CATEGORIES = {
  MAIN_COURSE: 'Main Course',
  BEVERAGE: 'Beverage',
  DESSERT: 'Dessert',
  APPETIZER: 'Appetizer'
} as const

// Price range
export const PRICE_RANGE = {
  MIN: 0,
  MAX: 100000
} as const

// Animation durations (ms)
export const ANIMATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500
} as const

// Breakpoints (px)
export const BREAKPOINTS = {
  MOBILE: 640,
  TABLET: 768,
  DESKTOP: 1024,
  WIDE: 1280
} as const

// Theme colors (matches tailwind.config.js)
export const COLORS = {
  ORANGE: '#FF6B00',
  ORANGE_DARK: '#CC5500',
  BLACK: '#0A0A0A',
  BLACK_LIGHT: '#1A1A1A'
} as const

// Social media links (for future use)
export const SOCIAL_LINKS = {
  INSTAGRAM: '',
  FACEBOOK: '',
  TWITTER: '',
  WHATSAPP: ''
} as const

// Contact info (for future use)
export const CONTACT_INFO = {
  PHONE: '+62 xxx xxx xxx',
  EMAIL: 'info@restaurant.com',
  ADDRESS: 'Your Restaurant Address'
} as const
