import React from 'react';
import { FaShip, FaTasks, FaBell, FaUsersCog, FaChartLine, FaMapMarkedAlt } from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { motion } from 'framer-motion';
import PropTabRequest from './PropTabRequest';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const Admindashboard = () => {
    const [activePage, setActivePage] = React.useState('dashboard');

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard':
                return <DashboardOverview />;
              case 'request':
                return <PropTabRequest />;
            default:
                return <DashboardOverview />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white">
           
            <nav className="bg-blue-900 text-white p-4 flex items-center shadow-lg">
                <div className="text-3xl font-bold">Admin</div>
                <div className="ml-auto flex space-x-6">
                    <div className="flex items-center cursor-pointer hover:text-gray-300" onClick={() => setActivePage('dashboard')}>
                        <FaChartLine className="mr-2" /> Dashboard
                    </div>
                    <div className="flex items-center cursor-pointer hover:text-gray-300" onClick={() => setActivePage('request')}>
                        <FaShip className="mr-2" /> Request To Add
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
    const pieData = {
        labels: ['Property', 'Appointment', 'Tasks'],
        datasets: [
            {
                label: 'Property Data Analysis',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                data: [65, 59, 80],
            },
        ],
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Property Bookings',
                fill: false,
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                data: [15, 25, 35, 45, 55],
            },
        ],
    };
    const proptab = [
        { id: 1, name: 'Evergreen', location: 'Chennai', status: 'Booked' },
        { id: 2, name: 'Maersk', location: 'Singapore', status: 'Waitinglist' },
        { id: 3, name: 'Hapag-Lloyd', location: 'Rotterdam', status: 'Booked' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Property Data Overview</h2>
                <div className="flex flex-col space-y-4">
                    <div>
                        <Pie data={pieData} />
                    </div>
                </div>
            </div>

            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Property Bookings</h2>
                <Line data={lineData} />
                <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Property Details</h2>
                    <ul className="space-y-4">
                        {proptab.map((property) => (
                            <li key={proptab.id} className="bg-blue-100 p-4 rounded-lg shadow-sm">
                                <h3 className="font-semibold text-lg">{proptab.name}</h3>
                                <p>Location: {proptab.location}</p>
                                <p>Status: {proptab.status}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

export default Admindashboard;
