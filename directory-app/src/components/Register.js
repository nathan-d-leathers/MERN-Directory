import {React} from 'react';
import { useNavigate } from 'react-router-dom';
    
function Register() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Register Account Page</h1>
            <br/>
            <form action="/user/register" method='POST'/>
                <label>
                    Name:
                    <input type="text" name="name" required/>
                </label>
            <br/>
                <label>
                    Phone Number:
                    <input type="number" name="contact" required/>
                </label>
            <br/>
                <label>
                    Job Role:
                    <input type="radio" id='employee' name="role" value="Employee"/>
                    <label for="employee">Employee</label><br/>
                    <input type="radio" id='humanResources' name="role" value="HumanResources"/>
                    <label for="humanResources">Human Resources</label><br/>
                    <input type="radio" id='manager' name="role" value="Manager"/>
                    <label for="manager">Manager</label><br/>
                </label>
            <br/>
                <label>
                    Work Location:
                    <input type="text" name="location" required/>
                </label>
            <br/>
                <label>
                    Salary:
                    <input type="number" name="salary" required/>
                </label>
            <br/>
                <label>
                    Username:
                    <input type="text" name="userName" required/>
                </label>
            <br/>
                <label>
                    Password:
                    <input type="password" name="password" required/>
                </label>
            <br/>
            <button onClick={() => navigate('../directory')}>Go To Directory</button>
            <br/>
            <a onClick={() => navigate('../login')}>Go to Login</a>
            <br/>
            <button type="submit">Register</button>
            <form/>
        </div>
        
    )
}

export default Register