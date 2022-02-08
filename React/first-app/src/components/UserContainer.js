import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../user/userActions';

function UserContainer(){
    const userData = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    return userData.loading ? (
        <h2>loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData.users.map(user=> <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

export default UserContainer;