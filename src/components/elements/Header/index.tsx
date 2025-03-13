import React, { useState } from 'react';
import Dropdown from '../../Dropdown';
import {
  AlertCircle,
  Bell,
  Heart,
  HelpCircle,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  UserCog,
  X,
} from 'lucide-react';
import { notifications } from '../../../constants/notification';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white border-b sticky top-0 z-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-bold text-blue-600">
                SmartHome
              </span>
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
                        <div
                          className={`mt-1 p-1 rounded-full ${
                            notification.type === 'alert'
                              ? 'bg-red-100 text-red-600'
                              : notification.type === 'info'
                              ? 'bg-blue-100 text-blue-600'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          <AlertCircle className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            {notification.time}
                          </p>
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
    </>
  );
};

export default Header;
