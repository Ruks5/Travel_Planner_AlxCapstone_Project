🌍 Travel Planner (FE Capstone Project)
📖 Project Overview

The Travel Planner is a frontend web application built with React, JavaScript, HTML, and CSS (with optional TailwindCSS).
It allows users to search destinations, view detailed travel information, and create personalized itineraries.

This project integrates the Amadeus API (along with optional APIs like Teleport for images and OpenWeatherMap for weather) to provide real-time travel data such as flights, hotels, and attractions.

The goal of this project is to practice:

API integration

Managing user input

Building responsive, user-friendly interfaces

Organizing a project with reusable React components

✨ Features
🔎 Destination Search

Search for destinations by city or keywords (e.g., Paris, beach vacation).

View a list of results with:

City name

Country

Representative image

Popular attractions

📍 Destination Details

Detailed view of a selected destination including:

Top attractions & activities

Available flight offers (via Amadeus Flight Offers API)

Hotel accommodations (via Amadeus Hotel Search API)

Current & forecasted weather (via OpenWeatherMap API, optional)

🗓️ Itinerary Planner

Create, save, and manage custom travel itineraries

Add destinations, flights, and hotels

Specify dates & times for planned activities

📱 Responsive Design

Built with TailwindCSS for a clean and adaptive layout

Optimized for desktop, tablet, and mobile devices

⚠️ Error Handling

User-friendly error messages for:

Network issues

Invalid API responses

Empty search results

🛠️ Technical Details
🔧 Setup

React project initialized with Vite (or custom setup)

TailwindCSS for styling (optional, can use vanilla CSS)

🌐 API Integrations

Amadeus API for destinations, flights, and hotels

Teleport API (optional) for destination images

OpenWeatherMap API (optional) for weather data

⚛️ UI Components

SearchBar – for searching destinations

DestinationCard – displays basic info about destinations

ItineraryPlanner – manage user travel plans

DestinationDetails – shows detailed travel info

🔄 State Management

React Hooks: useState, useEffect for state and data fetching

Optional: Zustand / Redux for complex state management

🚀 Deployment

Deploy to Netlify or Vercel

Ensure mobile-first responsiveness & accessibility