import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";

function Addfeedback() {
  const [records, setRecords] = useState([]);
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState({
    feedbacknum: "",
    name: "",
    description: "",
    CompanyName:
    {
      companyid: "",
      companyname: "",
      location: "",
      mobilenum: "",
    }

  });
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios.get("http://localhost:8010/companyname/getCompanyNameid")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };


  const naviget = useNavigate();

  let handleChange = (e) => {
    if (e.target.name === "companyid") {
      console.log(e.target.value);
      const selectedRecordId = e.target.value;
      axios
        .get(`http://localhost:8010/companyname/` + selectedRecordId)
        .then((response) => {
          setInputData((inputData) => ({
            ...inputData, CompanyName: response.data
          }));

        })
    };
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    // let result = validateValues(inputData);
    // setSubmitting(true);



    // if (result === true) {
      axios
        .post("http://localhost:8010/feedback", inputData)
        .then((res) => {
          alert("Data added Successfully");
          naviget("/View");
          console.log(res.data);
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
  //   if (inputData.empname.length === 0) {
  //     alert("Please enter Employee Name !!! ");
  //     return false;
  //   } else if (inputData.department.length === 0) {
  //     alert("Please enter department Name !!! ");
  //     return false;
  //   } else if (inputData.city.length === 0) {
  //     alert("Please enter City Name !!!");
  //     return false;
  //   } else if (inputData.roll.length === 0) {
  //     alert("Please Enter the Valid roll!!!");
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  return (
    <div class="body4">      
        <div class="cards">
        <form onSubmit={handleSubmit} >
          <h2 id="align">Add New FEEDBACK Data</h2>
          <div>
            <lable htmlFor="feedbacknum">Number</lable>
            <input
              type="number"
              name="feedbacknum"
              className="form-control"
              placeholder="Feedback Number" required
              onChange={(e) =>
                setInputData({ ...inputData, feedbacknum: e.target.value })
              }
            />
          </div>
          <div>
            <lable htmlFor="name">name :</lable>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"required
              onChange={(e) =>
                setInputData({ ...inputData, name: e.target.value })
              }
            />
          </div>

          <div>
            <lable htmlFor="description">description :</lable>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Enter description"required
              onChange={(e) =>
                setInputData({ ...inputData, description: e.target.value })
              }
            />
          </div>

          <br />
          <div>
            <label htmlFor="companyid">Company Id :</label>

            <select
              class="form-select select"
              required="required"
              name="companyid"
              title="Select Company ID "
              onChange={handleChange}
            >
              <option name="companyid" selected="selected">
                Select One
              </option>
              {records.map((items) => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <br />
          <center><button className="btn btn-primary">Submit</button></center>
        </form>
      </div>
    </div>
  );
}

export default Addfeedback;