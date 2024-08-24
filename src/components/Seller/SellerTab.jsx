


import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function SellerTab() {
  const [proptabRecords, setPropTabRecords] = useState([]);
  const [selectedPropTabId, setSelectedPropTabId] = useState("");
  const [sellertabData, setSellerTabData] = useState({
    name: "",
    emailid: "",
    phonenumber: "",
    proptab: {
      proptabId: "",
    },
  });
  const [sellertab, setSellerTab] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadPropTabData();
    loadSellerTab();
  }, []);

  useEffect(() => {
    if (selectedPropTabId) {
      fetchPropTabDetails(selectedPropTabId);
    }
  }, [selectedPropTabId]);

  const loadPropTabData = async () => {
    try {
      const response = await axios.get("http://localhost:8010/seller/proptab/ids");
      setPropTabRecords(response.data);
    } catch (error) {
      console.error("Error loading proptab data:", error);
    }
  };

  const loadSellerTab = async () => {
    try {
      const response = await axios.get("http://localhost:8006/seller/sellertab/all");
      setSellerTab(response.data);
    } catch (error) {
      console.error("Error loading sellertab:", error);
    }
  };

  const fetchPropTabDetails = async (proptabId) => {
    try {
      const response = await axios.get(`http://localhost:8006/seller/proptab/${proptabId}`);
      setSellerTabData((prevData) => ({
        ...prevData,
        proptab: { ...response.data, proptabId: response.data.proptabId },
      }));
    } catch (error) {
      console.error("Error fetching proptab details:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSellerTabData({ ...sellertabData, [name]: value });
  };

  const handlePropTabChange = (e) => {
    const { value } = e.target;
    setSelectedPropTabId(value);
    setSellerTabData((prevData) => ({
      ...prevData,
      proptab: { ...prevData.proptab, proptabId: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8010/seller/sellertab/${sellertabData.sellertabId}`, sellertabData);
        alert("Seller updated successfully!");
      } else {
        await axios.post("http://localhost:8010/seller/sellertab", sellertabData);
        alert("SellerTab added successfully!");
      }
      loadSellerTab();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating sellertab:", error);
    }
  };

  const resetForm = () => {
    setSellerTabData({
      name: "",
      emailid: "",
      phonenumber: "",
      proptab: {
        proptabId: "",
      },
    });
    setSelectedPropTabId("");
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (sellertab) => {
    setSellerTabData(sellertab);
    setSelectedPropTabId(sellertab.proptab && sellertab.proptab.proptabId);
    setIsEditing(true);
    setEditingId(sellertab.sellertabId);
  };

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this seller?");
    if (conf) {
      try {
        await axios.delete(`http://localhost:8010/seller/sellertab/${id}`);
        alert("Seller deleted successfully!");
        loadSellerTab();
      } catch (error) {
        console.error("Error deleting seller:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit SellerTab" : "Add SellerTab"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proptabId">
           Property :
          </label>
          <select
            id="proptabId"
            name="proptabId"
            value={selectedPropTabId}
            onChange={handlePropTabChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Property</option>
            {proptabRecords.map((proptab) => (
              <option key={proptab} value={proptab}>
                {proptab}
              </option>
            ))}
          </select>
        </div>

        {/* Form fields for sellertab data */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
           Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={sellertabData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailid">
           Email id:
          </label>
          <input
            type="text"
            id="emailid"
            name="emailid"
            value={sellertabData.emailid}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phonenumber">
            Phone Number:
          </label>
          <input
            type="number"
            id="phonenumber"
            name="phonenumber"
            value={sellertabData.phonenumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

      

       
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isEditing ? "Update SellerTab" : "Add SellerTab"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-4"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Seller Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Seller List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-3 px-4 text-left border-b font-medium">Seller ID</th>
                <th className="py-3 px-4 text-left border-b font-medium">Property ID</th>
                <th className="py-3 px-4 text-left border-b font-medium">Name</th>
                <th className="py-3 px-4 text-left border-b font-medium">Email Id</th>
                <th className="py-3 px-4 text-left border-b font-medium">Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {sellertab.map((sellertab) => (
                <tr key={sellertab.sellertabId} className="border-b">
                  <td className="py-2 px-4 text-gray-700">{sellertab.sellertabId}</td>
                  <td className="py-2 px-4 text-gray-700">{sellertab.proptab && sellertab.proptab.proptabId}</td>
                  <td className="py-2 px-4 text-gray-700">{sellertab.name}</td>
                  <td className="py-2 px-4 text-gray-700">{sellertab.emailid}</td>
                  <td className="py-2 px-4 text-gray-700">{sellertab.phonenumber}</td>
                 
                  
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(sellertab)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(sellertab.sellertabId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
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

export default SellerTab;
