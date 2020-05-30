import React from 'react';
import { buyIceCream } from '../../redux/index'
import {connect} from 'react-redux'

const IceCreamContainer = (props) => {
    return(
        <div>
            <h2>NO OF CAKES - {props.noOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return{
        noOfIceCream : state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream : ()=> dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)
(IceCreamContainer);