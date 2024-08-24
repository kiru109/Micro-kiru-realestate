import React, { useState, useEffect } from "react";
import axios from "axios";

function BuyTabManagement() {
  const [buytabRecords, setBuyTabRecords] = useState([]);
  const [selectedbuytabId, setSelectedBuyTabId] = useState(null);
  const [buytabData, setBuyTabData] = useState({
    name: "",
    emailid: "",
    phoneNumber: "",
    location: "",
    gender: "",
    age: "",
    proptab: {
      proptabId: "-1",
    },
  });

  // Load all buyers data on component mount
  useEffect(() => {
    loadBuyTabData();
  }, []);

  const loadBuyTabData = async () => {
    try {
      const response = await axios.get("http://localhost:8010/buyer/buytab/all");
      setBuyTabRecords(response.data);
    } catch (error) {
      console.error("Error loading buyers data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyTabData({ ...buytabData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedbuytabId) {
        await axios.put(`http://localhost:8010/buyer/buytab/${selectedbuytabId}`, buytabData);
        alert("Buyer updated successfully!");
      } else {
        await axios.post("http://localhost:8010/buyer/buytab", buytabData);
        alert("Buyer added successfully!");
      }
      setBuyTabData({
        name: "",
        emailid: "",
        phoneNumber: "",
        location: "",
        gender: "",
        age: "",
        proptab: {
          PropTabId: "",
        },
      });
      loadBuyTabData();
    } catch (error) {
      console.error("Error saving buyer:", error);
    }
  };

  const handleEdit = (buytab) => {
    setSelectedBuyTabId(buytab.buytabId);
    setBuyTabData(buytab);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8010/buyer/buytab/${id}`);
      alert("buyer deleted successfully!");
      loadBuyTabData();
    } catch (error) {
      console.error("Error deleting buyer:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Manage Buyers</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Name">
           Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={buytabData.name}
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
            value={buytabData.emailid}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={buytabData.phoneNumber}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
           Location :
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={buytabData.location}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {selectedbuytabId ? "Update Buyer" : "Add Buyer"}
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Buyers List</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email id</th>
              <th className="py-2 px-4 border-b">Phone Number</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">Age</th>
            </tr>
          </thead>
          <tbody>
            {buytabRecords.map((buytab) => (
              <tr key={buytab.buytabId}>
                <td className="py-2 px-4 border-b">{buytab.name}</td>
                <td className="py-2 px-4 border-b">{buytab.emailid}</td>
                <td className="py-2 px-4 border-b">{buytab.phoneNumber}</td>
                <td className="py-2 px-4 border-b">{buytab.location}</td>
                <td className="py-2 px-4 border-b">{buytab.gender}</td>
                <td className="py-2 px-4 border-b">{buytab.age}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded mr-2"
                    onClick={() => handleEdit(buytab)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                    onClick={() => handleDelete(buytab.buytabId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BuyTabManagement;
