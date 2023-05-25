import {React} from 'react';
import { useNavigate } from 'react-router-dom';

function Account({user}) {

    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome to your Acount Page</h2>
            <hr/>
            <ul>
            {Object.entries(user).map(([key,value]) => {
                <li key={key}>
                    {value}
                </li>
            })}
            </ul>
            <hr/>
            <button onClick={() => navigate('../')}>Edit Account</button>
            <button onClick={() => navigate('../')}>Delete Account</button>
        </div>
    )
}

export default Account