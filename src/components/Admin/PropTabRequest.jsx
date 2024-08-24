


import React, { useState } from 'react';
import axios from 'axios';

function PropTabRequest() {
  
  const [inputData, setInputData] = useState('');
  const [proptabData, setPropTabData] = useState({
    propname: '',
    propsize: '',
    propaddress: '',
    amenities: '',
    imageUrl: "",
    request: 'requested', 
  });

  
  const [message, setMessage] = useState('');

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropTabData({ ...proptabData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8010/seller/proptab', proptabData);
      setMessage('Property added successfully!');
      // Reset form data
      setPropTabData({
    propname: '',
    propsize: '',
    propaddress: '',
    amenities: '',
    imageUrl: "",
    request: 'requested', // Resetting request field to default
      });
    } catch (error) {
      setMessage('Error adding Property. Please try again.');
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propname">
           Property Name: 
          </label>
          <input
            type="text"
            id="propname"
            name="propname"
            value={proptabData.propname}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propsize">
           Property Size
          </label>
          <input
            type="text"
            id="propsize"
            name="propsize"
            value={proptabData.propsize}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="propaddress">
           Property Address
          </label>
          <input
            type="text"
            id="propaddress"
            name="propaddress"
            value={proptabData.propaddress}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amenities">
            Amenities
          </label>
          <input
            type="text"
            id="amenities"
            name="amenities"
            value={proptabData.amenities}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageUrl">Image URL :</label>
            <input
              type="text"
              name="imageUrl"
              value={proptabData.imageUrl}
              className="form-control"
              placeholder='enter image url'
              onChange={(e) =>
                setInputData({ ...inputData, imageUrl: e.target.value })
              }
            />
          </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Property
        </button>
      </form>

      {message && (
        <div className="mt-4 p-2 text-center">
          <p className="text-green-600">{message}</p>
        </div>
      )}
    </div>
  );
}

export default PropTabRequest;
