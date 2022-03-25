import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';


const Shop = (props) => {
    const dispatch = useDispatch();
    const{incCount,decCount}=bindActionCreators(actionCreators,dispatch);
    const {withdrawtMoney,depositMoney}=bindActionCreators(actionCreators,dispatch);

    
    return (
        <div>
            <h2 className='my-3'>Deposit/Withdraw balance</h2>
            {/* <button className="btn btn-primary mx-2" onClick={()=>dispatch(actionCreators.withdrawtMoney(100))}>-</button>
             Update balance
            <button className="btn btn-primary mx-2"  onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={()=>{withdrawtMoney(100)}}>-</button>
             Update balance
            <button className="btn btn-primary mx-2"  onClick={()=>{depositMoney(100)}}>+</button>

            <button className="btn btn-primary mx-2" onClick={()=>{decCount(1)}}>-</button>
             Update Count
            <button className="btn btn-primary mx-2"  onClick={()=>{incCount(1)}}>+</button>
        <h1>{props.name}</h1>
        </div>
    )
}

export default Shop
