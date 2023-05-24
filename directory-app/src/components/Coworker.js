import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Coworker() {

    const [coworker, setCoworker] = useState([]);
    const params = useParams();
    let base_url = "http://localhost:3000/api/";
    
    async function getCoworker() {
        let fetchedCoworker = await fetchCoworker(params.id);
        setCoworker(fetchedCoworker);
      }
    
    async function fetchCoworker() {
        let result = await fetch(`${base_url}/workers/${params.id}`);
        return result.json();
      }

    useEffect(getCoworker(), []);

    function displaySalaray(){
        // if (id matches user id, show salary
        // || if user id is in logged in user's employee list
        // || if role === hr) show salary
        // else do not show salary
    }

    return (
        <div>
            <h1>Welcome to the Travelers Directory Co-Worker Page</h1>
            <br/>
            <h2><u>{coworker.name}</u></h2>
            <h3>{coworker.role}</h3>
            <h3>{coworker.location}</h3>
            <h3>{coworker.contact}</h3>
            {/* condtionally render salary based on display salary logic */}
        </div>
    );
}

export default Coworker