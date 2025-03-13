import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import {
  Grid,
  Lightbulb,
  Thermometer,
  Music2,
  LineChart,
  Bell,
  Shield,
  MoreVertical,
  Settings,
  User,
  Search,
  LogOut,
  UserCog,
  Heart,
  HelpCircle,
  AlertCircle,
  Menu,
  X,
} from 'lucide-react';

import Dashboard from './pages/Dashboard';
import Lighting from './pages/Lighting';
import Climate from './pages/Climate';
import Music from './pages/Music';
import Analytics from './pages/Analytics';
import Notifications from './pages/Notifications';
import Security from './pages/Security';
import Dropdown from './components/Dropdown';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const notifications = [
    {
      id: 1,
      title: 'Energy Usage Alert',
      message: 'Unusual energy consumption detected',
      time: '2 min ago',
      type: 'alert'
    },
    {
      id: 2,
      title: 'Security Update',
      message: 'Front door camera motion detected',
      time: '15 min ago',
      type: 'info'
    },
    {
      id: 3,
      title: 'Device Update',
      message: 'New firmware available for 3 devices',
      time: '1 hour ago',
      type: 'update'
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-bold text-blue-600">SmartHome</span>
              </div>
              
              {/* Search Bar - Hidden on mobile */}
              <div className="hidden md:flex flex-1 max-w-xl px-8">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="Search devices, rooms, or settings..."
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Settings className="h-6 w-6" />
                </button>

                {/* Notifications Dropdown */}
                <Dropdown
                  trigger={
                    <button className="relative p-2 text-gray-400 hover:text-gray-500">
                      <Bell className="h-6 w-6" />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                  }
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <h3 className="text-sm font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 p-1 rounded-full ${
                            notification.type === 'alert' ? 'bg-red-100 text-red-600' :
                            notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            <AlertCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                            <p className="text-sm text-gray-500">{notification.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-gray-100">
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View all notifications
                    </button>
                  </div>
                </Dropdown>

                {/* Profile Dropdown */}
                <Dropdown
                  trigger={
                    <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900">
                      <User className="h-6 w-6" />
                      <span className="font-medium">John Doe</span>
                    </button>
                  }
                >
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">john@example.com</p>
                  </div>
                  <div className="py-1">
                    <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center gap-2">
                      <UserCog className="w-4 h-4" />
                      Account settings
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center gap-2">
                      <Heart className="w-4 h-4" />
                      Favorites
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 w-full text-left flex items-center gap-2">
                      <HelpCircle className="w-4 h-4" />
                      Help & Support
                    </button>
                  </div>
                  <div className="py-1 border-t border-gray-100">
                    <button className="px-4 py-2 text-sm text-red-600 hover:bg-gray-50 w-full text-left flex items-center gap-2">
                      <LogOut className="w-4 h-4" />
                      Sign out
                    </button>
                  </div>
                </Dropdown>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>

            {/* Mobile Search - Only visible on mobile */}
            <div className="md:hidden pb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="px-4 py-3 space-y-1">
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Settings
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </button>
              <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile
              </button>
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Sidebar */}
            <div className="md:w-20 flex md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-visible">
              <nav className="bg-white rounded-2xl p-4 flex md:flex-col gap-4 md:gap-6 shadow-lg shadow-gray-100/50">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <Grid className="w-6 h-6" />
                </NavLink>
                <NavLink 
                  to="/lighting" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <Lightbulb className="w-6 h-6" />
                </NavLink>
                <NavLink 
                  to="/climate" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <Thermometer className="w-6 h-6" />
                </NavLink>
                <NavLink 
                  to="/music" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <Music2 className="w-6 h-6" />
                </NavLink>
                <NavLink 
                  to="/analytics" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <LineChart className="w-6 h-6" />
                </NavLink>
                <NavLink 
                  to="/notifications" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <Bell className="w-6 h-6" />
                </NavLink>
                <NavLink 
                  to="/security" 
                  className={({ isActive }) => 
                    `p-3 rounded-xl transition-all flex-shrink-0 ${isActive ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`
                  }
                >
                  <Shield className="w-6 h-6" />
                </NavLink>
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-3xl p-4 md:p-8 shadow-lg shadow-gray-100/50">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/lighting" element={<Lighting />} />
                <Route path="/climate" element={<Climate />} />
                <Route path="/music" element={<Music />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/security" element={<Security />} />
              </Routes>
            </div>

            {/* Right Sidebar */}
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
                      <div className="text-sm text-green-500">12% less than yesterday</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;