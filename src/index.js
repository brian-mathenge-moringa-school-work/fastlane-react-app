import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Cars from './Components/Cars';
import Sidebar  from './Components/Sidebar';
import CarDetails from './Components/CarDetails'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "../src/App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/cars' element={<Cars />}/>
      <Route path='/cars/:id' element={<CarDetails />}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
