import React from 'react';
import './Home.css';
import AddTask from './../AddTask/AddTask';
import ShowTask from './../ShowTask/ShowTask';

const Home = () => {
  return (
    <div>
      <section id='header_title'>
        <h1>My To-Do-List</h1>
      </section>

      <section>
        <AddTask></AddTask>
      </section>

      <section>
        <ShowTask></ShowTask>
      </section>
    </div>
  );
};

export default Home;
