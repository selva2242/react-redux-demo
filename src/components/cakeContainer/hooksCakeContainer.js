import React from 'react';
import {UseSelector, UseDispatch, useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../../redux/index'

const HooksCakeContainer = () => {
    const noOfCakes = useSelector(state=>state.cake.noOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Hooks NO of cakes = {noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cakes</button> 
        </div>
    )
}

export default HooksCakeContainer;
