import { useState, useEffect } from 'react'

const LiveActivity = ({ recentPurchases }) => {
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % recentPurchases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [recentPurchases.length])

  const activities = [
    { icon: '🛒', text: 'Someone just ordered', color: 'bg-green-100 text-green-800' },
    { icon: '⭐', text: 'New 5-star review', color: 'bg-yellow-100 text-yellow-800' },
    { icon: '🚚', text: 'Order shipped', color: 'bg-blue-100 text-blue-800' },
    { icon: '💝', text: 'Repeat customer', color: 'bg-purple-100 text-purple-800' }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm animate-slide-up">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 transform transition-all duration-500 hover:scale-105">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-gray-700">🔥 Live Activity</span>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 text-sm transition-colors duration-200"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-3">
          {recentPurchases.slice(0, 3).map((purchase, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 transform ${
                index === currentActivity 
                  ? 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 scale-105' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="text-2xl animate-bounce">{activities[index % activities.length].icon}</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">
                  {purchase.name} from {purchase.location}
                </p>
                <p className="text-xs text-gray-600">
                  {activities[index % activities.length].text} • {purchase.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1">
              🔄 Updated just now
            </span>
            <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveActivity