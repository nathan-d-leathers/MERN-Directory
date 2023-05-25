import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"

function Directory({user, newUser}) {
    console.log({user, newUser})
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
    
    return (
        <div>
            <button onClick={() => navigate('/')}>
                Home
            </button>
            <button onClick={() => navigate('/account')}>
                Profile
            </button>
            <hr/>
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