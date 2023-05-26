import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"


function Directory({user, newUser, setUser}) {
    // console.log({user, newUser})

    const navigate = useNavigate();
    const [workerData, setWorkerData] = useState([]);
 
    let data_url = "http://localhost:7500/api/workers";

    useEffect(() =>{
        fetch(data_url)
        .then((response)=> response.json())
        .then((jsonData) => setWorkerData(jsonData))
        .catch(error => {
            console.error("Fetch Worker Data Failed: ", error)
        });
    }, []);

    function handleClick(id) {
        navigate(`/directory/${id}`);
    }
    
    const handleLogOut = () => {
        setUser({
          'username': '', 
          'password': ''
        })
        console.log(user)
        console.log(`user is now logged out`)
        navigate('../')
      };

    return (
        <div>
            <div class="d-flex">
            <button onClick={() => navigate('/')}>
                Home
            </button>
            <button onClick={() => navigate('/account')}>
                Profile
            </button>
            <button onClick={handleLogOut}>
                Logout
            </button>
            <div>
            User is currently logged on as: {(user.username || newUser.name)}
            </div>
            </div>
            <hr/>
            {/* <Navbar/> */}
            <img src={umbrella} id="umbrella" />
            <h2>Welcome to the Directory Page</h2> 
            <br/>
            <ul> 
                {workerData.map((worker) => (
                    <li key={worker.id} onClick={() => handleClick(worker.id)}>
                        {worker.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Directory