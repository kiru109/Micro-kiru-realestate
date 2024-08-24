


import React from 'react';
import { FaShip, FaTasks, FaBell, FaUsersCog, FaChartLine } from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';
import BuyTabManagement from './BuyTabManagement';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Buyerdashboard = () => {
  const [activePage, setActivePage] = React.useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'buytab':
        return <BuyTabManagement />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-800 text-white">
      {/* Top Navbar */}
      <nav className="bg-blue-900 text-white p-4 flex items-center shadow-lg">
        <div className="text-3xl font-bold">Buyer</div>
        <div className="ml-auto flex space-x-6">
          <div className="flex items-center cursor-pointer hover:text-gray-300" onClick={() => setActivePage('dashboard')}>
            <FaChartLine className="mr-2" /> Dashboard
          </div>
          <div className="flex items-center cursor-pointer hover:text-gray-300" onClick={() => setActivePage('buytab')}>
            <FaTasks className="mr-2" /> BuyTab
          </div>
          <div className="flex items-center cursor-pointer hover:text-gray-300">
            <FaBell className="mr-2" /> Notifications
          </div>
          <div className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition">
            <FaUsersCog className="mr-2" /> Logout
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {renderContent()}
      </main>
    </div>
  );
};

// Dashboard Overview Component
const DashboardOverview = () => {
  const data = {
    labels: ['BuyTab', 'PropTab', 'Tasks'],
    datasets: [
      {
        label: 'BuyTab Allocation',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        data: [65, 59, 80],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'PropTab Arrivals',
        fill: false,
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        data: [10, 20, 30, 40, 50],
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <Pie data={data} />
          </div>
        </div>
      </div>

      <div className="bg-white text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Tasks and Responsibilities</h2>
        <div className="flex flex-col space-y-4">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold">Manage Buyers</h3>
           
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-blue-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold">Sellers</h3>
           
          </motion.div>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-blue-100 p-4 rounded-lg"
          >
            <h3 className="font-semibold">Monitor Buyer</h3>
            <p>Track Buyer.</p>
          </motion.div>
        </div>
        <div>
            <Line data={lineData} />
          </div>
      </div>
    </motion.div>
  );
};




export default Buyerdashboard;
