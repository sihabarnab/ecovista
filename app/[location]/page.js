import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#19243B] text-white">
      <div className="card max-w-md w-full p-8 rounded-2xl shadow-lg">
        <h1 className="feature-title mb-4 text-center">
          🌍 Location Dashboard
        </h1>
        <p className="feature-name text-center mb-6">
          Real-time weather & air quality for your selected location.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#22304A] rounded-xl p-4">
            <span className="feature-name">City:</span>
            <span className="ml-2 font-bold">Dhaka</span>
          </div>
          <div className="bg-[#22304A] rounded-xl p-4">
            <span className="feature-name">Temperature:</span>
            <span className="ml-2 font-bold">30°C</span>
          </div>
          <div className="bg-[#22304A] rounded-xl p-4">
            <span className="feature-name">Weather:</span>
            <span className="ml-2 font-bold">Sunny</span>
          </div>
          <div className="bg-[#22304A] rounded-xl p-4">
            <span className="feature-name">AQI:</span>
            <span className="ml-2 font-bold">Moderate</span>
          </div>
          <div className="bg-[#22304A] rounded-xl p-4">
            <span className="feature-name">Wind:</span>
            <span className="ml-2 font-bold">12 km/h NE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
