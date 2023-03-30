import React, { useContext, useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs'
import flm7 from "../images/flm7.jpg";
import { Cartcontext } from "../Context/Context"

function CarList(handleAddCar) {
    const [cars, setCars] = useState([]);
    const [cart, setCart] = useState([]);

    const { id, model, brand, image, description, price, year_of_manufacture, source_country, availability, drive, mileage, engine_size, fuel, transmission } = cars;

    useEffect(() => {
        fetch('http://localhost:4000/cars')
        .then(response => response.json())
        .then(data => setCars(data))
        .catch(error => console.error(error))
    }, [])

    const addToCart = (car) => {
        setCart([...cart, car])
    }

    const Globalstate=useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate)

    return(
        <div className="car-list">
            <NavBar />
            <div className="card-row" style={{ display: "flex", flexWrap: "wrap", borderRadius: "40px" }}>
                {cars.map((car )=> {
                    car.quantity = 1;
                return(
                    <div className="col-4" style={{ marginTop: "36px", borderRadius: "30px" }} key={car.id}>
                        <div className="card" style={{ width: "28rem" }}>
                            <a class="car-image-details" href="./"><img className="card-img-top" src={car.image} alt="Car" /></a>
                                <div className="card-body">
                                    <nav className="card-head">
                                        <span><p className="card-year">{car.year_of_manufacture}</p></span>
                                        <span><h5 className="card-model">{car.model}</h5></span>
                                    </nav>
                                    <nav className="car-segments">
                                        <span><p className="car-engine">{car.engine_size}</p></span>
                                        <span><p className="car-drive">{car.drive}</p></span>
                                        <span><p className="car-transmission">{car.transmission}</p></span>
                                    </nav>
                                    <p>{car.description}</p>
                                    <nav className="car-footer">
                                        <span><p className="car-price">{car.price}</p></span>
                                        {/* <span><p className="car-availability">{car.availability}</p></span> */}
                                    </nav>
                                    <nav className="navigation-buttons">
                                        <button className="cars-cart-button" onClick={() => dispatch({type:'ADD',payload:car})}>Add to Cart</button>
                                        <Link to={`/cars/${car.id}`} ><button className="view-button">View Car</button></Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        )
                })}
                    </div>
            </div>
    )
}

export default CarList