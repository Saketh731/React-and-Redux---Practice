const redux = require('redux');
const reduxLogger = require('redux-logger')

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;

const Buy_Cake = "Buy_Cake";
const Return_Cake = "Return_Cake";

const Buy_IceCream = "Buy_IceCream";

function buyCake() {
    return {
        type: Buy_Cake,
        info: 'Bought The Cake'
    }
}

function returnCake() {
    return {
        type: Return_Cake,
        info: 'Returned The Cake'
    }
}


function buyIceCream() {
    return {
        type: Buy_IceCream
    }
}

// (prevState, action) => newState

// const initialState = {
//     profits: true,
//     numberOfCakes: 10,
//     numberOfEmployees: 5
// }

const initialCakeState = {
    numberOfCakes: 10,
    profits: true
}

const initialIceCreamState = {
    numberOfIceCreams: 20,
    profits: true
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case Buy_Cake:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes - 1
//             }
//         case Return_Cake:
//             return {
//                 ...state,
//                 numberOfCakes: state.numberOfCakes + 1
//             }
//         default:
//             return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case Buy_Cake:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        case Return_Cake:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + 1
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case Buy_IceCream:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleWare(logger));
console.log("Initial State - ", store.getState());
const unsubscribe = store.subscribe(() => {
    // console.log("Updated State - ", store.getState());
})
store.dispatch(buyCake());
store.dispatch(returnCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();