import { useState, useEffect } from 'react'

const RatingOverview = ({ reviews, totalCustomers }) => {
  const [animatedCount, setAnimatedCount] = useState(0)
  const [animatedReviewCount, setAnimatedReviewCount] = useState(0)
  
  // Counting animation effect for total customers
  useEffect(() => {
    if (totalCustomers) {
      let start = 0
      const end = totalCustomers
      const duration = 2000 // 2 seconds
      const increment = end / (duration / 16) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setAnimatedCount(end)
          clearInterval(timer)
        } else {
          setAnimatedCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [totalCustomers])
  
  // Counting animation effect for reviews count
  useEffect(() => {
    if (reviews.length) {
      let start = 0
      const end = reviews.length
      const duration = 1500 // 1.5 seconds
      const increment = end / (duration / 16) // 60fps
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setAnimatedReviewCount(end)
          clearInterval(timer)
        } else {
          setAnimatedReviewCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [reviews.length])
  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }))

  const StarRating = ({ rating, size = 'text-xl' }) => (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`${size} transition-all duration-300 hover:scale-125 ${
            i < Math.floor(rating) ? 'text-yellow-400 animate-pulse' : 
            i < rating ? 'text-yellow-300' : 'text-gray-300'
          }`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          ⭐
        </span>
      ))}
    </div>
  )

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in border border-gray-100 hover:shadow-xl transition-all duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Customer Reviews & Ratings</h2>
        <p className="text-gray-600">What our customers are saying about Maska Peanut Butter</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Overall Rating */}
        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
            <div className="text-6xl font-bold text-orange-600 animate-bounce mb-4">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={averageRating} size="text-2xl" />
            <p className="text-gray-700 mt-3 font-medium">Overall Rating</p>
            <p className="text-sm text-gray-500">Based on {animatedReviewCount} reviews</p>
            <div className="mt-4 bg-orange-100 rounded-lg p-3">
              <p className="text-orange-800 font-medium text-sm">
                {animatedCount?.toLocaleString()} happy customers!
              </p>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Rating Breakdown</h3>
          <div className="space-y-4">
            {ratingDistribution.map(({ rating, count, percentage }, index) => (
              <div key={rating} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="text-sm font-bold text-gray-700 w-12 flex items-center gap-1">
                  {rating} ⭐
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${percentage}%`, animationDelay: `${index * 0.2}s` }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-16 text-right font-medium">
                  {count} ({percentage.toFixed(0)}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-200">
        <div className="text-center bg-green-50 rounded-xl p-4 animate-bounce" style={{ animationDelay: '0.1s' }}>
          <div className="text-2xl font-bold text-green-600">
            {Math.round((reviews.filter(r => r.rating >= 4).length / reviews.length) * 100)}%
          </div>
          <div className="text-sm text-green-700 font-medium">Recommend</div>
        </div>
        <div className="text-center bg-blue-50 rounded-xl p-4 animate-bounce" style={{ animationDelay: '0.2s' }}>
          <div className="text-2xl font-bold text-blue-600">
            {reviews.filter(r => r.verified).length}
          </div>
          <div className="text-sm text-blue-700 font-medium">Verified</div>
        </div>
        <div className="text-center bg-purple-50 rounded-xl p-4 animate-bounce" style={{ animationDelay: '0.3s' }}>
          <div className="text-2xl font-bold text-purple-600">
            {new Set(reviews.map(r => r.location)).size}
          </div>
          <div className="text-sm text-purple-700 font-medium">Cities</div>
        </div>
        <div className="text-center bg-orange-50 rounded-xl p-4 animate-bounce" style={{ animationDelay: '0.4s' }}>
          <div className="text-2xl font-bold text-orange-600">
            4.8
          </div>
          <div className="text-sm text-orange-700 font-medium">Avg Rating</div>
        </div>
      </div>
    </div>
  )
}

export default RatingOverview