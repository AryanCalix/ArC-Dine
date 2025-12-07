'use client'

import { motion } from 'framer-motion'
import { useCart } from '@/context/CartContext'

export default function OrderHistory() {
  const { orders } = useCart()

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 bg-green-500/20'
      case 'pending':
        return 'text-yellow-500 bg-yellow-500/20'
      case 'cancelled':
        return 'text-red-500 bg-red-500/20'
      default:
        return 'text-gray-500 bg-gray-500/20'
    }
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <div className="text-8xl mb-6 animate-float">📋</div>
        <h2 className="text-3xl font-bold text-primary-orange mb-4">
          No Orders Yet
        </h2>
        <p className="text-gray-600 text-lg font-semibold">
          Your order history will appear here after you make your first purchase
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
        📋 Order History
      </h2>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl border-2 border-primary-orange/30 overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            {/* Order Header */}
            <div className="p-6 border-b border-primary-orange/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Order {order.id}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              <p className="text-gray-600 text-sm">
                {formatDate(order.timestamp)}
              </p>
            </div>

            {/* Order Items */}
            <div className="p-6 space-y-3">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.image}</span>
                    <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Rp {item.price.toLocaleString('id-ID')} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-primary-orange">
                    Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                  </p>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="p-6 bg-gradient-to-b from-white to-orange-50 border-t-2 border-primary-orange/30">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-primary-orange">
                  Rp {order.total.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
