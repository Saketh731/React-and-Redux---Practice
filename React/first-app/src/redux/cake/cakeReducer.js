import { Buy_Cake } from './actionTypes.js';

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case Buy_Cake:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        default:
            return state;
    }
}

export default cakeReducer;