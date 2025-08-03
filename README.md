## 📋 Project Requirements

**Ecovista** is a weather and geolocation-based web application built with **Next.js 14**. It displays real-time environmental data based on the user’s current location and also supports manual location switching.

### ✅ Core Functional Requirements

- 📍 **Detect Current Location**

  - Automatically fetch user’s latitude and longitude using `navigator.geolocation`.
  - Reverse geocode coordinates into city and country.

- 🌦️ **Display Current Weather**

  - Temperature (°C/°F)
  - Weather condition (e.g., sunny, rainy)
  - Humidity
  - Wind speed and direction
  - Weather icons for current status

- 🌫️ **Air Pollution & Air Quality**

  - Show Air Quality Index (AQI): Good, Moderate, Unhealthy, etc.
  - Pollutants: PM2.5, PM10, CO, NO2, SO2, O3
  - Fetched via OpenWeatherMap Air Pollution API

- 🌬️ **Wind Information**

  - Wind speed (m/s or km/h)
  - Directional indicator (N/S/E/W)

- 🔁 **Location Switch / Search**

  - Manual input to search weather by city name or ZIP
  - Auto-update weather and AQI based on selection
  - Save selected location to local storage

- 🧭 **Toggle Button for Location Mode**
  - Option to switch between:
    - 📍 “Use My Location”
    - 🏙️ “Select Another Location”

---

### 🛠️ Technical Requirements

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **State Management**: React hooks (optional Zustand)
- **APIs**:
  - [Geolocation API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) — For detecting user location
  - [OpenWeatherMap Weather API](https://openweathermap.org/api) — For weather data
  - [OpenWeatherMap Air Pollution API](https://openweathermap.org/api/air-pollution) — For air quality data
  - [BigDataCloud Reverse Geocode to City API](https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api) — For converting coordinates to city/country
  - Optional: OpenCage / OpenWeatherMap Geocoding
- **Environment Variables**:
  - `NEXT_PUBLIC_OPENWEATHER_API_KEY`
  - `NEXT_PUBLIC_GEOCODING_API_KEY`

---

### 🧪 CI/CD Requirements

- GitHub Actions:
  - Build, Lint, Test on push to `main` or `develop`
- Optional: Preview deployments with Vercel

---
