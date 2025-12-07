'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface MenuItem3DProps {
  emoji: string
  itemId: number
}

export default function MenuItem3D({ emoji, itemId }: MenuItem3DProps) {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleClick = () => {
    setIsSpinning(true)
    setTimeout(() => setIsSpinning(false), 800)
  }

  return (
    <motion.div
      className="relative inline-block cursor-pointer select-none"
      onClick={handleClick}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="text-8xl"
        style={{
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 10px 20px rgba(255, 107, 0, 0.4))',
        }}
        animate={{
          rotateY: isSpinning ? [0, 360] : 0,
          y: [0, -15, 0],
        }}
        transition={{
          rotateY: { 
            duration: 0.8, 
            ease: [0.68, -0.55, 0.265, 1.55],
          },
          y: { 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        whileHover={{ 
          scale: 1.2,
          rotateZ: [-5, 5, -5],
          filter: 'drop-shadow(0 15px 30px rgba(255, 107, 0, 0.8))',
          transition: { 
            rotateZ: { duration: 0.5, repeat: Infinity },
            scale: { duration: 0.2 }
          }
        }}
        whileTap={{ 
          scale: 0.9,
          rotateZ: 15,
        }}
      >
        <motion.span
          style={{
            display: 'inline-block',
            textShadow: '0 8px 15px rgba(0, 0, 0, 0.6)',
          }}
        >
          {emoji}
        </motion.span>
      </motion.div>
      
      {/* 3D Shadow/Reflection */}
      <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-8xl opacity-20 blur-sm"
        style={{
          transform: 'translateX(-50%) scaleY(-0.3) translateY(100%)',
          filter: 'blur(10px)',
        }}
      >
        {emoji}
      </div>
    </motion.div>
  )
}
