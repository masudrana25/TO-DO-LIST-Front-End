import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import EditTask from './components/EditTask/EditTask';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit/:id" element={<EditTask />}></Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
