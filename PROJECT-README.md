# Maska Review Wall - Maskabutters Product Review System

A modern, interactive review wall component built for Maskabutters peanut butter products. This project showcases various creative approaches to displaying customer reviews, ratings, and social proof elements.

## 🚀 Features

### Core Components
- **ProductHeader**: Hero section with product information and trust badges
- **RatingOverview**: Comprehensive rating statistics and distribution
- **ReviewCard**: Interactive review cards with expandable content
- **ReviewFilters**: Advanced filtering and sorting options
- **LiveActivity**: Real-time customer activity feed

### Key Functionality
- ⭐ **Star Rating System**: Visual 5-star rating display
- 🔍 **Advanced Filtering**: Filter by rating, verification status
- 📊 **Rating Distribution**: Visual breakdown of rating percentages
- 🔄 **Live Updates**: Simulated real-time customer activity
- 💬 **Interactive Reviews**: Expandable content, helpful votes
- 📱 **Responsive Design**: Mobile-first approach
- ✅ **Verified Reviews**: Trust indicators for authentic reviews

### Design Elements
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Color Palette**: Orange/red gradient theme matching Maskabutters branding
- **Typography**: Clear hierarchy and readable fonts
- **Social Proof**: Live counters, recent purchases, trust badges

## 🛠️ Tech Stack

- **React 19.2.0**: Modern React with hooks
- **Tailwind CSS 3.4.19**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **Component Architecture**: Modular, reusable components

## 📁 Project Structure

```
src/
├── components/
│   ├── ProductHeader.jsx      # Product hero section
│   ├── RatingOverview.jsx     # Rating statistics
│   ├── ReviewCard.jsx         # Individual review display
│   ├── ReviewFilters.jsx      # Filter and sort controls
│   └── LiveActivity.jsx       # Real-time activity widget
├── App.jsx                    # Main application component
├── App.css                    # Custom styles and animations
└── main.jsx                   # Application entry point
```

## 🎨 Design Variations Implemented

### 1. **Main Review Wall**
- Clean grid layout with comprehensive filtering
- Interactive review cards with expand/collapse
- Rating overview with distribution charts
- Live activity feed

### 2. **Key Features**
- **Social Proof Elements**: Live customer counters, recent purchases
- **Trust Indicators**: Verified badges, location display
- **Interactive Elements**: Helpful votes, reply buttons
- **Visual Hierarchy**: Clear typography and spacing

## 📊 Review Data Structure

```javascript
{
  name: "Customer Name",
  rating: 5,
  text: "Review content...",
  verified: true,
  location: "City",
  date: "Time ago",
  product: "Product variant",
  helpfulCount: 24
}
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🎯 Key Design Decisions

### User Experience
- **Progressive Disclosure**: Expandable reviews prevent information overload
- **Visual Feedback**: Hover states and animations provide clear interaction cues
- **Trust Building**: Verified badges and detailed user information build credibility

### Performance
- **Component-based Architecture**: Modular design for maintainability
- **Efficient Rendering**: Optimized re-renders with proper state management
- **Responsive Images**: Placeholder approach for fast loading

### Accessibility
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Color Contrast**: High contrast ratios for readability

## 🔧 Customization

The component system is highly customizable:

- **Colors**: Modify the Tailwind color palette in `tailwind.config.js`
- **Animations**: Add custom animations in `App.css`
- **Layout**: Adjust grid layouts and spacing
- **Content**: Update review data structure and sample content

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet**: Adjusted layouts for medium screens
- **Desktop**: Full-featured experience with multi-column layouts

## 🎨 Brand Integration

Designed specifically for Maskabutters with:
- Orange/red color scheme matching brand colors
- Peanut emoji and food-related iconography
- Indian market focus (cities, names, pricing in ₹)
- Product variants (Chatpata, Classic, Crunchy, etc.)

This review wall demonstrates modern web development practices while creating an engaging, trustworthy platform for customer feedback display.