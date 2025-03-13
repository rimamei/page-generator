import React, { useState } from 'react';
import { Thermometer, Fan, Snowflake } from 'lucide-react';

export default function Climate() {
  const [temperature, setTemperature] = useState(22);
  const [humidity, setHumidity] = useState(45);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Climate Control</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Temperature</h2>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="text-6xl font-semibold">{temperature}°C</div>
              <input
                type="range"
                min="16"
                max="30"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="mt-4 w-full"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="flex-1 py-3 px-4 bg-gray-100 rounded-xl flex items-center justify-center gap-2">
              <Fan className="w-5 h-5" />
              <span>Fan Mode</span>
            </button>
            <button className="flex-1 py-3 px-4 bg-gray-100 rounded-xl flex items-center justify-center gap-2">
              <Snowflake className="w-5 h-5" />
              <span>Cool Mode</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Humidity</h2>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="text-6xl font-semibold">{humidity}%</div>
              <input
                type="range"
                min="30"
                max="70"
                value={humidity}
                onChange={(e) => setHumidity(parseInt(e.target.value))}
                className="mt-4 w-full"
              />
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-100 rounded-xl">
            <p className="text-gray-600">Optimal humidity range: 40-60%</p>
          </div>
        </div>
      </div>
    </div>
  );
}