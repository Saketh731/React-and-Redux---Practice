import {Buy_IceCream} from './iceCreamActionTypes.js';

const initialState = {
    numberOfIceCreams: 20
}

const iceCreamRecucer = (state = initialState, action) => {
    switch (action.type) {
        case Buy_IceCream:
            return{
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }    
        default: return state
    }
}

export default iceCreamRecucer;