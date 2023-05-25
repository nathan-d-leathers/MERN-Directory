// import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Directory from "./components/Directory";
import Coworker from "./components/Coworker";
import Account from "./components/Account"
import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import {React, useState} from "react";

function App() {

  // let navigate = useNavigate()
  const [user,setUser] = useState({
    'username': '', 
    'password': ''
  })

  const [newUser, setNewUser] = useState({
    'name': '',
    'contact': '',
    'role': '',
    'location': '',
    'salary': '',
    'username': '',
    'password': ''
  })
    

  return( <div> 

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/register' element={<Register newUser={newUser} setNewUser={setNewUser}/>}/>
        <Route path='/directory' element={<Directory user={user} newUser={newUser}/>}/>
        <Route path='/directory/:id' element={<Coworker user={user}/>}/>
        <Route path='/account' element={<Account user={user}/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
 
};

export default App;
