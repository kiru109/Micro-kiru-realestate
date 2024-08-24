import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./View.css";

function ViewFeedback() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8005/feedback/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8005/feedback/" + id)
        .then((res) => {
          alert("record has deleted");
          navigate("/View");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div class="body2">
      <div class="container">
        <center><h1 className="text-center cardsHead">
          Feedback List
        </h1></center>
        <div className="text-end">
          <Link to="/create" className="btn btn-primary">
            Add +
          </Link>
          
        </div>
        <br />
          <table className=" tabless table-bordered  table-striped border shadow px-10 pb-10 rounded ">
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th key={i}>{c}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {records.map((d, i) => (
                <tr key={i}>
                  <td>{d.feedbackid}</td>
                  <td>{d.name}</td>
                  <td>{d.description}</td>

                  <td>
                    <Link
                      to={`/update/${d.feedbackid}`}
                      className="btn btn-sm btn-success "
                    >
                      Update
                    </Link>
                    <button
                      onClick={(e) => handleSubmit(d.feedbackid)}
                      className="btn btn-sm ms-1 btn-danger"
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

export default ViewFeedback;
