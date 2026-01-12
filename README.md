# 🥜 Maska Review Wall

A modern, interactive review display system built with React and Tailwind CSS for showcasing customer reviews with beautiful animations and real-time features.

## ✨ Features

### 🎨 Interactive UI Components
- **Animated Review Cards** with hover effects and smooth transitions
- **Rating Overview** with visual rating distribution charts
- **Live Activity Widget** showing real-time purchase notifications
- **Advanced Filtering System** with animated counters
- **Responsive Design** optimized for all devices

### 🚀 Animations & Effects
- **Counting Animations** for review counts and customer numbers
- **Staggered Loading** animations for cards and filters
- **Hover Effects** with scale, shadow, and color transitions
- **Floating Elements** and smooth page transitions
- **Real-time Counter Updates** for live engagement

### 📊 Review Management
- **Star Rating System** with interactive displays
- **Verified Purchase Badges** for authentic reviews
- **Helpful Vote System** with user interaction tracking
- **Location-based Review Display** showing customer cities
- **Product-specific Reviews** with categorization

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Emoji-based icon system
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Vite for fast development and building

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/maska-review-wall.git
   cd maska-review-wall
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
maska-review-wall/
├── src/
│   ├── components/
│   │   ├── LiveActivity.jsx      # Real-time purchase notifications
│   │   ├── Navbar.jsx           # Navigation header
│   │   ├── ProductHeader.jsx    # Product showcase section
│   │   ├── RatingOverview.jsx   # Rating statistics with animations
│   │   ├── ReviewCard.jsx       # Individual review display
│   │   └── ReviewFilters.jsx    # Filter and sort controls
│   ├── App.jsx                  # Main application component
│   ├── App.css                  # Global styles
│   ├── index.css               # Tailwind imports
│   └── main.jsx                # Application entry point
├── public/
├── tailwind.config.js          # Tailwind configuration with custom animations
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies and scripts
```

## 🎯 Key Components

### ReviewCard Component
- Interactive review display with expandable text
- Hover animations and user engagement features
- Verified purchase indicators and helpful voting

### RatingOverview Component
- Animated rating statistics and distribution charts
- Counting animations for customer numbers
- Visual rating breakdown with progress bars

### ReviewFilters Component
- Advanced filtering by rating and verification status
- Animated filter counters with staggered loading
- Sort options for different review arrangements

### LiveActivity Component
- Real-time purchase notifications
- Floating animation effects
- Location-based customer activity display

## 🎨 Custom Animations

The project includes custom Tailwind CSS animations:

```javascript
// tailwind.config.js
animation: {
  'float': 'float 6s ease-in-out infinite',
  'slide-up': 'slideUp 0.8s ease-out',
  'fade-in': 'fadeIn 1s ease-out',
  'bounce-slow': 'bounce 3s infinite',
  'pulse-slow': 'pulse 4s infinite',
  'hover-lift': 'hoverLift 0.3s ease-out',
}
```

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for medium screens
- **Desktop Enhanced**: Full-featured desktop experience
- **Grid System**: Responsive grid layouts for all components

## 🔧 Customization

### Adding New Reviews
Update the `sampleReviews` array in `App.jsx`:

```javascript
const sampleReviews = [
  {
    name: "Customer Name",
    rating: 5,
    text: "Review text here...",
    verified: true,
    location: "City Name",
    date: "Date",
    product: "Product Name",
    helpfulCount: 0
  }
]
```

### Modifying Animations
Edit animation settings in `tailwind.config.js` or component-specific styles.

### Customizing Colors
Update the color scheme in Tailwind classes throughout components.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 📊 Performance Features

- **Lazy Loading**: Efficient component rendering
- **Optimized Animations**: 60fps smooth animations
- **Responsive Images**: Optimized for different screen sizes
- **Fast Build Times**: Vite for lightning-fast development

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **Community** for inspiration and feedback

## 📞 Support

For support, email support@maskabutters.com or create an issue in this repository.

---

**Made with ❤️ for Maska Peanut Butter customers**