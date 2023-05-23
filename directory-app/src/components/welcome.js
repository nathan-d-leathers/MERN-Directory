import {React} from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {


    return (
        <div>
            <h1>Welcome to the Travelers Employee Directory</h1>
            <br/>
            {/* <button type="button">Login</button>
            <button type="button">Create Account</button> */}
            {/* <input type="button" value="Login" onClick={useNavigate("http://localhost:3000/login")}/> */}
        </div>
    )
}

export default Welcome