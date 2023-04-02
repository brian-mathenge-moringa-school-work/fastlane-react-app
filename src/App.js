import React, { useState } from "react";
import "./App.css"
import Home from "./Components/Home";
import NavBar from './Components/NavBar';
import Cars from './Components/Cars';
import Footer from './Components/Footer'
import CarDetails from './Components/CarDetails'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Cart from './Components/Cart';
import Contacts from "./Components/Contacts";
import { BrowserRouter as Router,Routes,Route,redirect } from 'react-router-dom';
import "../src/App.css"
import { ToastContainer } from "react-toastify";

function App() {

  // const { carItems } = data;
  // const [cartItems, setCartItems] = useState([]);

  // const handleAddCar = (car) => {
  //   const CarExist = cartItems.find((item) => item.id === car.id);
  //   if(CarExist) {
  //     setCartItems(cartItems.map((item) => item.id === car.id ?
  //     {...CarExist, quantitu: CarExist.quantity + 1}: item)
  //     );
  // } else {
  //     setCartItems([...cartItems, { ...car, quantity: 1 }]);
  //   }
  // }


  
  return (
    <div className="App">
      <ToastContainer theme="colored"></ToastContainer>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/cars/:id' element={<CarDetails />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;