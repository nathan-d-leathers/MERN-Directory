import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"

function Login({user, setUser}) {

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const {name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name] : value,
        }))
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        // setUser({
        //     'username': '',
        //     'password': ''
        // });
        navigate("../directory")
    };


    return (
        <div>
            <img src={umbrella} id="umbrella" />
            <h1>Welcome to the Login Page</h1>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input 
                    type="text" 
                    name="username"
                    value={user.username} 
                    onChange={handleInputChange} 
                    required/>
                </label>
                <p></p>
                <label>
                    Password:
                    <input 
                    type="text" 
                    name="password"
                    value={user.password} 
                    onChange={handleInputChange} 
                    required/>
                </label>
                </form>
            <br/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <br/>
            <hr/>
            <a onClick={() => navigate('../register')}>Create Account Instead</a>
        </div>
    )
}

export default Login