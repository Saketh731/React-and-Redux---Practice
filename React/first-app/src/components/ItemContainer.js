import React from 'react';
import {connect} from 'react-redux';
import { buyIceCream } from '../iceCream/iceCreamActions';
import { buyCake } from '../redux/cake/cakeActions';

function ItemContainer(props){
    return(
        <div className="App">
            <h2>{props.itemName} Items - {props.item}</h2>
            <button onClick={props.buyItem}>Buy {props.itemName} Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams;
    const itemName = ownProps.cake ? "Cake" : "IceCream"
    return{
       item : itemState,
       itemName: itemName
    }
}

const mapDispatchToProps = (dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return{
        buyItem: dispatchFunction
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemContainer);