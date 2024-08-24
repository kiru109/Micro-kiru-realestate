import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SellerAllocation() {
  const [proptabRecords, setProptabRecords] = useState([]);
  const [selectedAllocation, setSelectedAllocation] = useState({
    seller: "Not-Allocated",
    proptabId: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadProptabData();
  }, []);

  const loadProptabData = async () => {
    try {
      const response = await axios.get("http://localhost:8006/seller/proptab/ids");
      const proptabIds = response.data;

      const proptabDataPromises = proptabIds.map((id) =>
        axios.get(`http://localhost:8006/seller/proptab/${id}`)
      );
      const proptabDataResponses = await Promise.all(proptabDataPromises);

      const proptabs = proptabDataResponses.map((response) => response.data);
      setProptabRecords(proptabs);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "proptabId") {
      const selectedProptab = proptabRecords.find((proptab) => proptab.proptabId === parseInt(value));
      if (selectedProptab) {
        setSelectedAllocation({
          ...selectedAllocation,
          proptabId: value,
          seller: selectedProptab.seller || "Not-Allocated",
        });
      }
    } else {
      setSelectedAllocation({ ...selectedAllocation, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const proptab = proptabRecords.find(
        (proptab) => proptab.proptabId === parseInt(selectedAllocation.proptabId)
      );
      if (proptab) {
        proptab.seller = selectedAllocation.seller;
        await axios.put(`http://localhost:8006/seller/proptab/${proptab.proptabId}`, proptab);
        alert("Seller updated successfully!");
        setIsEditing(false);
        navigate("/sellerDashboard");
      }
    } catch (error) {
      console.error("Error updating seller", error);
    }
  };

  const handleUpdateClick = (proptab) => {
    setSelectedAllocation({
      proptabId: proptab.proptabId,
      seller: proptab.seller,
    });
    setIsEditing(true);
  };

  const handleDeleteClick = async (proptab) => {
    try {
      proptab.seller = "Not-Allocated";
      await axios.put(`http://localhost:8006/seller/proptab/${proptab.proptabId}`, proptab);
      alert("Seller status updated to 'Not-Allocated'");
      loadProptabData();
    } catch (error) {
      console.error("Error updating seller status", error);
    }
  };

  const handleCancel = () => {
    setSelectedAllocation({
      seller: "Not-Allocated",
      proptabId: "",
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Seller</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller">
            Seller :
          </label>
          <select
            id="seller"
            name="seller"
            value={selectedAllocation.seller}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={!isEditing}
          >
            <option value="Not-Allocated">Not-Allocated</option>
            {[...Array(9).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proptabId">
            Property id :
          </label>
          <select
            id="proptabId"
            name="proptabId"
            value={selectedAllocation.proptabId}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled={isEditing}
          >
            <option value="">Select Property</option>
            {proptabRecords.map((record) => (
              <option key={record.proptabId} value={record.proptabId}>
                {record.proptabId} - {record.typeOfProptab}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!isEditing ? 'block' : 'hidden'}`}
        >
          Allocate Seller
        </button>
        {isEditing && (
          <>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
            >
              Cancel
            </button>
          </>
        )}
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Allocated Seller</h3>
        <table className="min-w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Property ID</th>
              <th className="px-4 py-2">Seller</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {proptabRecords.map((proptab) => (
              <tr key={proptab.proptabId}>
                <td className="border px-4 py-2">{proptab.proptabId}</td>
                <td className="border px-4 py-2">{proptab.berth || "Not-Allocated"}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleUpdateClick(proptab)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteClick(proptab)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
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

export default SellerAllocation;

