const ProductHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
                🥜 Premium Quality
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium animate-fade-in">
                🌿 100% Natural
              </span>
              <span className="bg-green-500/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                ✨ Best Seller
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Maska Peanut Butter
            </h1>
            <p className="text-2xl mb-8 text-orange-100 animate-slide-up">
              Chatpata - The Perfect Blend of Spices & Peanuts
            </p>
            
            <div className="flex items-center gap-6 mb-8 animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-300 text-2xl animate-bounce" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                  ))}
                </div>
                <span className="text-2xl font-bold">4.8</span>
                <span className="text-orange-200">(2,847 reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="text-4xl font-bold animate-pulse">₹299</div>
              <div className="text-xl text-orange-200 line-through">₹399</div>
              <div className="bg-green-500 text-white px-4 py-2 rounded-full text-lg font-bold animate-bounce">
                25% OFF
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-white text-orange-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in">
                🛒 Add to Cart
              </button>
              <button className="bg-orange-700 text-white px-6 py-3 rounded-full text-lg font-bold hover:bg-orange-800 transform hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in">
                💳 Buy Now
              </button>
            </div>
            
            <div className="mt-4 flex items-center gap-2 text-orange-100">
              <span className="text-sm">🚚 Free Delivery on orders above ₹299</span>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-float">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://www.maskabutters.in/cdn/shop/files/1stimage_1e3b7bf3-37ad-4054-8245-4b329d9d2eeb.jpg?v=1751094997&width=823" 
                alt="Maska Chatpata Peanut Butter"
                className="w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </div>
  )
}

export default ProductHeader