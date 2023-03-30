import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function CarDetails() {
    const [car, setCar] = useState({});
    const { id } = useParams();
    const [ carsByBrand, setCarsByBrand ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/cars/${id}`)
            .then((response) => response.json())
            .then((data) => setCar(data))
            .catch((error) => console.error(error));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:4000/cars`)
            .then((response) => response.json())
            .then(data => {
                const carsFromSameBrand = data.filter(item => item.brand === car.brand && item.id !== car.id);
                setCarsByBrand(carsFromSameBrand);
            })
            .catch((error) => console.error(error));
    }, [id, car.brand])

    return (
        <div className="car-details-page">
            <NavBar />
            <div className="car-details">
                <img className="single-car-image" src={car.image} alt="Car" />
                <div className="single-car-details">
                    <h1 className="single-car-model">{car.model}</h1>
                    <p className="single-car-brand">Brand: {car.brand}</p>
                    <p className="single-car-brand">{car.description}</p>
                    <p className="single-car-price">Price: {car.price}</p>
                    <p className="single-car-brand">Year of manufacture: {car.year_of_manufacture}</p>
                    <p className="single-car-brand">Source country: {car.source_country}</p>
                    <p className="single-car-brand">Availability: {car.availability}</p>
                    <p className="single-car-brand">Drive: {car.drive}</p>
                    <p className="single-car-brand">Mileage: {car.mileage}</p>
                    <p className="single-car-brand">Engine size: {car.engine_size}</p>
                    <p className="single-car-brand">Fuel: {car.fuel}</p>
                    <p className="single-car-brand">Transmission: {car.transmission}</p>
                    <button className="details-cart-button">Add to Cart</button>
                </div>
            </div>
            <h2 className="suggested-cars-title">Suggested vehicles for you</h2>
            <div className="similar-card-row" style={{ color: "white", display: "flex", flexWrap: "wrap", borderRadius: "40px"}}>
                {carsByBrand.map((car) => (
                    <div className="col-4" style={{ marginTop: "36px", borderRadius: "30px" }} key={car.id}>
                    <div className="card" style={{ width: "28rem" }}>
                      <a class="car-image-details" href="./"><img className="card-img-top" src={car.image} alt="Car" /></a>
                      <div className="card-body">
                        <nav className="card-head">
                          <span><p className="card-year">{car.year_of_manufacture}</p></span>
                          <span><h5 className="card-model">{car.model}</h5></span>
                        </nav>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default CarDetails