'use client'

import { useState, Suspense } from 'react'
import MenuGrid from '@/components/MenuGrid'
import BottomNav from '@/components/BottomNav'
import CartModal from '@/components/CartModal'
import Hero3D from '@/components/Hero3D'
import OrderHistory from '@/components/OrderHistory'
import LoadingSpinner from '@/components/LoadingSpinner'
import Toast from '@/components/Toast'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarkModeToggle'
import { CartProvider } from '@/context/CartContext'
import { useToast } from '@/hooks/useToast'

function HomeContent() {
  const [activeTab, setActiveTab] = useState('menu')
  const [showCart, setShowCart] = useState(false)
  const { toast, showToast, hideToast } = useToast()

  return (
    <>
      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      
      <main className="min-h-screen pb-24 relative z-10">
        {/* Hero Section with 3D Animation */}
        <Suspense fallback={<LoadingSpinner />}>
          <Hero3D />
        </Suspense>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 min-h-[60vh]">
          {activeTab === 'menu' && (
            <MenuGrid 
              onOpenCart={() => setShowCart(true)} 
              onAddToCart={(itemName) => showToast(`${itemName} added to cart!`, 'success')}
            />
          )}
          {activeTab === 'orders' && <OrderHistory />}
        </div>

        {/* Footer */}
        <Footer />

        {/* Bottom Navigation */}
        <BottomNav 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onCartClick={() => setShowCart(true)} 
        />

        {/* Cart Modal */}
        <CartModal 
          isOpen={showCart} 
          onClose={() => setShowCart(false)}
          onCheckoutSuccess={() => {
            showToast('Order placed successfully!', 'success')
            setActiveTab('orders')
          }}
        />
      </main>

      {/* Toast Notifications */}
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </>
  )
}

export default function Home() {
  return (
    <CartProvider>
      <HomeContent />
    </CartProvider>
  )
}
