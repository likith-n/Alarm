# Distance Alarm — Travel Tracker

A full-stack web app that monitors your road distance to a destination
and fires an alarm when you get close.

## Project Structure

TravelAlarmApp/
├── server.js          ← Node.js backend (proxies Google Maps API)
├── package.json       ← Dependencies
├── .env               ← Your API key lives here
├── START.bat          ← Double-click to launch everything
└── public/
    └── index.html     ← Frontend UI

## Setup (one-time)

1. Install Node.js from https://nodejs.org  (LTS version)

2. Add your Google Maps API key to .env:
   GOOGLE_MAPS_API_KEY=AIzaSy...your_key_here

3. Double-click START.bat
   - It installs dependencies automatically
   - Starts the backend server
   - Opens your browser to http://localhost:3000

## How It Works

Browser (index.html)
    ↓  GET /api/distance?origin=...&destination=...
Node.js server (server.js)
    ↓  GET maps.googleapis.com/api/directions/json?key=SECRET
Google Maps API
    ↑  Returns distance in metres
Node.js server
    ↑  Returns { distance_km, duration_text, ... }
Browser
    → Updates radar gauge, checks alarm threshold

The API key stays on the server — never exposed to the browser.

## Getting a Google Maps API Key

1. Go to console.cloud.google.com
2. Create a project → Enable "Directions API"
3. APIs & Services → Credentials → Create API Key
4. Paste it in .env
