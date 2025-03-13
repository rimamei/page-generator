import React from 'react';
import { Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      type: 'alert',
      title: 'High Energy Usage Detected',
      message: 'Living room AC has been running for 8 hours straight',
      time: '2 hours ago',
      icon: AlertTriangle,
      color: 'text-yellow-500'
    },
    {
      type: 'success',
      title: 'Smart Schedule Applied',
      message: 'Your new evening lighting schedule has been activated',
      time: '4 hours ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      type: 'info',
      title: 'Device Update Available',
      message: 'New firmware update available for 3 devices',
      time: '1 day ago',
      icon: Info,
      color: 'text-blue-500'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <button className="relative p-2 bg-gray-100 rounded-full">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-gray-100 rounded-xl ${notification.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <span className="text-sm text-gray-500">{notification.time}</span>
                  </div>
                  <p className="text-gray-600">{notification.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <button className="text-gray-500 hover:text-gray-700">
          View all notifications
        </button>
      </div>
    </div>
  );
}