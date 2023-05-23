// import './App.css';
import Welcome from "./components/welcome";
import Login from "./components/login";
import Register from "./components/register";
import Directory from "./components/directory"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return( <div> 
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Welcome/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
        <Route path='/directory'element={<Directory/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
 
};

export default App;
