import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import ProductHeader from './components/ProductHeader'
import RatingOverview from './components/RatingOverview'
import ReviewFilters from './components/ReviewFilters'
import ReviewCard from './components/ReviewCard'
import LiveActivity from './components/LiveActivity'
import './App.css'

function App() {
  const [reviews, setReviews] = useState([])
  const [filteredReviews, setFilteredReviews] = useState([])
  const [displayedReviews, setDisplayedReviews] = useState([])
  const [reviewsToShow, setReviewsToShow] = useState(6)
  const [liveCount, setLiveCount] = useState(2847)
  const [recentPurchases, setRecentPurchases] = useState([])
  const [loading, setLoading] = useState(false)

  // Sample review data for Maskabutters
  const sampleReviews = [
    {
      name: "Ravi Kumar",
      rating: 5,
      text: "Yaar, ye peanut butter ekdum mast hai! Bachpan se peanut butter khata hun lekin iska taste bilkul alag hai. Chatpata flavor mein jo masala hai na, woh perfect hai. Roz subah bread pe lagake khata hun.",
      verified: true,
      location: "Mumbai",
      date: "2 days ago",
      product: "Maska Chatpata Peanut Butter",
      helpfulCount: 24
    },
    {
      name: "Sneha Agarwal",
      rating: 5,
      text: "Honestly, I was skeptical about trying a new brand but my friend recommended this. OMG! The texture is so creamy and the taste is amazing. My kids love it and I feel good giving them something natural.",
      verified: true,
      location: "Delhi",
      date: "1 week ago",
      product: "Maska Classic Smooth",
      helpfulCount: 18
    },
    {
      name: "Amit Sharma",
      rating: 4,
      text: "Bhai, taste toh accha hai but thoda expensive lagta hai. Quality wise koi complaint nahi hai. Packaging bhi solid hai. Agar price thoda kam hota toh 5 star deta.",
      verified: true,
      location: "Pune",
      date: "3 days ago",
      product: "Maska Crunchy Delight",
      helpfulCount: 12
    },
    {
      name: "Priya Menon",
      rating: 5,
      text: "This is hands down the best peanut butter I've had! The crunchy bits are perfect - not too big, not too small. I'm a fitness freak and this fits perfectly in my diet. No artificial stuff, just pure goodness!",
      verified: true,
      location: "Bangalore",
      date: "5 days ago",
      product: "Maska Chatpata Peanut Butter",
      helpfulCount: 31
    },
    {
      name: "Deepak Joshi",
      rating: 5,
      text: "Meri wife ne order kiya tha, maine socha kya farak padega. Lekin yaar, ye toh kamaal ka hai! Smooth texture, natural taste. Ab toh sirf yahi lenge. Highly recommended!",
      verified: true,
      location: "Jaipur",
      date: "1 day ago",
      product: "Maska Natural Smooth",
      helpfulCount: 8
    },
    {
      name: "Kavitha Reddy",
      rating: 4,
      text: "Good product overall. Taste is nice and my daughter loves it. Delivery was quick too. Only thing is I wish they had more flavors. But quality wise, no complaints at all.",
      verified: true,
      location: "Hyderabad",
      date: "4 days ago",
      product: "Maska Classic Crunchy",
      helpfulCount: 15
    },
    {
      name: "Rohit Gupta",
      rating: 5,
      text: "Bro, this is THE peanut butter! Maine bahut brands try kiye hain but ye sabse best hai. Chatpata wala toh next level hai. Gym ke baad protein shake mein mix karta hun, taste ekdum perfect!",
      verified: true,
      location: "Noida",
      date: "6 days ago",
      product: "Maska Chatpata Peanut Butter",
      helpfulCount: 27
    },
    {
      name: "Ananya Singh",
      rating: 5,
      text: "I'm so happy I found this brand! Finally a peanut butter that doesn't have tons of sugar and preservatives. My nutritionist recommended natural options and this is perfect. The taste is authentic and fresh.",
      verified: true,
      location: "Chennai",
      date: "1 week ago",
      product: "Maska Protein Plus",
      helpfulCount: 22
    }
  ]

  const recentPurchaseData = [
    { name: "Priya S.", location: "Mumbai", time: "2 min ago", product: "Chatpata Peanut Butter" },
    { name: "Rahul K.", location: "Delhi", time: "5 min ago", product: "Classic Smooth" },
    { name: "Anita M.", location: "Bangalore", time: "8 min ago", product: "Crunchy Delight" },
    { name: "Vikash P.", location: "Pune", time: "12 min ago", product: "Natural Smooth" },
    { name: "Sneha R.", location: "Chennai", time: "15 min ago", product: "Protein Plus" }
  ]

  // Initialize data
  useEffect(() => {
    setReviews(sampleReviews)
    setFilteredReviews(sampleReviews)
    setDisplayedReviews(sampleReviews.slice(0, reviewsToShow))
    setRecentPurchases(recentPurchaseData)
  }, [])

  // Update displayed reviews when filtered reviews or reviewsToShow changes
  useEffect(() => {
    setDisplayedReviews(filteredReviews.slice(0, reviewsToShow))
  }, [filteredReviews, reviewsToShow])

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3))
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleFilterChange = (filter) => {
    let filtered = [...reviews]
    
    switch(filter) {
      case '5':
        filtered = reviews.filter(review => review.rating === 5)
        break
      case '4':
        filtered = reviews.filter(review => review.rating === 4)
        break
      case '3':
        filtered = reviews.filter(review => review.rating === 3)
        break
      case 'verified':
        filtered = reviews.filter(review => review.verified)
        break
      default:
        filtered = reviews
    }
    
    setFilteredReviews(filtered)
    setReviewsToShow(6) // Reset to initial count when filtering
  }

  const handleSortChange = (sort) => {
    let sorted = [...filteredReviews]
    
    switch(sort) {
      case 'oldest':
        sorted = sorted.reverse()
        break
      case 'highest':
        sorted = sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'lowest':
        sorted = sorted.sort((a, b) => a.rating - b.rating)
        break
      case 'helpful':
        sorted = sorted.sort((a, b) => (b.helpfulCount || 0) - (a.helpfulCount || 0))
        break
      default: // newest
        // Keep original order (newest first)
        break
    }
    
    setFilteredReviews(sorted)
  }

  const handleLoadMore = () => {
    setLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setReviewsToShow(prev => prev + 6)
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Product Header */}
      <ProductHeader />
      
      {/* Main Content */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Rating Overview */}
          <RatingOverview reviews={reviews} totalCustomers={liveCount} />
          
          {/* Review Filters */}
          <ReviewFilters 
            onFilterChange={handleFilterChange}
            onSortChange={handleSortChange}
            totalReviews={reviews.length}
          />
          
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {displayedReviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index} />
            ))}
          </div>
          
          {/* Load More Button */}
          {displayedReviews.length < filteredReviews.length && (
            <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center gap-2 mx-auto"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </>
                ) : (
                  `Load More Reviews (${filteredReviews.length - displayedReviews.length} remaining)`
                )}
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Live Activity Widget */}
      <LiveActivity recentPurchases={recentPurchases} />
    </div>
  )
}

export default App