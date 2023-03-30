import React, { useState } from "react";
import "./App.css"
import Home from "./Components/Home";
import NavBar from './Components/NavBar';
import Cars from './Components/Cars';
import Footer from './Components/Footer'
import CarDetails from './Components/CarDetails'
import Signup from './Components/Signup'
import Cart from './Components/Cart';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "../src/App.css"

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
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/cars/:id' element={<CarDetails />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;