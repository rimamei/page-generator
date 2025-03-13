import { Bell, Grid, Lightbulb, LineChart, Music2, Shield, Thermometer } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div className="md:w-20 flex md:flex-col gap-4 md:gap-8 overflow-x-auto md:overflow-visible">
      <nav className="bg-white rounded-2xl p-4 flex md:flex-col gap-4 md:gap-6 shadow-lg shadow-gray-100/50">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Grid className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/lighting"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Lightbulb className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/climate"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Thermometer className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Music2 className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <LineChart className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Bell className="w-6 h-6" />
        </NavLink>
        <NavLink
          to="/security"
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all flex-shrink-0 ${
              isActive
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Shield className="w-6 h-6" />
        </NavLink>
      </nav>
    </div>
  );
};

export default LeftSidebar;
