import React from 'react';
import '../App.css'
import { buyCake } from '../redux/cake/cakeActions';
import {connect} from 'react-redux';
import '../App.css';
import { Link } from 'react-router-dom';

function CakeContainer(props){
    const linkStyle = {
        color: "white",
        backgroundColor: "black",
    }
    return(
        <div className="App">
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <ul className="nav-links">
                <Link to="/newcakecontainer" style={linkStyle}>
                    <li>New Cake Container</li>
                </Link> 
                <Link to="/itemcontainercake" style={linkStyle}>
                    <li>ItemContainer Cake</li>
                </Link>
                <Link to="/itemcontainericecream" style={linkStyle}>
                    <li>ItemContainer IceCream</li>
                </Link>
            </ul>
        </div>
    )
}

const mapStateToProps = state=>{
    return{
        numberOfCakes: state.cake.numberOfCakes  
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer);