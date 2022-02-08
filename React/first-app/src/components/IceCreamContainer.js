import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {buyIceCream} from '../iceCream/iceCreamActions.js';

function IceCreamContainer(){
    const numberOfIceCreams = useSelector((state)=>state.iceCream.numberOfIceCreams);
    const dispatch = useDispatch();
    return(
        <div>
            <h2>(Hooks) Number Of IceCreams - {numberOfIceCreams}</h2>
            <button onClick={()=>dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
    )
}

export default IceCreamContainer;