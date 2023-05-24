import {React} from 'react';
import { useNavigate } from 'react-router-dom';
    
function Register() {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Register Account Page</h1>
            <br/>
            <button onClick={() => navigate('../directory')}>Go To Directory</button>
            <br/>
            <a onClick={() => navigate('../login')}>Go to Login</a>
        </div>
    )
}

export default Register