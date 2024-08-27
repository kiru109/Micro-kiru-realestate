import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewProducts.css';

function Admin() {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    fetchId: ""
  });
  const [sellerDetails, setSellerDetails] = useState(null);

  const navigate = useNavigate();

  const fetchIdFromBackend = () => {
    axios.get("http://localhost:8043/fetchId")
      .then((res) => {
        setInputData({ ...inputData, fetchId: res.data.id });
        fetchSellerDetails(res.data.id);
      })
      .catch((err) => console.log(err));
  };

  const fetchSellerDetails = (id) => {
    axios.get(`http://localhost:8043/seller/${id}`)
      .then((res) => {
        setSellerDetails(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get("http://localhost:8043/products")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAccept = () => {
    alert("Accepted");
    // Add your accept logic here
  };

  const handleReject = () => {
    alert("Rejected");
    // Add your reject logic here
  };

  return (
    <div id="all">
      <div
        id="add2"
        className="d-flex mt-0 mb-8 w-100 vh-98 justify-content-center align-items-center"
      >
        <div className="w-50 mt-4 border bg-danger p-5">
          <form>
            <h1>Scheduling Appointments</h1>
            <br />
            <div>
              <button type="button" onClick={fetchIdFromBackend} className="btn btn-light">
                Fetch ID
              </button>
              <input
                type="text"
                name="fetchId"
                className="form-control"
                placeholder='fetch id'
                value={inputData.fetchId}
                readOnly
              />
            </div>
            <br />
            {sellerDetails && (
              <div>
                <h3>Seller Details</h3>
                <p><strong>ID:</strong> {sellerDetails.id}</p>
                <p><strong>Land Name:</strong> {sellerDetails.landname}</p>
                <p><strong>Land Size:</strong> {sellerDetails.landsize}</p>
                <p><strong>Phone Number:</strong> {sellerDetails.phoneNumber}</p>
                <p><strong>Email ID:</strong> {sellerDetails.emailId}</p>
                <p><strong>Amenities:</strong> {sellerDetails.amenities}</p>
                <img src={sellerDetails.imageUrl} alt="Seller Land" style={{ width: '100%', height: 'auto' }} />
              </div>
            )}
            <br />
            <div>
              <button type="button" onClick={handleAccept} className="btn btn-light">
                Accept
              </button>
              <button type="button" onClick={handleReject} className="btn btn-light">
                Reject
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-75 mx-auto mt-5">
        <h2>Product List</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.fetchId}>
                <td>{record.fetchId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
