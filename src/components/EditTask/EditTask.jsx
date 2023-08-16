import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  //get data and show in the update form
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3300/taskData/getEditData/${id}`)
        .then(res => {
          setTitle(res.data.title);
          setDate(res.data.date);
          setDescription(res.data.description);
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    try {
      axios.put(`http://localhost:3300/taskData/updateEditData/${id}`, {
        title: title,
        date: date,
        description: description,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section id="add_task">
        <div className="addTask">
          <h3>Edit Task </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">
                {' '}
                <h4>Task Title</h4>{' '}
              </label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                placeholder="Enter Your Task Title Name"
                className="form-control"
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">
                <h4>Date</h4>
              </label>
              <br />
              <input
                type="text"
                name="date"
                id="date"
                value={date}
                placeholder="Enter Task Date"
                className="form-control"
                onChange={e => setDate(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">
                <h4>Description of Your Task</h4>
              </label>{' '}
              <br />
              <input
                type="text"
                name="description"
                id="description"
                value={description}
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
              Update Edit Task
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default EditTask;
