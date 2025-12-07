'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = 'Search menu...' }: SearchBarProps) {
  const [query, setQuery] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative max-w-md mx-auto mb-8"
    >
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full px-6 py-3 pl-12 bg-white/90 border-2 border-primary-orange/30 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-orange transition-all duration-300 shadow-md focus:shadow-lg"
        />
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-gray-600">
          🔍
        </span>
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-900 transition-colors font-bold"
          >
            ✕
          </button>
        )}
      </div>
    </motion.div>
  )
}
