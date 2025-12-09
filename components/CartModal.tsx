'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  onCheckoutSuccess?: () => void
}

export default function CartModal({ isOpen, onClose, onCheckoutSuccess }: CartModalProps) {
  const { cart, updateQuantity, removeFromCart, getCartTotal, checkout, clearCart } = useCart()

  const handleCheckout = () => {
    if (cart.length === 0) return
    
    checkout()
    onClose()
    
    if (onCheckoutSuccess) {
      onCheckoutSuccess()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t-2 border-primary-orange rounded-t-3xl z-50 max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-primary-orange/20">
              <h2 className="text-2xl font-bold text-gray-900">🛒 Your Cart</h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 text-2xl transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-600 text-lg font-semibold">Your cart is empty</p>
                  <p className="text-gray-500 text-sm mt-2">Add some delicious items!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex items-center gap-4 bg-white border-2 border-primary-orange/30 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="text-4xl">{item.image}</div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="text-primary-orange font-bold text-lg">
                          Rp {item.price.toLocaleString('id-ID')}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-bold text-gray-900">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition-colors font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700 text-xl transition-colors"
                      >
                        🗑️
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t-2 border-primary-orange/30 bg-gradient-to-b from-white to-orange-50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-3xl font-bold text-primary-orange drop-shadow-sm">
                    Rp {getCartTotal().toLocaleString('id-ID')}
                  </span>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearCart}
                    className="flex-1 py-3 bg-red-500/20 text-red-600 rounded-lg font-bold hover:bg-red-500/30 transition-colors border-2 border-red-500/30"
                  >
                    🗑️ Clear
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="flex-1 py-3 bg-gradient-to-r from-primary-orange to-orange-600 text-white rounded-lg font-bold hover:from-orange-600 hover:to-primary-orange transition-all shadow-lg hover:shadow-xl"
                  >
                    ✅ Checkout
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
