import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import umbrella from "../assets/umbrella.jpeg"
import { useNavigate } from 'react-router-dom';

function Coworker({user, setUser, newUser}) {
    const navigate= useNavigate()
    const [coworker, setCoworker] = useState([]);
    const params = useParams();

    let base_url = "http://localhost:7500/api/workers";

    useEffect(()=>{
        fetch(`${base_url}/${params.id}`)
        .then((fetchedCoworker)=>fetchedCoworker.json())
        .then((resultJson) => setCoworker(resultJson))
        
    }, [])

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
            <div class="logo">
            <img src={umbrella} id="umbrella" />
            <h1>Welcome to the Travelers Directory Co-Worker Page</h1>
            </div>
            <br/>
            <h2>Name: {coworker.name}</h2>
            <h3>Job Role: {coworker.role}</h3>
            <h3>Work Location: {coworker.location}</h3>
            <h3>Contact Information: {coworker.contact}</h3>
            <h3>
                {((coworker.id == user.id) || 
                (coworker.id == newUser.id)|| 
                (newUser.role == "hr") ||
                (newUser.role === "manager" && (newUser.employees.includes(coworker.name)))) 
                ?
                <p>Salary: {coworker.salary}</p> :
                <p>You do not have permision to view this co-workers salary</p>
                }
                </h3>
        </div>
    );
}

export default Coworker