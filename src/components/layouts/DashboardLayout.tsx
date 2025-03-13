import { Outlet } from 'react-router-dom';
// import RightSidebar from '../elements/Sidebar/RightSidebar';
import LeftSidebar from '../elements/Sidebar/LeftSidebar';
import Header from '../elements/Header';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <LeftSidebar />
          <div className="flex-1 bg-white rounded-3xl p-4 md:p-8 shadow-lg shadow-gray-100/50">
            <Outlet />
          </div>
          {/* <RightSidebar /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
