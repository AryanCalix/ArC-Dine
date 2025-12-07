import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-black p-4">
      <div className="max-w-md w-full text-center">
        <div className="text-8xl mb-6 animate-float">🍽️</div>
        <h1 className="text-6xl font-bold text-primary-orange mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary-orange text-white rounded-lg font-semibold hover:bg-primary-orange-dark transition-colors shadow-lg hover:shadow-primary-orange/50"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  )
}
