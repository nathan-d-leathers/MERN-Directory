import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"
import { useNavigate } from 'react-router-dom';

function Coworker({user}) {
    const navigate= useNavigate()
    const [coworker, setCoworker] = useState([]);
    const params = useParams();
    let base_url = "http://localhost:7500/api/workers";

    // console.log(`Here is the user data from the coworker page: ${user}`)

    // let user = {
    //     "id": "1",
    //     "name": "Mr. Manager",
    //     "role": "hr",
    //     "location": "Hartford",
    //     "contact": "123-456-7898",
    //     "salary": "$100,000",
    //     "permisions": false,
    //     "employees": ["2",4]
    // }
    const [permisions, setPermisions] = useState(false)

    useEffect(()=>{
        fetch(`${base_url}/${params.id}`)
        .then((fetchedCoworker)=>fetchedCoworker.json())
        .then((resultJson) => setCoworker(resultJson))
        
    }, [])

    // function displaySalaray(){
    //     console.log({coworker})
    //     // if (id matches user id, show salary
    //     // || if user id is in logged in user's employee list
    //     // || if role === hr) show salary
    //     // else do not show salary
    // }

    // let user = {
    //     "id": "1",
    //     "name": "John Smith",
    //     "role": "employee",
    //     "location": "Hartford",
    //     "contact": "123-456-7898",
    //     "salary": "$100,000",
    //     "permisions": false,
    //     "employees": false
    // }
    // const [permisions, setPermisions] = useState(null)

    // useEffect(()=> {
    
    //     if (user.role == "manager" && coworker.id in user.employees) {
    //         setPermisions(true)
    //     } else {
    //         console.log("You do not manage this employee")
    //     }
    // },[])

    // console.log(coworker);

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
            <h1>Welcome to the Travelers Directory Co-Worker Page</h1>
            <p>you are logged in as {user.username}</p>
            <br/>
            <h2><u>{coworker.name}</u></h2>
            <h3>{coworker.role}</h3>
            <h3>{coworker.location}</h3>
            <h3>{coworker.contact}</h3>
            <h3>
                {(coworker.id == user.id || 
                user.role === "hr" 
                // || (user.role === "manager" && permisions) 
                ?
                <p>{coworker.salary}</p> :
                <p>You do not have permision to view this co-workers salary</p>
                )}
                </h3>
        </div>
    );
}

export default Coworker