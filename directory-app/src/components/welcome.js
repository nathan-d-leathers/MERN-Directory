import {React} from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

function Welcome() {

    const navigate = useNavigate();

    return (
        <div className='welcome-body'>
            <h1>This is the Welcome Page</h1>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
};

export default Welcome