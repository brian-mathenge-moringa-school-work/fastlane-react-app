import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function CarDetails() {
    const [car, setCar] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/cars/${id}`)
            .then(response => response.json())
            .then(data => setCar(data))
            .catch(error => console.error(error))
    }, [id])

    return (
        <div>
            <NavBar />
            <div className="car-details">
                <h1>{car.model}</h1>
                <img className="single-car-image" src={car.image} alt="Car" />
                <p className="single-car-model">Brand: {car.brand}</p>
                <p>Description: {car.description}</p>
                <p>Price: {car.price}</p>
                <p>Year of manufacture: {car.year_of_manufacture}</p>
                <p>Source country: {car.source_country}</p>
                <p>Availability: {car.availability}</p>
                <p>Drive: {car.drive}</p>
                <p>Mileage: {car.mileage}</p>
                <p>Engine size: {car.engine_size}</p>
                <p>Fuel: {car.fuel}</p>
                <p>Transmission: {car.transmission}</p>
            </div>
        </div>
    )
}

export default CarDetails