import React from 'react';
import { Shield, Lock, Camera, DoorClosed, Bell, Settings } from 'lucide-react';

export default function Security() {
  const devices = [
    { name: 'Front Door Camera', status: 'Online', icon: Camera },
    { name: 'Back Door Lock', status: 'Locked', icon: Lock },
    { name: 'Garage Door', status: 'Closed', icon: DoorClosed },
    { name: 'Motion Sensor', status: 'Active', icon: Bell }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Security System</h1>
        <button className="p-2 bg-gray-100 rounded-full">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* System Status */}
      <div className="bg-gray-800 text-white rounded-3xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-6">
          <Shield className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-semibold">System Armed</h2>
            <p className="text-gray-400">All sensors active and monitoring</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="py-3 px-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
            Disarm System
          </button>
          <button className="py-3 px-4 bg-red-500 rounded-xl hover:bg-red-600 transition-colors">
            Emergency
          </button>
        </div>
      </div>

      {/* Connected Devices */}
      <h2 className="text-xl font-semibold mb-4">Connected Devices</h2>
      <div className="grid grid-cols-2 gap-6">
        {devices.map((device, index) => {
          const Icon = device.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{device.name}</h3>
                  <p className="text-sm text-gray-500">{device.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Recent Activity</h2>
      <div className="bg-white rounded-3xl p-6 shadow-md">
        <div className="space-y-4">
          {[
            { time: '10:23 AM', event: 'Front door locked' },
            { time: '09:45 AM', event: 'Motion detected in backyard' },
            { time: '08:30 AM', event: 'System armed' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
              <span className="text-gray-500">{activity.time}</span>
              <span>{activity.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}