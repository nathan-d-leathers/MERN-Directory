import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg";

    
function Register({newUser, setNewUser}) {

    const navigate = useNavigate();
    // error below with setNewUser function
    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name] : value,
        }))
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newUser)
        navigate("../directory")
    };


    return (
            <div class='body'>
            <img src={umbrella} id="umbrella" />
            <h1>Welcome to the Register Account Page</h1>
            <br/>
            <form  onSubmit={handleSubmit} class='register'/>
            <label>
                    Name:
                    <input 
                    type="text" 
                    name="name"
                    value={newUser.name} 
                    onChange={handleInputChange} 
                    required/>
                </label>
            <br/>
            <label>
                    Phone Number:
                    <input 
                    type="text" 
                    name="contact"
                    value={newUser.contact} 
                    onChange={handleInputChange} 
                    required/> 
                </label>
            <br/>
                <label>
                    Job Role:
                    <input type="radio" id='employee' onChange={handleInputChange} name="role" value="employee"/>
                    <label for="employee">Employee</label><br/>
                    <input type="radio" id='hr' onChange={handleInputChange} name="role" value="hr"/>
                    <label for="hr">Human Resources</label><br/>
                    <input type="radio" id='manager' onChange={handleInputChange} name="role" value="manager"/>
                    <label for="manager">Manager</label><br/>
                </label>
            <br/>
            <label>
                    Location:
                    <input 
                    type="text" 
                    name="location"
                    value={newUser.location} 
                    onChange={handleInputChange} 
                    required/>
                </label>
            <br/>
            <label>
                    Salary:
                    <input 
                    type="text" 
                    name="salary"
                    value={newUser.salary} 
                    onChange={handleInputChange} 
                    required/>
                </label>
            <br/>
            <label>
                    Username:
                    <input 
                    type="text" 
                    name="username"
                    value={newUser.username} 
                    onChange={handleInputChange} 
                    required/>
                </label>
            <br/>
            <label>
                    Password:
                    <input 
                    type="text" 
                    name="password"
                    value={newUser.password} 
                    onChange={handleInputChange} 
                    required/>
                </label>
            <br/>
            <form/>
            <br/>
            <button onClick={() => navigate('../directory')} type="submit">Register</button>
            <br/>
            <a onClick={() => navigate('../login')}>Go to Login</a>
            </div>
        
    )
}

export default Register