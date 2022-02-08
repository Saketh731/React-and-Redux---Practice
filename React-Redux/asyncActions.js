const redux = require('redux');
const thunkMiddleWare = require('redux-thunk').default;
const axios = require('axios');

const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const Fetch_Users_Request = 'Fetch_Users_Request';
const Fetch_Users_Success = 'Fetch_Users_Success';
const Fetch_Users_Failure = 'Fetch_Users_Failure';

const fetchUsersRequest = () => {
    return {
        type: Fetch_Users_Request
    }
}

const fetchUsersSuccess = users => {
    return {
        type: Fetch_Users_Success,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: Fetch_Users_Failure,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Fetch_Users_Request:
            return {
                ...state,
                loading: true
            }
        case Fetch_Users_Success:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }
        case Fetch_Users_Failure:
            return {
                ...state,
                loading: false,
                error: action.payload,
                users: []
            }
        default:
            return state;
    }
}

//Action Creater
const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            // fetch("'https://api.github.com/users'")
            //     .then(response => response.json())
            //     .then(data => {
            //         const users = data.map((user) => user.id);
            //         dispatch(fetchUsersSuccess(users));
            //     })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            })
    }
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
console.log("Initial State - ", store.getState());
const unsubscribe = store.subscribe(() => {
    console.log("Updated State - ", store.getState());
})
store.dispatch(fetchUsers());
unsubscribe();