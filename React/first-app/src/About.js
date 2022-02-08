import React from 'react';
import './App.css';

function About(props) {
    console.log(props.val);
    return(
        <div className="App">
            <h1>About Page {props.val}</h1>
        </div>
    )
}

export default About;