




import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaEye, FaSignOutAlt } from 'react-icons/fa';

const statuses = ["Pending", "Started", "Completed"]; 

function AddAppointmentTab() {
  const [proptabRecords, setPropTabRecords] = useState([]);
  const [buyerRecords, setBuyerRecords] = useState([]);
  const [buytabRecords, setBuyTabRecords] = useState([]);
  const [inputData, setInputData] = useState({
    propId: "",
    appointmentNumber: "",
    emailid: "",
    date: "",
    time: "",
    buyerId: ""
  });

  useEffect(() => {
    loadPropTabData();
    loadBuyTabData();
  }, []);

  const loadPropTabData = async () => {
    try {
      const response = await axios.get("http://localhost:8010/seller/proptab/ids");
      setPropTabRecords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadBuyTabData = async () => {
    try {
      const response = await axios.get("http://localhost:8010/buyer/buytab/ids");
      setBuyTabRecords(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8010/appointment/appointmenttab", inputData)
      .then(() => {
        alert("Data added successfully");
        navigate("/viewappointmenttab");
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gray-100">
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
            <a href="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition">
              <FaSignOutAlt className="mr-2" /> Logout
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Add Appointment Data</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center mb-4">
              <label htmlFor="proptabId" className="w-1/4 font-medium text-lg">Select property ID:</label>
              <select
                id="proptabId"
                name="proptabId"
                className="form-select block w-3/4 bg-gray-100 border border-gray-300 rounded-lg p-2 text-lg focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={handleChange}
                value={inputData.propId}
              >
                <option value="">Select One</option>
                {proptabRecords.map((record) => (
                  <option key={record} value={record}>{record}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center mb-4">
              <label htmlFor="buytabId" className="w-1/4 font-medium text-lg">Select Buyer ID:</label>
              <select
                id="buyerId"
                name="buyerId"
                className="form-select block w-3/4 bg-gray-100 border border-gray-300 rounded-lg p-2 text-lg focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={handleChange}
                value={inputData.buyerId}
              >
                <option value="">Select One</option>
                {buyerRecords.map((record) => (
                  <option key={record} value={record}>{record}</option>
                ))}
              </select>
            </div>

            {Object.keys(inputData).slice(1, -1).map((key) => (
              <div key={key} className="flex items-center mb-4">
                <label htmlFor={key} className="w-1/4 font-medium text-lg capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
                <select
                  id={key}
                  name={key}
                  className="form-select block w-3/4 bg-gray-100 border border-gray-300 rounded-lg p-2 text-lg focus:ring-blue-500 focus:border-blue-500 transition"
                  onChange={handleChange}
                  value={inputData[key]}
                >
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            ))}

            <div className="text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAppointmentTab;