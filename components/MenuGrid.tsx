'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart, MenuItem } from '@/context/CartContext'
import MenuItem3D from './MenuItem3D'

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Geprek Yuks',
    price: 15000,
    category: 'Main Course',
    description: 'Spicy smashed fried chicken with special sambal',
    image: '🍗'
  },
  {
    id: 2,
    name: 'Coto Dawata',
    price: 13000,
    category: 'Main Course',
    description: 'Traditional Indonesian beef soup with spices',
    image: '🍲'
  },
  {
    id: 3,
    name: 'Americano',
    price: 15000,
    category: 'Beverage',
    description: 'Strong espresso diluted with hot water',
    image: '☕'
  },
  {
    id: 4,
    name: 'Mie Gacoan',
    price: 17000,
    category: 'Main Course',
    description: 'Spicy noodles with savory broth',
    image: '🍜'
  },
  {
    id: 5,
    name: 'Milk (100% Milk)',
    price: 12000,
    category: 'Beverage',
    description: 'Pure fresh milk, 100% natural',
    image: '🥛'
  }
]

interface MenuGridProps {
  onOpenCart: () => void
  onAddToCart?: (itemName: string) => void
}

export default function MenuGrid({ onOpenCart, onAddToCart }: MenuGridProps) {
  const { addToCart } = useCart()
  const [spinningItems, setSpinningItems] = useState<number[]>([])

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item)
    if (onAddToCart) {
      onAddToCart(item.name)
    }
  }

  const handleItemClick = (itemId: number) => {
    // Add item to spinning list
    setSpinningItems(prev => [...prev, itemId])
    
    // Remove from spinning list after animation
    setTimeout(() => {
      setSpinningItems(prev => prev.filter(id => id !== itemId))
    }, 600)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-2">
        <p className="text-sm text-white/60 font-semibold tracking-wide">
          Created by <span className="text-white">AryanCalix</span>
        </p>
      </div>
      <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-colors duration-300">
        Our Menu
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-primary-orange/30 hover:border-primary-orange transition-all duration-300 hover:shadow-2xl hover:shadow-primary-orange/40 hover:scale-105"
          >
            <div className="p-6">
              {/* Food Emoji Icon - 3D with Spin Animation */}
              <div className="mb-4 text-center">
                <MenuItem3D emoji={item.image} itemId={item.id} />
              </div>
              
              {/* Item Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.name}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-primary-orange/20 text-primary-orange text-xs rounded-full font-semibold">
                    {item.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm min-h-[40px]">
                  {item.description}
                </p>
                
                {/* Price and Button with better spacing */}
                <div className="pt-4 space-y-3">
                  <div className="text-2xl font-bold text-primary-orange">
                    Rp {item.price.toLocaleString('id-ID')}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(item)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-lg font-bold hover:from-orange-600 hover:to-primary-orange transition-all duration-300 shadow-lg hover:shadow-primary-orange/60"
                  >
                    🛒 Add to Cart
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
