import {React} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Login Page</h1>
            <br/>
            <button onClick={() => navigate('../directory')}>Go To Directory</button>
            <br/>
            <a onClick={() => navigate('../register')}>Create Account Instead</a>
        </div>
    )
}

export default Login