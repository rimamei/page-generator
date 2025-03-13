import { Lightbulb, MoreVertical, Music2 } from 'lucide-react';
import React from 'react';

const RightSidebar = () => {
  return (
    <div className="md:w-80 w-full">
      <div className="bg-white rounded-3xl p-6 shadow-lg shadow-gray-100/50">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Quick Access</h2>
          <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
            <MoreVertical className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-2xl">
            <h3 className="font-medium mb-3">Favorite Scenes</h3>
            <div className="space-y-2">
              <button className="w-full p-3 bg-white rounded-xl flex items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Movie Night</div>
                  <div className="text-sm text-gray-500">4 devices</div>
                </div>
              </button>
              <button className="w-full p-3 bg-white rounded-xl flex items-center gap-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                  <Music2 className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Evening Jazz</div>
                  <div className="text-sm text-gray-500">2 devices</div>
                </div>
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl">
            <h3 className="font-medium mb-3">Weather</h3>
            <div className="text-center p-4">
              <div className="text-4xl font-semibold">24°C</div>
              <div className="text-gray-500 mt-1">Partly Cloudy</div>
              <div className="text-sm text-gray-400 mt-2">New York, NY</div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-2xl">
            <h3 className="font-medium mb-3">Energy Usage</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Today</span>
                <span className="font-medium">4.5 kWh</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-sm text-green-500">
                12% less than yesterday
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
