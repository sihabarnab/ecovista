import React from "react";

const AQIPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#22304A] text-white">
      <div className="card max-w-md w-full p-8 rounded-2xl shadow-lg">
        <h2 className="feature-title mb-4 text-center">🌫️ Air Quality Index</h2>
        <p className="feature-name text-center mb-6">
          See the latest air pollution data for your location.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">AQI Level:</span>
            <span className="ml-2 font-bold text-yellow-400">Moderate</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">PM2.5:</span>
            <span className="ml-2 font-bold">35 µg/m³</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">PM10:</span>
            <span className="ml-2 font-bold">60 µg/m³</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">CO:</span>
            <span className="ml-2 font-bold">0.8 ppm</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">NO₂:</span>
            <span className="ml-2 font-bold">18 ppb</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">SO₂:</span>
            <span className="ml-2 font-bold">5 ppb</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">O₃:</span>
            <span className="ml-2 font-bold">22 ppb</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AQIPage;
