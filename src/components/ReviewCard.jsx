import { useState } from 'react'

const ReviewCard = ({ review, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [helpful, setHelpful] = useState(review.helpfulCount || 0)
  const [hasVoted, setHasVoted] = useState(false)

  const handleHelpful = () => {
    if (!hasVoted) {
      setHelpful(helpful + 1)
      setHasVoted(true)
    }
  }

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ⭐
        </span>
      ))}
      <span className="ml-2 text-sm font-medium text-gray-600">({rating}/5)</span>
    </div>
  )

  const shouldTruncate = review.text.length > 150
  const displayText = isExpanded ? review.text : (shouldTruncate ? review.text.substring(0, 150) + '...' : review.text)

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg">
          {review.name.charAt(0)}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
            {review.verified && (
              <span className="text-xs text-green-700 bg-green-100 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                ✅ Verified Purchase
              </span>
            )}
          </div>
          
          <StarRating rating={review.rating} />
          
          {review.product && (
            <p className="text-sm text-orange-600 mb-3 font-medium bg-orange-50 px-3 py-1 rounded-full inline-block">
              📦 {review.product}
            </p>
          )}
          
          <div className="bg-gray-50 rounded-xl p-4 mb-4">
            <p className="text-gray-700 leading-relaxed">
              {displayText}
            </p>
          </div>
          
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-orange-600 hover:text-orange-700 font-medium mb-4 flex items-center gap-1 transition-colors duration-200"
            >
              {isExpanded ? '📖 Show less' : '📚 Read more'}
            </button>
          )}
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="bg-gray-100 px-3 py-1 rounded-full">📍 {review.location}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">📅 {review.date}</span>
            </div>
            <button
              onClick={handleHelpful}
              disabled={hasVoted}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                hasVoted 
                  ? 'bg-green-100 text-green-700 cursor-not-allowed' 
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              👍 Helpful ({helpful})
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard