import React, { useState } from 'react';
import './OneTask.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OneTask = props => {
  //get data from props
  const data = props.data;
  // console.log(data);

  const [isComplete, setIsComplete] = useState(data.isComplete);

  //handle delete button
  const handleDelete = async id => {
    try {
      await axios
        .delete(`http://localhost:3300/taskData/delete/${id}`)
        .then(response => {
          alert('This task is deleted.');
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  //handle complete button

  const handleComplete = async id => {
    setIsComplete(!isComplete);
    try {
      await axios.patch(
        `http://localhost:3300/taskData/findOneAndUpdate/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="oneTask d-flex flex-column">
      <div>
        <h3>{data.title}</h3>
        <h5>{data.date}</h5>
        <p>{data.description}</p>
      </div>
      <div className="button_3 mt-auto p-2">
        <button
          className={`btn btn-warning ${
            isComplete ? 'complete' : 'incomplete'
          }`}
          onClick={() => handleComplete(data._id)}
        >
          {isComplete ? 'Mark inComplete' : <h6>Mark Complete</h6>}
        </button>{' '}
        <Link to = {`/edit/${data._id}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(data._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default OneTask;
