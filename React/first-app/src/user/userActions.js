import {Fetch_Users_Request, Fetch_Users_Success, Fetch_Users_Failure} from './userActionTypes';
import axios from 'axios';

export const fetchUsersRequest = ()=>{
    return{
        type: Fetch_Users_Request
    }
}

export const fetchUsersSuccess = (users)=>{
    return{
        type: Fetch_Users_Success,
        payload: users
    }
}

export const fetchUsersFailure = (error)=>{
    return{
        type: Fetch_Users_Failure,
        payload: error
    }
}

export const fetchUsers = ()=>{
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error=>{
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        })
    }
}