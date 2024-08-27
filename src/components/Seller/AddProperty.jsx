// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './ViewProducts.css';

// function AddProperty() {
//   const [records, setRecords] = useState([]);
//   const [inputData, setInputData] = useState({
//     id: "",
//     landName: "",
//     landSize: "",
//     phoneNumber: "",
//     emailId: "",
//     imageUrl: "",
//     amenities: ""
//   });

//   const naviget = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8010/proptab")
//       .then((res) => {
//         setRecords(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     let result = validateValues(inputData);

//     if (result === true) {
//       axios
//         .post("http://localhost:8010/proptab", inputData)
//         .then((res) => {
//           alert("Product added Successfully");
//           console.log(inputData);
//           naviget("/");
//         })
//         .catch((err) => console.log(err));
//     } else {
//       alert("Please Enter the Valid Inputs!!!");
//     }
//   };

//   const validateValues = (inputData) => {
//     if (inputData.landName.length === 0) {
//       alert("Please enter Land Name !!! ");
//       return false;
//     } else if (inputData.emailId.length === 0) {
//       alert("Please enter the Email ID !!!");
//       return false;
//     } else {
//       return true;
//     }
//   };

//   return (
//     <div id="all">
//       <div
//         id="add2"
//         className="d-flex w-100 vh-100 justify-content-center align-items-center"
//       >
//         <div className="w-50 border bg-light p-5">
//           <form onSubmit={handleSubmit}>
//             <h1>Enter Land Details</h1>
//             <br />
//             <div>
//               <label htmlFor="id">ID :</label>
//               <input
//                 type="text"
//                 name="id"
//                 className="form-control"
//                 placeholder='enter id'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, id: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label htmlFor="landName">Land Name :</label>
//               <input
//                 type="text"
//                 name="landName"
//                 className="form-control"
//                 placeholder='enter land name'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, landName: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label htmlFor="landSize">Land Size :</label>
//               <input
//                 type="text"
//                 name="landSize"
//                 className="form-control"
//                 placeholder='enter land size'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, landSize: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label htmlFor="phoneNumber">Phone Number :</label>
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 className="form-control"
//                 placeholder='enter phone number'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, phoneNumber: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label htmlFor="emailId">Email ID :</label>
//               <input
//                 type="email"
//                 name="emailId"
//                 className="form-control"
//                 placeholder='enter email id'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, emailId: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label htmlFor="imageUrl">Image URL :</label>
//               <input
//                 type="text"
//                 name="imageUrl"
//                 className="form-control"
//                 placeholder='enter image url'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, imageUrl: e.target.value })
//                 }
//               />
//             </div>

//             <div>
//               <label htmlFor="amenities">Amenities :</label>
//               <input
//                 type="text"
//                 name="amenities"
//                 className="form-control"
//                 placeholder='enter amenities'
//                 onChange={(e) =>
//                   setInputData({ ...inputData, amenities: e.target.value })
//                 }
//               />
//             </div>
//             <br />

//             <button className="btn btn-info" name="submit" role='submit'>Submit</button>
//           </form>
//         </div>
//       </div>

//       <div className="w-75 mx-auto mt-5">
//         <h2>Property List</h2>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Land Name</th>
//               <th>Land Size</th>
//               <th>Phone Number</th>
//               <th>Email ID</th>
//               <th>Image</th>
//               <th>Amenities</th>
//             </tr>
//           </thead>
//           <tbody>
//             {records.map((record) => (
//               <tr key={record.id}>
//                 <td>{record.id}</td>
//                 <td>{record.landName}</td>
//                 <td>{record.landSize}</td>
//                 <td>{record.phoneNumber}</td>
//                 <td>{record.emailId}</td>
//                 <td><img src={record.imageUrl} alt="Land" style={{ width: '100px' }} /></td>
//                 <td>{record.amenities}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AddProperty;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ViewProducts.css';

function AddProperty() {
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

  return (
    <div id="all">
      <div
        id="add2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center"
      >
        <div className="w-50 border bg-danger p-5">
          <form onSubmit={handleSubmit}>
            <h1>Enter Land Details</h1>
            <br />
            <div>
              <label htmlFor="id">ID :</label>
              <input
                type="text"
                name="id"
                className="form-control"
                placeholder='enter id'
                onChange={(e) =>
                  setInputData({ ...inputData, id: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="landName">Land Name :</label>
              <input
                type="text"
                name="landName"
                className="form-control"
                placeholder='enter land name'
                onChange={(e) =>
                  setInputData({ ...inputData, landName: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="landSize">Land Size :</label>
              <input
                type="text"
                name="landSize"
                className="form-control"
                placeholder='enter land size'
                onChange={(e) =>
                  setInputData({ ...inputData, landSize: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="phoneNumber">Phone Number :</label>
              <input
                type="text"
                name="phoneNumber"
                className="form-control"
                placeholder='enter phone number'
                onChange={(e) =>
                  setInputData({ ...inputData, phoneNumber: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="emailId">Email ID :</label>
              <input
                type="email"
                name="emailId"
                className="form-control"
                placeholder='enter email id'
                onChange={(e) =>
                  setInputData({ ...inputData, emailId: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="imageUrl">Image URL :</label>
              <input
                type="text"
                name="imageUrl"
                className="form-control"
                placeholder='enter image url'
                onChange={(e) =>
                  setInputData({ ...inputData, imageUrl: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="amenities">Amenities :</label>
              <input
                type="text"
                name="amenities"
                className="form-control"
                placeholder='enter amenities'
                onChange={(e) =>
                  setInputData({ ...inputData, amenities: e.target.value })
                }
              />
            </div>
            <br />

            <button className="btn btn-info" name="submit" role='submit'>Submit</button>
          </form>
        </div>
      </div>

      {/* <div className="w-75 mx-auto mt-5">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default AddProperty;
