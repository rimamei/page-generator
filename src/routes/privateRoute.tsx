import DashboardLayout from "../components/layouts/DashboardLayout";
import Analytics from "../pages/Analytics";
import Climate from "../pages/Climate";
import Dashboard from "../pages/Dashboard";
import Lighting from "../pages/Lighting";
import Music from "../pages/Music";
import Notifications from "../pages/Notifications";
import Security from "../pages/Security";

export const privateRoutes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        title: 'Home',
        path: '/',
        element: <Dashboard />,
        children: [],
      },
      {
        title: 'Lighting',
        path: '/lighting',
        element: <Lighting />,
        children: [],
      },
      {
        title: 'Climate',
        path: '/climate',
        element: <Climate />,
        children: [],
      },
      {
        title: 'Music',
        path: '/music',
        element: <Music />,
        children: [],
      },
      {
        title: 'Analytics',
        path: '/analytics',
        element: <Analytics />,
        children: [],
      },
      {
        title: 'Notifications',
        path: '/notifications',
        element: <Notifications />,
        children: [],
      },
      {
        title: 'Security',
        path: '/security',
        element: <Security />,
        children: [],
      },
    ],
  },
];
