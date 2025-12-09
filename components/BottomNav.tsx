'use client'

import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'

interface BottomNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  onCartClick: () => void
}

export default function BottomNav({ activeTab, setActiveTab, onCartClick }: BottomNavProps) {
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  const navItems = [
    { id: 'menu', label: 'Menu', icon: '🍽️' },
    { id: 'orders', label: 'Orders', icon: '📋' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t-2 border-primary-orange/30 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-around py-4">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center space-y-1 px-6 py-2 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? 'text-primary-orange bg-primary-orange/20 scale-110'
                  : 'text-gray-600 dark:text-gray-400 hover:text-primary-orange hover:bg-primary-orange/10'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </motion.button>
          ))}
          
          {/* Cart Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onCartClick}
            className="relative flex flex-col items-center space-y-1 px-6 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-orange transition-all duration-200"
          >
            <span className="text-2xl">🛒</span>
            <span className="text-sm font-medium">Cart</span>
            
            {cartCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-primary-orange text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-glow"
              >
                {cartCount}
              </motion.div>
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  )
}
