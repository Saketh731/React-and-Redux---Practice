import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Users(props) {

    useEffect(()=>{
        fetchUsers();
    },[])

    const [usersList, setUsersList] = useState([]);

    const fetchUsers = async ()=>{
        const data = await fetch("https://api.github.com/users");
        const users = await data.json();
        setUsersList(users);
        console.log(usersList, users);
    }
    return(
        <div className=""App>
            {
                usersList.map(user=>{
                    return(
                        <Link to={`/users/${user.id}`}  key={user.id}><h1>{user.login}</h1></Link>
                    ) 
                })
            }
        </div>
    )
}

export default Users;