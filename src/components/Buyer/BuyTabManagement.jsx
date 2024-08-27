// import React, { useState, useEffect } from "react";

// import axios from "axios";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { FaPlus, FaEdit, FaEye, FaSignOutAlt } from 'react-icons/fa';
// import Appointmentform from './Appointmentform';
// function BuyTabManagement() {
//   const [buytabRecords, setBuyTabRecords] = useState([]);
//   const [selectedbuytabId, setSelectedBuyTabId] = useState(null);
//   const [buytabData, setBuyTabData] = useState({
//     name: "",
//     emailid: "",
//     phoneNumber: "",
//     location: "",
//     gender: "",
//     age: "",
//     proptab: {
//       proptabId: "-1",
//     },
//   });

//   const navigate = useNavigate(); // Initialize navigate function

//   // Load all buyers data on component mount
//   useEffect(() => {
//     loadBuyTabData();
//   }, []);

//   const loadBuyTabData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8010/buyer/buytab/all");
//       setBuyTabRecords(response.data);
//     } catch (error) {
//       console.error("Error loading buyers data:", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setBuyTabData({ ...buytabData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (selectedbuytabId) {
//         await axios.put(`http://localhost:8010/buyer/buytab/${selectedbuytabId}`, buytabData);
//         alert("Buyer updated successfully!");
//       } else {
//         await axios.post("http://localhost:8010/buyer/buytab", buytabData);
//         alert("Buyer added successfully!");
//       }
//       setBuyTabData({
//         name: "",
//         emailid: "",
//         phoneNumber: "",
//         location: "",
//         gender: "",
//         age: "",
//         proptab: {
//           PropTabId: "",
//         },
//       });
//       loadBuyTabData();
//     } catch (error) {
//       console.error("Error saving buyer:", error);
//     }
//   };

//   const handleEdit = (buytab) => {
//     setSelectedBuyTabId(buytab.buytabId);
//     setBuyTabData(buytab);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8010/buyer/buytab/${id}`);
//       alert("Buyer deleted successfully!");
//       loadBuyTabData();
//     } catch (error) {
//       console.error("Error deleting buyer:", error);
//     }
//   };

//   const handleAppointmentform = () => {
//     navigate("/Appointmentform"); // Redirect to Appointment page
//   };

//   return (
   
//       <div className="container bg-white p-5">
//       <center><h1><b>Explore Your Property</b></h1></center>
//       <div className="p-5 row">
//         <div className="g-grid gap-5 d-flex align-items-center">
//           <div className="card" style={{ width: '18rem' }}>
//             <img src="https://th.bing.com/th/id/OIP.XlhJhA4a0CPUYZPUpzb8ygHaD6?w=800&h=423&rs=1&pid=ImgDetMain" className="card-img-top" alt="press1" />
//             <div className="card-body">
//               <p className="card-text">Appaswamy 9sends Theni Community WorkingClub.</p>
//               <a href="/Appointmentform" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleAppointmentform}>
//               <FaSignOutAlt className="mr-2" /> Appointmentform
//             </a>
//           </div>
               
             
//             </div>
//           </div>
//           <div className="card" style={{ width: '18rem' }}>
//             <img src="https://th.bing.com/th/id/OIP.2OOPgzcI7lFn4blKXjDUkAAAAA?w=474&h=266&rs=1&pid=ImgDetMain" className="card-img-top" alt="press2" />
//             <div className="card-body">
//               <p className="card-text">Max Properties 12sends Madurai Gym access</p>
//               <button
//                 onClick={handleAppointmentform}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//           <div className="card" style={{ width: '18rem' }}>
//             <img src="https://th.bing.com/th/id/OIP.bouY0RTOaBN5dyr7gKEBJAHaD3?w=900&h=470&rs=1&pid=ImgDetMain" className="card-img-top" alt="press3" />
//             <div className="card-body">
//               <p className="card-text">Adithya Groups 10sends Coimbatore Community play area</p>
//               <button
//                 onClick={handleAppointmentform}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//           <div className="card" style={{ width: '18rem' }}>
//             <img src="https://1.bp.blogspot.com/-T0HayfXVcq0/XOzeJPyjZyI/AAAAAAAA-ws/BQ6bZR0h2c4ojQrkWR07LT8bDpbbGasTwCLcBGAs/s1600/7.jpg" className="card-img-top" alt="press4" />
//             <div className="card-body">
//               <p className="card-text">Magicbricks property 13sends Chennai community game center.</p>
//               <button
//                 onClick={handleAppointmentform}
//                 className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//         </div>
       
              
            
       
       
    
  
//   );
// }

// export default BuyTabManagement;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';

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

  const navigate = useNavigate(); // Initialize navigate function

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
      alert("Buyer deleted successfully!");
      loadBuyTabData();
    } catch (error) {
      console.error("Error deleting buyer:", error);
    }
  };

  const handleAppointmentform = () => {
    navigate("/Appointmentform"); // Redirect to Appointment page
  };

  return (
    <div className="container bg-white p-5">
      <center><h1><b>Explore Your Property</b></h1></center>
      <div className="p-5 row">
        <div className="g-grid gap-5 d-flex align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://th.bing.com/th/id/OIP.XlhJhA4a0CPUYZPUpzb8ygHaD6?w=800&h=423&rs=1&pid=ImgDetMain" className="card-img-top" alt="press1" />
            <div className="card-body">
              <p className="card-text">Appaswamy 9sends Theni Community WorkingClub.</p>
              <a href="/Appointmentform" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleAppointmentform}>
                <FaSignOutAlt className="mr-2" /> Book Appointment
              </a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://th.bing.com/th/id/OIP.2OOPgzcI7lFn4blKXjDUkAAAAA?w=474&h=266&rs=1&pid=ImgDetMain" className="card-img-top" alt="press2" />
            <div className="card-body">
              <p className="card-text">Max Properties 12sends Madurai Gym access</p>
              <a href="/Appointmentform" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleAppointmentform}>
                <FaSignOutAlt className="mr-2" /> Book Appointment
              </a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://th.bing.com/th/id/OIP.bouY0RTOaBN5dyr7gKEBJAHaD3?w=900&h=470&rs=1&pid=ImgDetMain" className="card-img-top" alt="press3" />
            <div className="card-body">
              <p className="card-text">Adithya Groups 10sends Coimbatore Community play area</p>
              <a href="/Appointmentform" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleAppointmentform}>
                <FaSignOutAlt className="mr-2" /> Book Appointment
              </a>
            </div>
          </div>
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://1.bp.blogspot.com/-T0HayfXVcq0/XOzeJPyjZyI/AAAAAAAA-ws/BQ6bZR0h2c4ojQrkWR07LT8bDpbbGasTwCLcBGAs/s1600/7.jpg" className="card-img-top" alt="press4" />
            <div className="card-body">
              <p className="card-text">Magicbricks property 13sends Chennai community game center.</p>
              <a href="/Appointmentform" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center transition" onClick={handleAppointmentform}>
                <FaSignOutAlt className="mr-2" /> Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTabManagement;
