import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Directory from "./components/Directory";
import Coworker from "./components/Coworker";
import Account from "./components/Account"
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import {React, useState} from "react";

function App() {

  const [user,setUser] = useState({
    'username': '', 
    'password': '',
    'id': 1
  })

  const [newUser, setNewUser] = useState({
    'name': '',
    'contact': '',
    'role': '',
    'location': '',
    'salary': '',
    'username': '',
    'password': '',
    'id': 2,
    'employees': ['John Smith', 'Jane Doe', 'Creed Bratton']
  })
    

  return( <div> 

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/login' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/register' element={<Register newUser={newUser} setNewUser={setNewUser}/>}/>
        <Route path='/directory' element={<Directory user={user} setUser={setUser} newUser={newUser}/>}/>
        <Route path='/directory/:id' element={<Coworker user={user} setUser={setUser} newUser={newUser}/>}/>
        <Route path='/account' element={<Account user={user} setUser={setUser} newUser={newUser} setNewUser={setNewUser}/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
 
};

export default App;
