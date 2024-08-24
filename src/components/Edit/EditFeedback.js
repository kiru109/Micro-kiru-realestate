import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

function EditFeedback() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8005/feedback/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8005/feedback", data).then((res) => {
      alert("Feedback Updated Successfully");
      navigate("/View");
    });
  };

  return (
    <div class="body">
      <div class="cards">
        
          <form onSubmit={handleSubmit}>
            <h2 id="align">Update Feedback Data</h2>
            <div>
              <label htmlFor="feedbackid">ID :</label>
              <input
                type="number"
                disabled
                name="feedbackid"
                className="form-control" required
                value={data.feedbackid}
                //onChange={(e) => setData({ ...data, id: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                className="form-control" required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="description">Description :</label>
              <input
                type="text"
                name="description"
                className="form-control" required
                value={data.description}
                onChange={(e) => setData({ ...data, description: e.target.value })}
              />
            </div>
            <br/>
            <button id="value" className="btn btn-info ">Update</button>
          </form>
        </div>
    </div>
  );
}

export default EditFeedback;
