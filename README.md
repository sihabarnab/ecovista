# 🌱 Ecovista

**Ecovista** is a weather and geolocation-based web application built with **Next.js 14**. It provides real-time environmental data (weather, air quality, wind) based on the user’s current location or a manually selected location.

---

## 🚀 Features

### ✅ Core Functional Requirements

- 📍 **Detect Current Location**

  - Automatically fetch user’s latitude and longitude using the Geolocation API.
  - Reverse geocode coordinates into city and country using BigDataCloud API.

- 🔍 **Manual Location Search**

  - Search weather and AQI by city name or ZIP.
  - Save selected location to local storage.
  - Toggle between “Use My Location” and “Select Another Location”.

- 🌦️ **Current Weather**

  - Temperature (°C/°F)
  - Weather condition (sunny, rainy, etc.)
  - Humidity
  - Wind speed and direction
  - Weather icons

- 🌫️ **Air Pollution & Air Quality**

  - Air Quality Index (AQI): Good, Moderate, Unhealthy, etc.
  - Pollutants: PM2.5, PM10, CO, NO₂, SO₂, O₃
  - Data from OpenWeatherMap Air Pollution API

- 💨 **Wind Information**

  - Wind speed (m/s or km/h)
  - Directional indicator (N/S/E/W)
  - Gusts

- 🧭 **Location Mode Toggle**
  - Switch between auto-detect and manual location

---

## 🛠️ Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **State Management:** React hooks 
- **APIs:**

  - [Geolocation API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) — Detect user location
  - [OpenWeatherMap Weather API](https://openweathermap.org/api) — Weather data
  - [OpenWeatherMap Air Pollution API](https://openweathermap.org/api/air-pollution) — Air quality data
  - [BigDataCloud Reverse Geocode to City API](https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api) — Convert coordinates to city/country
  - Optional: OpenCage / OpenWeatherMap Geocoding

- **Environment Variables:**
  - `NEXT_PUBLIC_OPENWEATHER_API_KEY`
  - `NEXT_PUBLIC_GEOCODING_API_KEY`

---

## 🧪 CI/CD

- **GitHub Actions:** Build, Lint, Test on push to `main` or `develop`
- **Preview Deployments:** Vercel (optional)

---

## 📦 Folder Structure

```
ecovista/
├── app/
│   ├── [location]/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── @weather/page.js
│   │   ├── @aqi/page.js
│   │   ├── @wind/page.js
│   │   └── @temperature/page.js
│   ├── globals.css
│   └── ...
├── components/
│   ├── LocationDetector.jsx
│   ├── LocationInfo.jsx
│   ├── NoLocationInfo.jsx
│   ├── WeatherComponent.jsx
│   ├── AQIComponent.jsx
│   ├── WindComponent.jsx
│   ├── TemperatureComponent.jsx
│   └── Card.jsx
├── lib/
│   ├── location-info.js
│   └── weather-info.js
├── public/
│   ├── background.png
│   ├── gradient.png
│   └── icon_air_element.png
├── .env
├── tailwind.config.js
├── README.md
└── ...
```

---

## ⚙️ Setup & Usage

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/ecovista.git
   cd ecovista
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   ```
   NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweathermap_api_key
   NEXT_PUBLIC_GEOCODING_API_KEY=your_bigdatacloud_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open in browser:**  
   [http://localhost:3000](http://localhost:3000)

---

## 📝 How It Works

- On load, the app detects your location using the browser’s Geolocation API.
- Coordinates are reverse-geocoded to city/country.
- Weather, air quality, and wind data are fetched from OpenWeatherMap APIs.
- You can manually search for any location and view its environmental data.
- All data is displayed in a responsive, dashboard-style UI.

---

## 📄 License

MIT

---

## 🙏 Credits

- [OpenWeatherMap](https://openweathermap.org/)
- [BigDataCloud](https://www.bigdatacloud.com/)
- [Tailwind CSS](https://tailwindcss.com/)
