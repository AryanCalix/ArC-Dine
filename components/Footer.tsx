'use client'

export default function Footer() {
  return (
    <footer className="relative z-10 py-6 px-4 text-center bg-black/50 backdrop-blur-sm border-t-2 border-primary-orange/20 transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-white/80 text-sm mb-2">
          Made with ❤️ by{' '}
          <span className="text-primary-orange font-bold">AryanCalix</span>
        </p>
        <p className="text-white/60 text-xs">
          © {new Date().getFullYear()} ArC Group. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center gap-4 text-2xl">
          <span className="hover:scale-110 transition-transform cursor-pointer">🍗</span>
          <span className="hover:scale-110 transition-transform cursor-pointer">🍜</span>
          <span className="hover:scale-110 transition-transform cursor-pointer">☕</span>
          <span className="hover:scale-110 transition-transform cursor-pointer">🥛</span>
          <span className="hover:scale-110 transition-transform cursor-pointer">🍲</span>
        </div>
      </div>
    </footer>
  )
}
