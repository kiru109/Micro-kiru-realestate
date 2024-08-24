

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaEye, FaSignOutAlt } from 'react-icons/fa';

function ViewAppointmentTab() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8010/appointment/appointmenttab/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    const conf = window.confirm("Do you want to delete this record?");
    if (conf) {
      axios
        .delete(`http://localhost:8010/appointment/appointmenttab/${id}`)
        .then((res) => {
          alert("Record has been deleted");
          setRecords(records.filter(record => record.appointmenttabId !== id));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
     
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-xl font-bold">MAX</div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/createappointmenttab" className="flex items-center text-white hover:text-gray-300 transition">
                <FaPlus className="mr-2" /> Add Appointment
              </Link>
            </li>
            <li>
              <Link to="/updateappointmenttab" className="flex items-center text-white hover:text-gray-300 transition">
                <FaEdit className="mr-2" /> Update Appointment
              </Link>
            </li>
            <li>
              <Link to="/viewappointmenttab" className="flex items-center text-white hover:text-gray-300 transition">
                <FaEye className="mr-2" /> View Appointment
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition">
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Appointment List
        </h1>

        <div className="flex justify-end mb-4">
          <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition flex items-center">
            <FaPlus className="mr-2" /> Add
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                {columns.map((c, i) => (
                  <th key={i} className="py-3 px-4 text-left border-b font-medium">
                    {c}
                  </th>
                ))}
                <th className="py-3 px-4 text-left border-b font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {records.map((d, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 border-b">{d.appointtabId}</td>
                  <td className="py-3 px-4 border-b">{d.proptabRequest}</td>
                  <td className="py-3 px-4 border-b">{d.appointmentNumber}</td>
                  <td className="py-3 px-4 border-b">{d.email}</td>
                  <td className="py-3 px-4 border-b">{d.date}</td>
                  <td className="py-3 px-4 border-b">{d.time}</td>
                  <td className="py-3 px-4 border-b">{d.proptab && d.proptab.proptabId}</td>
                  <td className="py-3 px-4 border-b">{d.buytab && d.buytab.buytabId}</td>

                  <td className="py-3 px-4 border-b flex space-x-2">
                    <Link
                      to={`/updateappointmenttab/${d.appointmenttabId}`}
                      className="bg-green-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-green-600 transition flex items-center"
                    >
                      <FaEdit className="mr-1" /> Update
                    </Link>
                    <button
                      onClick={() => handleDelete(d.appointmenttabId)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 transition flex items-center"
                    >
                      <FaSignOutAlt className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAppointmentTab;
