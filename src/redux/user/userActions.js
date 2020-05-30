import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios';

 export const fetchUsersRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUsersSuccess = user => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : user
    }
}

export const fetchUsersFailure = error => {
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        console.log("coming to disptach ")
        dispatch(fetchUsersSuccess)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            const errors = error.message;
            dispatch(fetchUsersFailure(error))
        })
    }
}

