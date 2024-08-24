import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function AddCompanyName() {
  const [inputData, setInputData] = useState({
    companyname: "",
    location: "",
    mobilenum: ""
  });


  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    // let result = validateValues(inputData);
    // setSubmitting(true);



    // if (result === true) {
      axios
        .post("http://localhost:8010/companyname", inputData)
        .then((response) => {
          alert("Data added Successfully");
          naviget("/viewpayroll");
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    // } else {
    //   alert("Please Enter the Valid Inputs!!!");
    // }
  };


  // validation Part for add user for student management system
  // const [errors, setErrors] = useState({});
  // const [submitting, setSubmitting] = useState(false);

  // const validateValues = (inputData) => {
  //   if (inputData.basic.length === 0) {
  //     alert("Please enter Basic pay !!! ");
  //     return false;
  //   } else if (inputData.hra.length === 0) {
  //     alert("Please enter HRA !!! ");
  //     return false;
  //   } else if (inputData.da.length === 0) {
  //     alert("Please enter DA !!!");
  //     return false;
  //   } else if (inputData.pf.length === 0) {
  //     alert("Please Enter the PF!!!");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };


  return (

    <div class="body4">
      <div class="cards">
        <form onSubmit={handleSubmit}>
          <h2 id="align">Add New Company Data</h2>

          <div>
            <lable htmlFor="companyname">companyname :</lable>
            <input
              id="a"
              type="text"
              name="companyname"
              className="form-control"
              placeholder="Enter companyname"required
              // onkeyup="sum();
              onChange={(e) =>
                setInputData({ ...inputData, companyname: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="location">location :</lable>
            <input
              id="b"
              type="text"
              name="location"
              className="form-control"
              placeholder="Enter location"required
              onChange={(e) =>
                setInputData({ ...inputData, location: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="mobilenum">mobilenum :</lable>
            <input
              id="c"
              type="text"
              name="mobilenum"
              className="form-control"
              placeholder="Enter mobilenum"required
              onChange={(e) =>
                setInputData({ ...inputData, mobilenum: e.target.value })
              }
            />
          </div>
         

      

        


          <br />
          <center><button className="btn btn-primary">Submit</button></center>
        </form>


      </div>
    </div>
  );
}

export default AddCompanyName;
