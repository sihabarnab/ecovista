import React from "react";

const TemperaturerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#22304A] text-white">
      <div className="card max-w-md w-full p-8 rounded-2xl shadow-lg">
        <h2 className="feature-title mb-4 text-center">
          🌡️ Temperature Details
        </h2>
        <p className="feature-name text-center mb-6">
          Current temperature and weather conditions for your location.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Temperature:</span>
            <span className="ml-2 font-bold text-blue-300">30°C</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Feels Like:</span>
            <span className="ml-2 font-bold">32°C</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Weather:</span>
            <span className="ml-2 font-bold">Sunny</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Humidity:</span>
            <span className="ml-2 font-bold">60%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperaturerPage;
