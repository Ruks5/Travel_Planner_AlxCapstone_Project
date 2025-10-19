# Ver El Mundo (See the World) - Travel Planner Application

This travel planner was designed with React, TailwindCSS, and the Amadeus Travel API. The aim is to help users plan their dream vacations or relaxation time. They can set up their itienary by searching destinations, viewing flight offers, booking hotels, and creating personalized itineraries.

![Ver El Mundo](https://alxproject-travelplanner.netlify.app/)

## 🌟 Features

### ✈️ **Destination Search & Discovery**
- Search for destinations worldwide using the Amadeus API
- Browse curated popular destinations (Venice, London, Santorini, Monaco)
- View detailed information about each destination
- See top attractions and points of interest

### 🏨 **Travel Planning Tools**
- **Flight Search**: Find available flights with real-time pricing
- **Hotel Booking**: Browse accommodations with pricing and availability
- **Attractions**: Discover must-see landmarks and activities
- **Weather Information**: Check current weather conditions

### 📋 **Itinerary Management**
- Create and save personalized travel itineraries
- Add destinations, flights, and hotels to your trip plan
- Set travel dates and manage bookings
- Track multiple trips with local storage

### 🎨 **Modern UI/UX**
- Fully responsive design (mobile, tablet, desktop)
- Beautiful hero section with integrated search
- Interactive destination cards with hover effects
- Smooth animations and transitions
- Brand color scheme (#0c2145)

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework

### **APIs & Services**
- **Amadeus Travel API** - Flight and hotel data
- **Unsplash** - High-quality destination images

### **State Management**
- React Hooks (useState, useEffect)
- LocalStorage for itinerary persistence

## 📁 Project Structure

```
travel-planner/
├── public/
│   └── assets/           # Logo and sponsor images
├── src/
│   ├── assets/           # Local images and resources
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SearchBar.jsx
│   │   ├── DestinationCard.jsx
│   │   ├── PopularDestinations.jsx
│   │   ├── TravelPackages.jsx
│   │   ├── DreamDestination.jsx
│   │   ├── ReadyForTrip.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── DestinationDetails.jsx
│   │   └── Itinerary.jsx
│   ├── services/
│   │   └── amadeusApi.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm
- Amadeus API credentials (free tier available)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/travel-planner.git
cd travel-planner
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_AMADEUS_API_KEY=your_api_key_here
VITE_AMADEUS_API_SECRET=your_api_secret_here
VITE_AMADEUS_API_URL=https://test.api.amadeus.com
```

Get your API credentials from [Amadeus for Developers](https://developers.amadeus.com/)

4. **Start the development server**
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🎯 Key Components

### **SearchBar Component**
- Tabbed interface (Accommodation, Flights, Hotel, Restaurants)
- Destination search with validation
- Check-in/Check-out date selection
- Real-time search suggestions

### **DestinationDetails Component**
- Dynamic routing based on destination ID
- Tabbed content (Overview, Flights, Hotels, Attractions)
- Real-time API data fetching
- "Add to Itinerary" functionality

### **Itinerary Component**
- View all saved destinations
- Create trip with dates
- Remove destinations
- Save trips to localStorage

### **Amadeus API Service**
- OAuth2 authentication with token management
- Flight offers search
- Hotel availability search
- Points of interest lookup
- City information retrieval

## 🎨 Design System

### **Colors**
- **Primary**: `#0c2145` (Deep Blue)
- **Hover**: `#0a1b39` (Darker Blue)
- **Accent**: Sky Blue variants
- **Gray Scale**: Various shades for text and backgrounds

### **Typography**
- **Headings**: Playfair Display (semi-bold)
- **Body**: Inter (regular, medium, semi-bold)
- **Font Weights**: 400, 500, 600

### **Responsive Breakpoints**
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📱 Mobile Responsiveness

All components are fully responsive:
- ✅ Navbar with hamburger menu
- ✅ Collapsible search form
- ✅ Stacked cards on mobile
- ✅ Touch-friendly buttons (min 44px)
- ✅ Optimized images and loading

## 🔐 API Integration

### **Amadeus API Endpoints Used**

1. **Search Locations**
   ```
   GET /v1/reference-data/locations?keyword={query}&subType=CITY
   ```

2. **Flight Offers**
   ```
   GET /v2/shopping/flight-offers?originLocationCode={origin}&destinationLocationCode={dest}&departureDate={date}
   ```

3. **Hotel Offers**
   ```
   GET /v2/shopping/hotel-offers?cityCode={code}
   ```

4. **Points of Interest**
   ```
   GET /v1/reference-data/locations/pois?latitude={lat}&longitude={lon}
   ```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📦 Build & Deployment

### **Build for Production**
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### **Deploy to Netlify**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

## 🔧 Configuration

### **Tailwind Configuration**
Custom colors, fonts, and utilities are defined in `tailwind.config.js`

### **Vite Configuration**
Build settings and plugins in `vite.config.js`

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_AMADEUS_API_KEY` | Amadeus API key | Yes |
| `VITE_AMADEUS_API_SECRET` | Amadeus API secret | Yes |
| `VITE_AMADEUS_API_URL` | API base URL | Yes |


## 👨‍💻 Author

**Rukevwe Ukwa**
- GitHub: [@Ruks5](https://github.com/yourusernamehttps://github.com/Ruks5)

## 🙏 Acknowledgments

- [Amadeus for Developers](https://developers.amadeus.com/) - Travel API
- [Unsplash](https://unsplash.com/) - Beautiful travel images
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool

---

**Built with ❤️ for travelers who want a well organized trip** ✈️🌍

Made as part of the ALX Frontend Capstone Project