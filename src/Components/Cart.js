import React, { useState, useContext } from 'react';
import { Cartcontext } from '../Context/Context';
import NavBar from './NavBar';

function Cart() {

    const Globalstate=useContext(Cartcontext);
    const state = Globalstate.state
    const dispatch = Globalstate.dispatch

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
                <button>+</button>
                <p>{car.quantity}</p>
                <button>-</button>
            </div>
            <h2>X</h2>


        </div>
        )
    })}
  </div>
  )
}

export default Cart;