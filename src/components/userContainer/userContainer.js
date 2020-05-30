import React, {useEffect}from 'react';
import { fetchUsers } from '../../redux/index';
import {connect} from 'react-redux'

const UserContainer = (props) => {
    const user = props.users
    useEffect(()=>{
        console.log("callingFetchUsers")
        props.fetchUsers()
    }
    , [])

    const b =  user.Loading ? (
        <h2>Loading</h2>
    ) : user.error ? (
        <h2>{user.error}</h2>
    ) : (
        <div>
            {
                user && user.users && user.users.map(user=> <p>{user.name}</p>) 
            }
        </div>
    )

    console.log(b)

    return b
}

const mapStateToProps = state =>{
    console.log("state", state)
    return {
        users : state.user
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(UserContainer);