import React, { useState, useContext, useEffect } from 'react';
import { Cartcontext } from '../Context/Context';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Grid, Header, Segment } from "semantic-ui-react";
import { toast } from 'react-toastify';

function Cart() {

    const Globalstate=useContext(Cartcontext);
    const state = Globalstate.state
    const dispatch = Globalstate.dispatch;


    const handleClick = (event) => {
        event.preventDefault();
        toast.success('Order placed successfully');
        usenavigate('/cars')
        // console.log('Place your order');
      };

    const total=state.reduce((total, car)=>{
        return(total+(parseInt((car.price).replace(/[^\d]/g, "")))*car.quantity)
    },0)

    const usenavigate = useNavigate()

    useEffect(()=>{
        let email = sessionStorage.getItem('email');
        if(email==='' || email === null){
            usenavigate('/login')
        }
    },[]);

  return (
    <div>
        <NavBar />
    <div className="cart">
        <h2 className="cart-header">Your Ride is Here!!</h2>
    {state.map((car, index) => {
        return (
            <div className="cart-card" key={index}>
            <img src={car.image} alt=""/>
            <p className="cart-model">{car.model}</p>
            <p className="cart-price">{car.quantity * (parseInt((car.price).replace(/[^\d]/g, "")))}</p>
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
            <h2 className="X-button" onClick={() => dispatch({type:'REMOVE', payload: car})}>X</h2>


        </div>
        )
    })}
    {state.length>0&& <div className="total"><h2>{total}</h2></div>}
  </div>
  <div className="place-order-container">
                <Button className="place-order-button" color="olive" fluid size="large" onClick={handleClick}>
                  Checkout
                </Button>
                </div>
  </div>
  )
}

export default Cart;