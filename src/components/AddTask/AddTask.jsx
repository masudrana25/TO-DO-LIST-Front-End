import React, { useState } from 'react';
import './AddTask.css';
import axios from 'axios';


const AddTask = () => {
  
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3300/addTask', {
        title: title,
        date: date,
        description: description,
      })
      .then(result => {
        console.log(result);
        window.location.reload();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <section id="add_task">
        <div className="addTask">
          <h3>Add New Task </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="">
                {' '}
                <h4>Task Title</h4>{' '}
              </label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter Your Task Title Name"
                className="form-control"
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">
                <h4>Date</h4>
              </label>
              <br />
              <input
                type="text"
                name="date"
                id="date"
                placeholder="Enter Task Date"
                className="form-control"
                onChange={e => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="">
                <h4>Description of Your Task</h4>
              </label>{' '}
              <br />
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Enter the Description of Your Task"
                className="form-control"
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
              id="handleAddTask"
            >
              Add To Task
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddTask;
