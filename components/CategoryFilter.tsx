'use client'

import { motion } from 'framer-motion'

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeCategory === category
              ? 'bg-primary-orange text-white shadow-lg shadow-primary-orange/40 scale-105'
              : 'bg-white/90 text-gray-700 border-2 border-primary-orange/30 hover:border-primary-orange hover:text-primary-orange hover:scale-105 shadow-md'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  )
}
