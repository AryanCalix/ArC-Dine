/**
 * Global type definitions
 */

export interface MenuItem {
  id: number
  name: string
  price: number
  category: string
  description: string
  image: string
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  timestamp: Date
  status: 'pending' | 'completed' | 'cancelled'
}

export type OrderStatus = 'pending' | 'completed' | 'cancelled'

export type ToastType = 'success' | 'error' | 'info'

export interface UserPreferences {
  theme?: 'light' | 'dark'
  notifications?: boolean
  language?: 'en' | 'id'
}
