import React, { useState, useContext } from 'react';
import { Cartcontext } from '../Context/Context';
import NavBar from './NavBar';

function Cart() {

    const Globalstate=useContext(Cartcontext);
    const state = Globalstate.state
    const dispatch = Globalstate.dispatch;

    const total=state.reduce((total, car)=>{
        return(total+(parseInt((car.price).replace(/[^\d]/g, "")))*car.quantity)
    },0)

  return (
    <div className="cart">
        <h2 className="cart-header">Your Ride is Here!!</h2>
    {state.map((car, index) => {
        return (
            <div className="cart-card" key={index}>
            <img src={car.image} alt=""/>
            <p>{car.model}</p>
            <p>{car.quantity * (parseInt((car.price).replace(/[^\d]/g, "")))}</p>
            <div className="quantity">
                <button onClick={() => dispatch({type:'INCREASE',payload:car})}>+</button>
                <p>{car.quantity}</p>
                <button onClick={() => {
                    if(car.quantity > 1){
                        dispatch({type: "DECREASE", payload: car});
                    } else {
                        dispatch({type: "REMOVE", payload: car})
                    }
                }}>-</button>
            </div>
            <h2 onClick={() => dispatch({type:'REMOVE', payload: car})}>X</h2>


        </div>
        )
    })}
    {state.length>0&& <div className="total"><h2>{total}</h2></div>}
  </div>
  )
}

export default Cart;