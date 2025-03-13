import React, { useState } from 'react';
import {
  Home,
  MoreVertical,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Volume2,
  Fan,
  Snowflake,
  Lightbulb,
  Thermometer,
  Plus,
  ChevronRight,
  Sun,
  Moon,
  Cloud,
  Droplets
} from 'lucide-react';

function RoomButton({ icon, name, devices, active }: { icon: React.ReactNode, name: string, devices: number, active?: boolean }) {
  return (
    <button className={`w-full p-4 rounded-xl flex items-center gap-4 transition-all ${active ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white hover:shadow-md'}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${active ? 'bg-blue-400' : 'bg-gray-100'}`}>
        {icon}
      </div>
      <div className="flex-1 text-left">
        <div className="font-medium">{name}</div>
        <div className={`text-sm ${active ? 'text-blue-200' : 'text-gray-500'}`}>{devices} devices</div>
      </div>
      <ChevronRight className={`w-5 h-5 ${active ? 'text-blue-200' : 'text-gray-400'}`} />
    </button>
  );
}

function DeviceCard({ title, icon: Icon, value, status, color = 'bg-gray-100' }: { title: string, icon: any, value: string, status: string, color?: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 ${color} rounded-xl`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>
      <div className="text-2xl font-semibold">{value}</div>
    </div>
  );
}

export default function Dashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [temperature, setTemperature] = useState(22);
  const [fanOn, setFanOn] = useState(false);
  const [coolerOn, setCoolerOn] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-500">Here's your home status for today</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <Sun className="w-4 h-4 text-yellow-500" />
            <span>Sunny</span>
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-red-500" />
            <span>24°C</span>
          </div>
          <div className="px-4 py-2 bg-gray-100 rounded-full flex items-center gap-2">
            <Droplets className="w-4 h-4 text-blue-500" />
            <span>65%</span>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="grid grid-cols-2 gap-4">
        <RoomButton 
          icon={<Home className="w-6 h-6" />}
          name="Living Room"
          devices={8}
          active
        />
        <RoomButton 
          icon={<Lightbulb className="w-6 h-6" />}
          name="Kitchen"
          devices={5}
        />
        <RoomButton 
          icon={<Moon className="w-6 h-6" />}
          name="Bedroom"
          devices={6}
        />
        <RoomButton 
          icon={<Cloud className="w-6 h-6" />}
          name="Bathroom"
          devices={3}
        />
      </div>

      {/* Room Preview */}
      <div className="relative rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Living Room"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6">
          <h2 className="text-white text-2xl font-semibold">Living Room</h2>
          <p className="text-gray-200">8 devices connected</p>
        </div>
        <div className="absolute top-6 right-6 flex gap-3">
          <button className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/30 transition-colors">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white hover:bg-white/30 transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Music Player */}
        <div className="bg-gray-900 rounded-3xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Now Playing</h3>
            <div className="w-10 h-6 bg-gray-700 rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Album art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mb-4">
            <h4 className="font-medium">Shape of You</h4>
            <p className="text-gray-400 text-sm">Ed Sheeran</p>
          </div>
          <div className="flex justify-between items-center">
            <Shuffle className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <button 
              className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Volume2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Smart Lamp Control */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Living Room</h3>
            <MoreVertical className="w-5 h-5" />
          </div>
          <div className="text-sm mb-4">Smart Lighting</div>
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <Lightbulb className="w-12 h-12" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/20 rounded-full p-2">
              <div className="bg-white rounded-full h-1">
                <div className="bg-yellow-300 w-4/5 h-full rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span>Brightness</span>
              <span>80%</span>
            </div>
          </div>
        </div>

        {/* Temperature Control */}
        <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Climate Control</h3>
            <MoreVertical className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center mb-6">
            <div className="relative">
              <div className="text-5xl font-semibold">{temperature}°</div>
              <input
                type="range"
                min="16"
                max="30"
                value={temperature}
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="absolute -left-12 top-1/2 w-32 h-32 appearance-none bg-transparent [transform:rotate(-90deg)]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className={`py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors ${
                fanOn ? 'bg-white text-blue-500' : 'bg-white/20 hover:bg-white/30'
              }`}
              onClick={() => setFanOn(!fanOn)}
            >
              <Fan className="w-5 h-5" />
              <span>Fan</span>
            </button>
            <button
              className={`py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors ${
                coolerOn ? 'bg-white text-blue-500' : 'bg-white/20 hover:bg-white/30'
              }`}
              onClick={() => setCoolerOn(!coolerOn)}
            >
              <Snowflake className="w-5 h-5" />
              <span>Cool</span>
            </button>
          </div>
        </div>
      </div>

      {/* Device Stats */}
      <div className="grid grid-cols-4 gap-6">
        <DeviceCard
          title="Energy Usage"
          icon={Lightbulb}
          value="350W"
          status="Normal usage"
          color="bg-yellow-100"
        />
        <DeviceCard
          title="Temperature"
          icon={Thermometer}
          value="24°C"
          status="Optimal"
          color="bg-red-100"
        />
        <DeviceCard
          title="Humidity"
          icon={Droplets}
          value="65%"
          status="Slightly high"
          color="bg-blue-100"
        />
        <DeviceCard
          title="Air Quality"
          icon={Cloud}
          value="Good"
          status="Normal levels"
          color="bg-green-100"
        />
      </div>
    </div>
  );
}