import React from 'react';
import { FaShip, FaUsersCog, FaMoneyBill, FaBell, FaCog, FaClipboardList } from 'react-icons/fa';
import { IoIosArrowDropdown } from 'react-icons/io';
import SellerDashboardOverview from './SellerDashboardOverview';
// import SellerAllocation from './SellerAllocation';
// import AddSellerTab from './SellerTab';
// import AdminManagement from '../Admin/AdminManagement';
// import BuyerManagement from '../Admin/BuyerManagement';
// import AppointmentManagement from '../Admin/AppointmentManagement';
import AddProperty from './AddProperty';
import ViewProperty from './ViewProperty';
import ViewAppointment from './ViewAppointment';
import { FaSignOutAlt } from 'react-icons/fa';
// Import other components if needed

const handleLogout = async () => {
  sessionStorage.clear();
}

const SellerDashboard = () => {
  const [activePage, setActivePage] = React.useState('dashboard');
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <SellerDashboardOverview />;
      // Add cases for other components
      // case 'admin':
      //   return <AdminManagement />;
      // case 'sellerAllocation':
      //   return <SellerAllocation />;
        case 'addproperty':
          return <AddProperty />;
          case 'viewproperty':
            return <ViewProperty />;
            case 'viewappointment':
            return <ViewAppointment />;
      // case 'appointment':
      //   return <AppointmentManagement />;
      // case 'buyer':
      //   return <BuyerManagement />;
      // case 'billing':
      //   return <AddSellerTab />;
        
    //   case 'notifications':
    //     return <Notifications />;
      default:
        return <SellerDashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-red-200 text-white">
      {/* Top Navbar */}
      <nav className="bg-danger text-white p-4 flex items-center">
        <div className="text-2xl font-bold">Welcome, Seller</div>
        <div className="ml-auto flex space-x-4">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('dashboard')}>
            <FaClipboardList className="mr-2" /> Dashboard Overview
          </div>
          {/* <div className="flex items-center cursor-pointer" onClick={() => setActivePage('sellerAllocation')}>
            <FaClipboardList className="mr-2" /> Seller Allocation
          </div> */}
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('addproperty')}>
            <FaClipboardList className="mr-2" /> Add Property
          </div>
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('viewproperty')}>
            <FaClipboardList className="mr-2" /> View Property
          </div>
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('viewappointment')}>
            <FaClipboardList className="mr-2" /> View Appointment
          </div>
          {/* <div className="relative">
            <div className="flex items-center cursor-pointer" onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
              <FaUsersCog className="mr-2" /> Manage Personnel
              <IoIosArrowDropdown className="ml-2" />
            </div>
            {isSubMenuOpen && (
              <ul className="absolute bg-white text-black mt-2 rounded shadow-lg">
                <li onClick={() => setActivePage('admin')} className="p-2 hover:bg-gray-200 cursor-pointer">
                  Admin Management
                </li>
                <li onClick={() => setActivePage('appointment')} className="p-2 hover:bg-gray-200 cursor-pointer">
                  Appointment Management
                </li>
                <li onClick={() => setActivePage('buyer')} className="p-2 hover:bg-gray-200 cursor-pointer">
                  Buyer Management
                </li>
              </ul>
            )}
          </div> */}
          {/* <div className="flex items-center cursor-pointer" onClick={() => setActivePage('billing')}>
            <FaMoneyBill className="mr-2" /> Billing
          </div> */}
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('notifications')}>
            <FaBell className="mr-2" /> Notifications
          </div>
          <a href="/" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleLogout}>
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {renderContent()}
      </main>
    </div>
  );
};

export default SellerDashboard;


  
      
