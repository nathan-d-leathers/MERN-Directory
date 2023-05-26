import {React} from 'react';
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"

function Welcome() {
    
    const navigate = useNavigate();

    return (
        <div class='body'>
            <img src={umbrella} id="umbrella" />
            <h1>Welcome to the Travelers Enterprise Directory</h1>
            <h2>Login or Create Account below to view the directroy</h2>
            <button class="button" onClick={() => navigate('/login')}>Login</button>
            <button class="button" onClick={() => navigate('/register')}>Create Account</button>
        </div>
    )
};

export default Welcome