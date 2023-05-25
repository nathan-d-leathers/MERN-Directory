import {React} from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to your Acount Page</h2>
            <hr/>
            <ul>
                <h3>This is where the users data will go</h3>
            </ul>
            <hr/>
            <button onClick={() => navigate('../')}>Edit Account</button>
            <button onClick={() => navigate('../')}>Delete Account</button>
        </div>
    )
}

export default Login