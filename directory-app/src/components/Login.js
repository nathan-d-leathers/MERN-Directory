import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"

function Login() {

    const navigate = useNavigate();

    return (
        <div>
            <img src={umbrella} id="umbrella" />
            <h1>Welcome to the Login Page</h1>
            <br/>
            <form action="/user/register" method='POST'/>
                <label>
                    Username:
                    <input type="text" name="name" required/>
                </label>
            <br/>
            <form action="/user/register" method='POST'/>
                <label>
                    Password:
                    <input type="text" name="name" required/>
                </label>
            <br/>
            <button onClick={() => navigate('../directory')}>Submit</button>
            <br/>
            <hr/>
            <a onClick={() => navigate('../register')}>Create Account Instead</a>
        </div>
    )
}

export default Login