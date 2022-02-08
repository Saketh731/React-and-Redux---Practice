import {combineReducers} from 'redux';
import cakeReducer from './redux/cake/cakeReducer.js';
import iceCreamRecucer from './iceCream/iceCreamReducers.js';
import userReducer from './user/userReducer.js';
// import formReducer from 'redux-form';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamRecucer,
    user: userReducer
})

export default rootReducer;