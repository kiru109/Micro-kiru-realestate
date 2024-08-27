import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewProducts.css';
import { Link } from "react-router-dom";
import { FaPlus, FaEdit, FaEye, FaSignOutAlt } from 'react-icons/fa';
function AddProperty() {
    const [editingId, setEditingId] = useState(null); // To track the property being edited
    const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    
    id: "",
    landName: "",
    landSize: "",
    phoneNumber: "",
    emailId: "",
    imageUrl: "",
    amenities: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8010/proptab")
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => console.error("Error fetching records:", err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    
    // Confirmation alert
    const confirmSubmit = window.confirm("Submitted successfully!!!");
    
    if (confirmSubmit) {
      let result = validateValues(inputData);

      if (result === true) {
        axios
          .post("http://localhost:8010/proptab", inputData)
          .then((res) => {
            alert("Submitted successfully");
            console.log(inputData);
            navigate("/");
          })
          .catch((err) => console.error("Error submitting data:", err));
      } else {
        alert("Please Enter the Valid Inputs!!!");
      }
    }
  };

  const validateValues = (inputData) => {
    if (inputData.landName.trim() === "") {
      alert("Please enter Land Name !!! ");
      return false;
    } else if (inputData.emailId.trim() === "") {
      alert("Please enter the Email ID !!!");
      return false;
    } else {
      return true;
    }
  };
  const handleEdit = (id) => {
    const record = records.find(record => record.id === id);
    if (record) {
      setInputData(record);
      setFormMode('edit');
      setEditingId(id);
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    
    if (confirmDelete) {
      axios.delete(`http://localhost:8010/proptab/${id}`)
        .then((res) => {
          alert("Deleted successfully");
          setRecords(records.filter(record => record.id !== id));
        })
        .catch((err) => console.error("Error deleting data:", err));
    }
  };
  return (
    <div id="all">
      <div
        id="add2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center"
      >
        <div className="flex justify-end mb-4">
          <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition flex items-center">
            <FaPlus className="mr-2" /> Add
          </Link>
        </div>

      <div className="w-75 mx-auto mt-5">
        <h2>Property List</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Land Name</th>
              <th>Land Size</th>
              <th>Phone Number</th>
              <th>Email ID</th>
              <th>Image</th>
              <th>Amenities</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.landName}</td>
                <td>{record.landSize}</td>
                <td>{record.phoneNumber}</td>
                <td>{record.emailId}</td>
                <td><img src={record.imageUrl} alt="Land" style={{ width: '100px' }} /></td>
                <td>{record.amenities}</td>
                <td>
                  <button onClick={() => handleEdit(record.id)}>Edit</button>
                  <button onClick={() => handleDelete(record.id)}>Delete</button>
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

export default AddProperty;
