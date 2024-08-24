


import React from 'react';
import { FaPlus, FaEdit, FaEye, FaSignOutAlt } from 'react-icons/fa';

function Appointmentdashboard() {

  const handleLogout = async () => {
    sessionStorage.clear();
  }
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">MAX</div>
          <ul className="flex space-x-4">
            <li>
              <a href="/createappointmenttab" className="flex items-center text-white hover:text-gray-300 transition">
                <FaPlus className="mr-2" /> Add Appointment
              </a>
            </li>
            <li>
              <a href="/updateappointmenttab" className="flex items-center text-white hover:text-gray-300 transition">
                <FaEdit className="mr-2" /> Update Appointment
              </a>
            </li>
            <li>
              <a href="/viewappointmenttab" className="flex items-center text-white hover:text-gray-300 transition">
                <FaEye className="mr-2" /> View Appointment
              </a>
            </li>
          </ul>
          <div>
            <a href="/" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleLogout}>
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Appointment Dashboard</h1>
        {/* Add additional content here */}
      </main>
    </div>
  );
}

export default Appointmentdashboard;
