import {React} from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

function Welcome() {
    
    const navigate = useNavigate();

    return (
        <div className='welcome-body'>
            <h1>Welcome to the Travelers Enterprise Directory</h1>
            <h2>Login or Create Account below to view the employee directroy</h2>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Create Account</button>
        </div>
    )
};

export default Welcome