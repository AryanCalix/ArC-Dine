'use client'

import { motion } from 'framer-motion'

interface StatsCardProps {
  icon: string
  label: string
  value: string | number
  color?: string
}

export default function StatsCard({ icon, label, value, color = 'primary-orange' }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-primary-black-light border-2 border-${color}/20 rounded-xl p-6 text-center hover:border-${color} transition-all duration-300`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className={`text-3xl font-bold text-${color} mb-1`}>{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )
}
