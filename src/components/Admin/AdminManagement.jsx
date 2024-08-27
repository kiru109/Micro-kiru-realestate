import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function AdminManagement() {
  const [admins, setAdmins] = useState([]);
  const [adminData, setAdminData] = useState({
    adminId: "",
    name: "",
    userName: "",
    password: "",
    role: "admin",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    try {
      const response = await axios.get("http://localhost:8010/seller/admin/all");
      setAdmins(response.data);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8010/seller/admin/${adminData.appointmentId}`, adminData);
        alert("Admin updated successfully!");
      } else {
        await axios.post("http://localhost:8010/seller/admin", adminData);
        alert("Admin added successfully!");
      }
      loadAdmins();
      resetForm();
    } catch (error) {
      console.error("Error saving admin:", error);
    }
  };

  const resetForm = () => {
    setAdminData({
      adminId: "",
      name: "",
      userName: "",
      password: "",
      role: "admin",
    });
    setIsEditing(false);
  };

  const handleEdit = (admin) => {
    setAdminData(admin);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Do you want to delete this admin?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8010/seller/admin/${id}`);
        alert("Admin deleted successfully!");
        loadAdmins();
      } catch (error) {
        console.error("Error deleting admin:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Admin" : "Add Admin"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={adminData.name}
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
            value={adminData.userName}
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
            value={adminData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isEditing ? "Update Admin" : "Add Admin"}
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

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Admin List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-3 px-4 text-left border-b font-medium">Admin ID</th>
                <th className="py-3 px-4 text-left border-b font-medium">Name</th>
                <th className="py-3 px-4 text-left border-b font-medium">Username</th>
                <th className="py-3 px-4 text-left border-b font-medium">Password</th>
                <th className="py-3 px-4 text-left border-b font-medium">Role</th>
                <th className="py-3 px-4 text-left border-b font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.adminId} className="border-b">
                  <td className="py-2 px-4 text-gray-700">{admin.appointmentId}</td>
                  <td className="py-2 px-4 text-gray-700">{admin.name}</td>
                  <td className="py-2 px-4 text-gray-700">{admin.userName}</td>
                  <td className="py-2 px-4 text-gray-700">{admin.password}</td>
                  <td className="py-2 px-4 text-gray-700">{admin.role}</td>
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(admin)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(admin.adminId)}
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

export default AdminManagement;

