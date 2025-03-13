import { createBrowserRouter } from 'react-router';
import { NavGroup } from '../components/layouts/types';
import { privateRoutes } from './privateRoute';

export const DashboardMenu = (): NavGroup[] => {
  return privateRoutes[0].children;
};

export const Router = createBrowserRouter(privateRoutes);
