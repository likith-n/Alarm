require('dotenv').config();
const express = require('express');
const axios   = require('axios');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

// ── Health check ─────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ ok: true, keySet: true, provider: 'OpenStreetMap + OSRM (free, no key needed)' });
});

// ── Geocode a place name → { lat, lon, display_name }
// Uses Nominatim (OpenStreetMap) — completely free, no key
async function geocode(place) {
  const url = 'https://nominatim.openstreetmap.org/search';
  const resp = await axios.get(url, {
    params: { q: place, format: 'json', limit: 1 },
    headers: { 'User-Agent': 'TravelAlarmApp/1.0' }
  });
  if (!resp.data || resp.data.length === 0) {
    throw new Error(`Place not found: "${place}". Try a more specific name.`);
  }
  return {
    lat: parseFloat(resp.data[0].lat),
    lon: parseFloat(resp.data[0].lon),
    display_name: resp.data[0].display_name
  };
}

// ── Parse "lat,lng" string or geocode a place name
async function resolveLocation(input) {
  const trimmed = input.trim();
  // Check if it's already coordinates like "12.9716,77.5946"
  const coordMatch = trimmed.match(/^(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)$/);
  if (coordMatch) {
    return { lat: parseFloat(coordMatch[1]), lon: parseFloat(coordMatch[2]), display_name: trimmed };
  }
  // Otherwise geocode it
  return await geocode(trimmed);
}

// ── GET /api/distance?origin=...&destination=...
app.get('/api/distance', async (req, res) => {
  const { origin, destination } = req.query;
  console.log(`\n[REQUEST] origin="${origin}"  destination="${destination}"`);

  if (!origin || !destination) {
    return res.status(400).json({ error: 'origin and destination query params are required.' });
  }

  try {
    // Step 1: Resolve both locations to coordinates
    console.log('[STEP 1] Resolving coordinates...');
    const [from, to] = await Promise.all([
      resolveLocation(origin),
      resolveLocation(destination)
    ]);
    console.log(`[COORDS] From: ${from.lat},${from.lon}  To: ${to.lat},${to.lon}`);

    // Step 2: Get road distance via OSRM (free, open-source routing)
    console.log('[STEP 2] Fetching road distance from OSRM...');
    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${from.lon},${from.lat};${to.lon},${to.lat}`;
    const osrmResp = await axios.get(osrmUrl, {
      params: { overview: 'false' },
      headers: { 'User-Agent': 'TravelAlarmApp/1.0' }
    });

    if (osrmResp.data.code !== 'Ok' || !osrmResp.data.routes || osrmResp.data.routes.length === 0) {
      throw new Error('OSRM could not find a driving route between these locations.');
    }

    const route       = osrmResp.data.routes[0];
    const distance_m  = route.distance;           // metres
    const distance_km = distance_m / 1000;
    const duration_s  = route.duration;           // seconds

    // Format duration nicely
    const hrs  = Math.floor(duration_s / 3600);
    const mins = Math.floor((duration_s % 3600) / 60);
    const duration_text = hrs > 0 ? `${hrs}h ${mins}m` : `${mins} min`;
    const distance_text = distance_km >= 1
      ? `${distance_km.toFixed(1)} km`
      : `${Math.round(distance_m)} m`;

    const result = {
      distance_m,
      distance_km,
      distance_text,
      duration_s,
      duration_text,
      start_address: from.display_name,
      end_address:   to.display_name,
      provider: 'OSRM + OpenStreetMap'
    };

    console.log(`[OK] ${distance_text} · ${duration_text}`);
    return res.json(result);

  } catch (err) {
    console.error('[ERROR]', err.message);
    return res.status(500).json({ error: err.message });
  }
});

// ── Serve index.html for all other routes ─────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🚗  Travel Alarm running at http://localhost:${PORT}`);
  console.log(`✅  Using FREE APIs — no Google key or billing needed!`);
  console.log(`    • Nominatim (OpenStreetMap) — geocoding`);
  console.log(`    • OSRM — road distance & duration`);
  console.log(`📋  Request logs will appear here\n`);
});
