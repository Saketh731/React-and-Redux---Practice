import React, { useEffect, useState } from 'react';
import './App.css';
// import {Link} from 'react-router-dom';

function UserDetails({ match }) {
    useEffect(() => {
        console.log(match);
        fetchItems();
    }, [])

    const [user, setUser] = useState({});

    const fetchItems = async() => {
        const data = await fetch(`https://api.github.com/users/${match.params.id}`)
        const userData = await data.json();
        console.log(userData);
        setUser(userData);
    }

    return ( 
        <div >
            <h1 > { user.url } </h1>
        </div>
    )
}

export default UserDetails;