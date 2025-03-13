import React from 'react';
import { LineChart, BarChart, Activity } from 'lucide-react';

export default function Analytics() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
      
      {/* Energy Usage */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-6 h-6 text-blue-500" />
            <h2 className="text-lg font-semibold">Energy Usage</h2>
          </div>
          <div className="text-3xl font-bold">2,345 kWh</div>
          <p className="text-green-500 text-sm">-12% vs last month</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold">Peak Hours</h2>
          </div>
          <div className="text-3xl font-bold">6-8 PM</div>
          <p className="text-gray-500 text-sm">Highest usage period</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <LineChart className="w-6 h-6 text-green-500" />
            <h2 className="text-lg font-semibold">Cost Savings</h2>
          </div>
          <div className="text-3xl font-bold">$127.50</div>
          <p className="text-green-500 text-sm">+8% vs last month</p>
        </div>
      </div>

      {/* Usage Breakdown */}
      <div className="bg-white rounded-3xl p-8 shadow-md">
        <h2 className="text-xl font-semibold mb-6">Device Usage Breakdown</h2>
        <div className="space-y-4">
          {['Air Conditioning', 'Lighting', 'Entertainment', 'Kitchen'].map((device) => (
            <div key={device} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <span>{device}</span>
                  <span className="font-semibold">
                    {Math.floor(Math.random() * 30 + 10)}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 30 + 10)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}