import {Fetch_Users_Request, Fetch_Users_Success, Fetch_Users_Failure} from './userActionTypes';

const initialState = {
    loading: false,
    users: [],
    error: ''
}


const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case Fetch_Users_Request:
            return{
                ...state,
                loading: true
            }
        case Fetch_Users_Success:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }
        case Fetch_Users_Failure:
            return{
                loading: false,
                error: action.payload,
                users: []
            }
        default: return state;
    }
}


export default userReducer;