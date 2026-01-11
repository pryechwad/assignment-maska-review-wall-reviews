import { useState } from 'react'

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-orange-600">🥜 Maska</div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Reviews</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
          </div>

          {/* Cart & Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9m-9 0V19a2 2 0 002 2h7a2 2 0 002-2v-.5" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar