import { useState } from 'react'

const ReviewFilters = ({ onFilterChange, onSortChange, totalReviews }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeSort, setActiveSort] = useState('newest')

  const filters = [
    { id: 'all', label: 'All Reviews', count: totalReviews, icon: '📝' },
    { id: '5', label: '5 Stars', count: Math.floor(totalReviews * 0.7), icon: '⭐' },
    { id: '4', label: '4 Stars', count: Math.floor(totalReviews * 0.2), icon: '⭐' },
    { id: '3', label: '3 Stars', count: Math.floor(totalReviews * 0.08), icon: '⭐' },
    { id: 'verified', label: 'Verified Only', count: Math.floor(totalReviews * 0.85), icon: '✅' }
  ]

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'highest', label: 'Highest Rating' },
    { id: 'lowest', label: 'Lowest Rating' },
    { id: 'helpful', label: 'Most Helpful' }
  ]

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  const handleSortChange = (sortId) => {
    setActiveSort(sortId)
    onSortChange(sortId)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Browse Reviews</h3>
        <p className="text-gray-600">Filter and sort to find the reviews you're looking for</p>
      </div>

      <div className="space-y-6">
        {/* Filters */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Filter Reviews
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => handleFilterClick(filter.id)}
                className={`p-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-lg mb-1">{filter.icon}</div>
                <div className="text-xs font-medium">{filter.label}</div>
                <div className="text-xs opacity-75">({filter.count})</div>
              </button>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Sort By
          </h4>
          <div className="flex flex-wrap gap-2">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSortChange(option.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeSort === option.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filter Display */}
      {activeFilter !== 'all' && (
        <div className="mt-6 pt-4 border-t border-gray-200 animate-slide-up">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-gray-600 font-medium">Currently showing:</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              {filters.find(f => f.id === activeFilter)?.label}
              <button
                onClick={() => handleFilterClick('all')}
                className="ml-2 text-orange-600 hover:text-orange-800 font-bold"
              >
                ×
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewFilters