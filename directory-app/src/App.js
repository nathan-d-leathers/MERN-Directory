// import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Directory from "./components/Directory";
import Coworker from "./components/Coworker";
import Account from "./components/Account"
import {BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import umbrella from "./assets/umbrella2.jpeg"

function App() {

  // let navigate = useNavigate()

  return( <div> 
    {/* <Link to="/">Home</Link>
    <Link to="/account">Home</Link> */}
    <hr/>
    <img src={umbrella} id="umbrella" />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/directory' element={<Directory/>}/>
        <Route path='/directory/:id' element={<Coworker/>}/>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
 
};

export default App;
