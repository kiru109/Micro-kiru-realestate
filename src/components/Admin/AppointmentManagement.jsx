import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function AppointmentManagement() {
  const [appointments, setAppointments] = useState([]);
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    userName: "",
    password: "",
    role: "appointment",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:8006/seller/appointment/all");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error loading appointments:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:8006/seller/appointment/` + editingId, appointmentData);
        alert("Appointment updated successfully!");
      } else {
        await axios.post("http://localhost:8006/seller/appointment", appointmentData);
        alert("Appointment added successfully!");
      }
      loadAppointments();
      resetForm();
    } catch (error) {
      console.error("Error adding/updating appointment:", error);
    }
  };

  const resetForm = () => {
    setAppointmentData({
      name: "",
      userName: "",
      password: "",
      role: "appointment",
    });
    setIsEditing(false);
    setEditingId(null);
  };

  const handleEdit = (appointment) => {
    setAppointmentData({
      name: appointment.name,
      userName: appointment.userName,
      password: appointment.password,
      role: appointment.role,
    });
    setIsEditing(true);
    setEditingId(appointment.appointmentId);
  };

  const handleDelete = async (id) => {
    const conf = window.confirm("Do you want to delete this appointment?");
    if (conf) {
      try {
        await axios.delete(`http://localhost:8006/seller/appointment/${id}`);
        alert("Appointment deleted successfully!");
        loadAppointments();
      } catch (error) {
        console.error("Error deleting appointment:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">{isEditing ? "Edit Appointment" : "Add Appointment"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={appointmentData.name}
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
            value={appointmentData.userName}
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
            value={appointmentData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isEditing ? "Update Appointment" : "Add Appointment"}
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

      {/* Appointment Table */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Appointment List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-3 px-4 text-left border-b font-medium">Appointment ID</th>
                <th className="py-3 px-4 text-left border-b font-medium">Name</th>
                <th className="py-3 px-4 text-left border-b font-medium">Username</th>
                <th className="py-3 px-4 text-left border-b font-medium">Password</th>
                <th className="py-3 px-4 text-left border-b font-medium">Role</th>
                <th className="py-3 px-4 text-left border-b font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.appointmentId} className="border-b">
                  <td className="py-2 px-4 text-gray-700">{appointment.appointmentId}</td>
                  <td className="py-2 px-4 text-gray-700">{appointment.name}</td>
                  <td className="py-2 px-4 text-gray-700">{appointment.userName}</td>
                  <td className="py-2 px-4 text-gray-700">{appointment.password}</td>
                  <td className="py-2 px-4 text-gray-700">{appointment.role}</td>
                  <td className="py-2 px-4 flex space-x-4">
                    <button
                      onClick={() => handleEdit(appointment)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(appointment.appointmentId)}
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

export default AppointmentManagement;
