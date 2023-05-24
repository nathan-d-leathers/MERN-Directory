import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Directory() {

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
            <h1>Welcome to the Directory Page</h1>
            <br/>
            <h2>All Routes Working So Far!</h2>
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