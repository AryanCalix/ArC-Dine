'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-black p-4">
      <div className="max-w-md w-full bg-primary-black-light border-2 border-red-500 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-400 mb-6">
          {error.message || 'An unexpected error occurred'}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-primary-orange text-white rounded-lg font-semibold hover:bg-primary-orange-dark transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-primary-black-light border-2 border-primary-orange text-primary-orange rounded-lg font-semibold hover:bg-primary-orange hover:text-white transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
}
