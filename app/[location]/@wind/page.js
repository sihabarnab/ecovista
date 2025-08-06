import React from "react";

const WindPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#22304A] text-white">
      <div className="card max-w-md w-full p-8 rounded-2xl shadow-lg">
        <h2 className="feature-title mb-4 text-center">💨 Wind Information</h2>
        <p className="feature-name text-center mb-6">
          Current wind speed and direction for your location.
        </p>
        <div className="flex flex-col gap-4">
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Speed:</span>
            <span className="ml-2 font-bold text-green-300">12 km/h</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Direction:</span>
            <span className="ml-2 font-bold">NE</span>
          </div>
          <div className="bg-[#293A4E] rounded-xl p-4 flex justify-between items-center">
            <span className="feature-name">Gusts:</span>
            <span className="ml-2 font-bold">18 km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindPage;
