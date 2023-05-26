import {React} from 'react';
import { useNavigate } from 'react-router-dom';

function Account({user, setUser, newUser, setNewUser}) {

    const navigate = useNavigate();

    const handleLogOut = () => {
        setUser({
          'username': '', 
          'password': ''
        })
        console.log(user)
        console.log(`user is now logged out`)
        navigate('../')
      };
    
    const deleteAccount = () => {
        
        alert("Are You Sure you Want To Delete Your Account? This Action Can Not Be Undone.")
        setNewUser({
        'name': '',
        'contact': '',
        'role': '',
        'location': '',
        'salary': '',
        'username': '',
        'password': '',
        'id': '',
        'employees': []
        })
        navigate('../')
    }

    return (
        <div>
            <button onClick={() => navigate('/')}>
                Home
            </button>
            <button onClick={() => navigate('/account')}>
                Profile
            </button>
            <button onClick={() => navigate('../directory')}>
                Back to Directory
            </button>
            <button onClick={handleLogOut}>
                Logout
            </button>
            <div>
            User is currently logged on as: {(user.username || newUser.name)}
            </div>
            <hr/>
            <h2><u>Welcome to your Acount Page</u></h2>
            <ul>
            <h4>{user.username || newUser.name}</h4>
            <h4>{user.password || newUser.password}</h4>
            {newUser ? 
            <div>
            <h4>{newUser.name}</h4>
            <h4>{newUser.role}</h4> 
            <h4>{newUser.contact}</h4> 
            <h4>{newUser.location}</h4> 
            <h4>{newUser.salary}</h4> 
            </div>:
            <p>change role to view other options</p>
            }
            <h5><u>Employee List: </u></h5>
            {newUser.role == 'manager' ?
            <ul>
            {newUser.employees.map((e) => (
                    <li key={e} >
                        {e}
                    </li>
            ))}
            </ul>
            : 
            <p>You role does not require you manage any employees</p>
            }
            </ul>
            <hr/>
            <button onClick={() => navigate('../register')}>Edit Account</button>
            <button class="delete" onClick={deleteAccount}>Delete Account</button>
        </div>
    )
}

export default Account