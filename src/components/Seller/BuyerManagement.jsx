import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function BuyerManagement() {
  const [buyers, setBuyers] = useState([]);
  const [managerData, setManagerData] = useState({
    name: "",
    userName: "",
    password: "",
    role: "buyer",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadBuyers();
  }, []);

  const loadBuyers = async () => {
    try {
      const response = await axios.get("http://localhost:8010/seller/buyer/all");
      setBuyers(response.data);
    } catch (error) {
      console.error("Error loading buyers:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerData({ ...managerData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8010/seller/buyer/` + editingId, managerData);
        alert("Logistic Manager updated successfully!");
      } else {
        await axios.post("http://localhost:8010/seller/buyer", managerData);
        alert("Logistic Manager added successfully!");
      }
      loadBuyers();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating buyer:", error);
    }
  };

  const resetForm = () => {
    setManagerData({
      name: "",
      userName: "",
      password: "",
      role: "buyer",
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (manager) => {
    setManagerData(manager);
    setIsEditing(true);
    setEditingId(manager.buyerId);
  };

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this buyer?");
    if (conf) {
      try {
        await axios.delete(`http://localhost:8006/seller/buyer/${id}`);
        alert("Buyer deleted successfully!");
        loadBuyers();
      } catch (error) {
        console.error("Error deleting Buyer:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Logistic Manager" : "Add Logistic Manager"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={managerData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
            Username:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={managerData.userName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={managerData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isEditing ? "Update Manager" : "Add Manager"}
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

      {/* Buyer Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Buyer List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-3 px-4 text-left border-b font-medium">Buyer ID</th>
                <th className="py-3 px-4 text-left border-b font-medium">Name</th>
                <th className="py-3 px-4 text-left border-b font-medium">Username</th>
                <th className="py-3 px-4 text-left border-b font-medium">Password</th>
                <th className="py-3 px-4 text-left border-b font-medium">Role</th>
                <th className="py-3 px-4 text-left border-b font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {buyers.map((buyer) => (
                <tr key={buyer.buyerId} className="border-b">
                  <td className="py-2 px-4 text-gray-700">{buyer.buyerId}</td>
                  <td className="py-2 px-4 text-gray-700">{buyer.name}</td>
                  <td className="py-2 px-4 text-gray-700">{buyer.userName}</td>
                  <td className="py-2 px-4 text-gray-700">{buyer.password}</td>
                  <td className="py-2 px-4 text-gray-700">{buyer.role}</td>
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(buyer)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(buyer.buyerId)}
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

export default BuyerManagement;
