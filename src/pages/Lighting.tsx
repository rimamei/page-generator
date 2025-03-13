import React from 'react';
import { Lightbulb, MoreVertical } from 'lucide-react';

export default function Lighting() {
  const rooms = [
    { name: 'Living Room', brightness: 80 },
    { name: 'Kitchen', brightness: 100 },
    { name: 'Bedroom', brightness: 60 },
    { name: 'Bathroom', brightness: 40 }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Lighting Control</h1>
      <div className="grid grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room.name} className="bg-gray-700 rounded-3xl p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">{room.name}</h3>
              <MoreVertical className="w-5 h-5" />
            </div>
            <div className="text-sm mb-4">Smart lamp</div>
            <div className="flex justify-center mb-6">
              <Lightbulb className="w-20 h-20" />
            </div>
            <div className="bg-white/20 rounded-full p-2 flex justify-between items-center">
              <span>{room.brightness}%</span>
              <Lightbulb className="w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}