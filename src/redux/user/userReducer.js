import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"

const inititalState  = {
    users : [],
    loading : true,
    error : ''
}

const userReducer = (state=inititalState, action) => {
    switch(action.type){
        case FETCH_USER_FAILURE : return {
            loading : false,
            error : action.payload,
            users : []
        }
        case FETCH_USER_REQUEST : return {
            ... state,
            loading : true,
        }
        case FETCH_USER_SUCCESS : return {
            error : '',
            loading : false,
            users : action.payload
        }

        default : return inititalState
    }
}

export default userReducer;