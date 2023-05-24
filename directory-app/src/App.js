// import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Directory from "./components/Directory";
import Coworker from "./components/Coworker";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return( <div> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/directory' element={<Directory/>}/>
        <Route path='/directory/:id' element={<Coworker/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
 
};

export default App;
