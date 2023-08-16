import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OneTask from '../OneTask/OneTask';
import './ShowTask.css'

const ShowTask = () => {
  const [taskData, setTaskData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:3300/taskData');
        const tData = data.data;
        setTaskData(tData);
        // console.log(tData);
      } catch (error) {
         console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <h1 className='container headline'>Your Tasks:</h1>
    <div className='showTask container'>
      {
        taskData?.map(dt => <OneTask data = {dt} key ={dt._id}></OneTask>)
      }
      </div>
      </>
  );
};

export default ShowTask;