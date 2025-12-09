'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useAuth } from './AuthContext'

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

interface CartContextType {
  cart: CartItem[]
  orders: Order[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (itemId: number) => void
  updateQuantity: (itemId: number, quantity: number) => void
  clearCart: () => void
  checkout: () => void
  deleteOrder: (orderId: string) => void
  cancelOrder: (orderId: string) => void
  getCartTotal: () => number
  getCartCount: () => number
  loading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const { user } = useAuth()

  // Load cart and orders from Supabase when user changes
  useEffect(() => {
    if (user) {
      loadCartFromSupabase()
      loadOrdersFromSupabase()
    } else {
      setCart([])
      setOrders([])
      setLoading(false)
    }
  }, [user])

  // Load cart from Supabase
  const loadCartFromSupabase = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })

      if (error) throw error

      if (data) {
        const cartItems: CartItem[] = data.map(item => ({
          id: item.menu_item_id,
          name: item.menu_item_name,
          price: item.menu_item_price,
          category: item.menu_item_category,
          description: item.menu_item_description,
          image: item.menu_item_image,
          quantity: item.quantity
        }))
        setCart(cartItems)
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    } finally {
      setLoading(false)
    }
  }

  // Load orders from Supabase
  const loadOrdersFromSupabase = async () => {
    if (!user) return

    try {
      const { data: ordersData, error: ordersError } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (ordersError) throw ordersError

      if (ordersData) {
        const ordersWithItems = await Promise.all(
          ordersData.map(async (order) => {
            const { data: itemsData, error: itemsError } = await supabase
              .from('order_items')
              .select('*')
              .eq('order_id', order.id)

            if (itemsError) throw itemsError

            const items: CartItem[] = itemsData?.map(item => ({
              id: item.menu_item_id,
              name: item.menu_item_name,
              price: item.menu_item_price,
              category: item.menu_item_category,
              description: item.menu_item_description,
              image: item.menu_item_image,
              quantity: item.quantity
            })) || []

            return {
              id: order.id,
              items,
              total: order.total,
              timestamp: new Date(order.created_at),
              status: order.status
            } as Order
          })
        )

        setOrders(ordersWithItems)
      }
    } catch (error) {
      console.error('Error loading orders:', error)
    }
  }

  const addToCart = async (item: MenuItem) => {
    if (!user) return

    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    
    try {
      if (existingItem) {
        // Update quantity in Supabase
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItem.quantity + 1 })
          .eq('user_id', user.id)
          .eq('menu_item_id', item.id)

        if (error) throw error

        // Update local state
        setCart(prevCart =>
          prevCart.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        )
      } else {
        // Insert new item in Supabase
        const { error } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            menu_item_id: item.id,
            menu_item_name: item.name,
            menu_item_price: item.price,
            menu_item_category: item.category,
            menu_item_description: item.description,
            menu_item_image: item.image,
            quantity: 1
          })

        if (error) throw error

        // Update local state
        setCart(prevCart => [...prevCart, { ...item, quantity: 1 }])
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  const removeFromCart = async (itemId: number) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)
        .eq('menu_item_id', itemId)

      if (error) throw error

      setCart(prevCart => prevCart.filter(item => item.id !== itemId))
    } catch (error) {
      console.error('Error removing from cart:', error)
    }
  }

  const updateQuantity = async (itemId: number, quantity: number) => {
    if (!user) return

    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    
    try {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('user_id', user.id)
        .eq('menu_item_id', itemId)

      if (error) throw error

      setCart(prevCart =>
        prevCart.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      )
    } catch (error) {
      console.error('Error updating quantity:', error)
    }
  }

  const clearCart = async () => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)

      if (error) throw error

      setCart([])
    } catch (error) {
      console.error('Error clearing cart:', error)
    }
  }

  const checkout = async () => {
    if (!user || cart.length === 0) return

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    const total = getCartTotal()

    try {
      // Create order in Supabase
      const { error: orderError } = await supabase
        .from('orders')
        .insert({
          id: orderId,
          user_id: user.id,
          total,
          status: 'pending'
        })

      if (orderError) throw orderError

      // Create order items
      const orderItems = cart.map(item => ({
        order_id: orderId,
        menu_item_id: item.id,
        menu_item_name: item.name,
        menu_item_price: item.price,
        menu_item_category: item.category,
        menu_item_description: item.description,
        menu_item_image: item.image,
        quantity: item.quantity
      }))

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)

      if (itemsError) throw itemsError

      // Create local order object
      const newOrder: Order = {
        id: orderId,
        items: [...cart],
        total,
        timestamp: new Date(),
        status: 'pending'
      }

      // Update local state
      setOrders(prevOrders => [newOrder, ...prevOrders])
      
      // Clear cart
      await clearCart()
      
      console.log('Order created:', newOrder)
    } catch (error) {
      console.error('Error creating order:', error)
    }
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0)
  }

  const deleteOrder = async (orderId: string) => {
    if (!user) return

    try {
      // Delete order (cascade will delete order_items automatically)
      const { error } = await supabase
        .from('orders')
        .delete()
        .eq('id', orderId)
        .eq('user_id', user.id)

      if (error) throw error

      setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId))
    } catch (error) {
      console.error('Error deleting order:', error)
    }
  }

  const cancelOrder = async (orderId: string) => {
    if (!user) return

    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: 'cancelled' })
        .eq('id', orderId)
        .eq('user_id', user.id)

      if (error) throw error

      setOrders(prevOrders =>
        prevOrders.map(order =>
          order.id === orderId ? { ...order, status: 'cancelled' as const } : order
        )
      )
    } catch (error) {
      console.error('Error cancelling order:', error)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
        deleteOrder,
        cancelOrder,
        getCartTotal,
        getCartCount,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
