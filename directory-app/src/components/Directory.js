import React, {useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';

function Directory() {

    // const navigate = useNavigate();
    const [workerData, setWorkerData] = useState([]);
    // // double check this url
    let data_url = "http://localhost:3000/api/workers";


    const fetchWorkerData = () => {
        fetch(data_url)
        .then((response)=> response.json())
        .then((jsonData) => setWorkerData(jsonData))
        // .catch(error => {
        //     console.error("Fetch Worker Data Failed: ", error)
        // });
    };

    useEffect(fetchWorkerData(), []);

    // console.log(workerData)

    return (
        <div>
            <h1>Welcome to the Directory Page</h1>
            <br/>
            <h2>All Routes Working So Far!</h2>
            {/* <ul> 
                {workerData.map((worker) => (
                    <li key={worker.id}>{worker.name}</li>
                ))}
            </ul> */}
            <p>{workerData}</p>
        </div>
    );
}

export default Directory