╔══════════════════════════════════════════════════════════════════╗
║              🚗  DISTANCE ALARM — TRAVEL TRACKER                ║
║           Real-time road distance monitor & alarm app           ║
╚══════════════════════════════════════════════════════════════════╝

100% FREE — No Google API key, no billing, no credit card needed.
Uses OpenStreetMap (Nominatim) + OSRM for routing.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📁  FOLDER STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Alarm/
  ├── server.js        ← Node.js backend (proxies free routing APIs)
  ├── index.html       ← Frontend UI (the website)
  ├── package.json     ← Project dependencies
  ├── .env             ← Environment config (port setting)
  ├── START.bat        ← Double-click to launch everything
  ├── README.txt       ← This file
  └── node_modules/    ← Auto-installed dependencies (don't touch)


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚙️  ONE-TIME SETUP  (do this only once)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  STEP 1 — Install Node.js
  ─────────────────────────
  1. Open your browser and go to:  https://nodejs.org
  2. Click the big green "LTS" download button
  3. Run the installer — keep clicking Next with default settings
  4. When done, restart your PC

  STEP 2 — Install app dependencies
  ───────────────────────────────────
  1. Open Command Prompt:
       Press  Win + R  → type  cmd  → press Enter
  2. Navigate to the Alarm folder:
       cd "C:\Users\HP\OneDrive\Desktop\Alarm"
  3. Run:
       npm install
  4. Wait for it to finish (you'll see a node_modules folder appear)
  
  ✅  Setup complete! You only need to do this once.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ▶️  HOW TO RUN THE APP  (every time you want to use it)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  OPTION A — Double-click  (easiest)
  ────────────────────────────────────
  1. Open the Alarm folder on your Desktop
  2. Double-click  START.bat
  3. A black terminal window opens — keep it open!
  4. Your browser opens automatically at http://localhost:3000
  5. The app is ready to use ✅

  OPTION B — Command Prompt  (if START.bat doesn't work)
  ────────────────────────────────────────────────────────
  1. Press  Win + R  → type  cmd  → Enter
  2. Type:   cd "C:\Users\HP\OneDrive\Desktop\Alarm"
  3. Type:   node server.js
  4. You will see:
       🚗  Travel Alarm running at http://localhost:3000
       ✅  Using FREE APIs — no Google key or billing needed!
  5. Open your browser and go to:  http://localhost:3000


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  📍  HOW TO USE THE APP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  1. Click the 📡 button — it detects your GPS location
     (Allow location access when the browser asks)

  2. Type your Destination
     Examples:  Mysore
                Kempegowda International Airport
                MG Road, Bengaluru

  3. Set "Alarm when within (km)"
     Example:  20  → alarm rings when you're 20 km from destination

  4. Set "Check every (seconds)"
     Example:  30  → checks your distance every 30 seconds

  5. Click  ▶ Start Alarm

  6. The radar gauge shows your live road distance.
     When you enter the alarm zone → 🔔 banner + sound alert fires!

  7. Click  ↺ Reset  to re-arm the alarm after it fires.
  8. Click  ■ Stop  to end monitoring.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ⚠️  IMPORTANT NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  • Keep the black terminal window OPEN while using the app.
    Closing it stops the server and the app stops working.

  • To stop the app: press  Ctrl + C  in the terminal window.

  • To reopen later: just double-click  START.bat  again.

  • GPS works only in Chrome or Edge browsers (not Firefox on localhost).

  • If GPS is blocked, type your coordinates manually:
       Format:  latitude,longitude
       Example: 12.97160,77.59460
    To find your coordinates: open Google Maps → right-click your
    location → the first line shows lat,lng — copy and paste it.

  • The app uses your PC's internet to call free routing servers.
    Make sure you're connected to the internet when running it.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🔧  TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Problem: Browser shows blank/error page
  Fix:     Make sure node server.js is running first,
           then go to http://localhost:3000

  Problem: "node is not recognized" error
  Fix:     Node.js is not installed. Go to nodejs.org and install it.

  Problem: "Cannot find module" error
  Fix:     Run  npm install  in the Alarm folder first.

  Problem: GPS button not working
  Fix:     Use Chrome or Edge. Or type lat,lng manually.

  Problem: "Place not found" error
  Fix:     Be more specific. E.g. "Mysore, Karnataka, India"
           instead of just "Mysore"

  Problem: App was working, now shows error after restart
  Fix:     Double-click START.bat again — the server wasn't running.


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  🏗️  HOW IT WORKS (technical summary)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Browser (index.html)
      ↓  asks: what is the road distance to "Mysore"?
  Node.js server (server.js)            ← runs on YOUR computer
      ↓  asks Nominatim: what are the coordinates of "Mysore"?
  OpenStreetMap Nominatim API           ← free, no key needed
      ↑  returns: lat=12.3051, lon=76.6550
  Node.js server
      ↓  asks OSRM: road distance from 12.97,77.59 to 12.30,76.65?
  OSRM Routing Engine                   ← free, open source
      ↑  returns: 145.3 km · 2h 38m
  Node.js server
      ↑  sends result back to browser
  Browser
      → updates radar gauge
      → checks if distance ≤ alarm threshold
      → fires alarm if yes 🔔


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Go to console.cloud.google.com
2. Create a project → Enable "Directions API"
3. APIs & Services → Credentials → Create API Key
4. Paste it in .env
