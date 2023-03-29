import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/cars')
        .then(response => response.json())
        .then(data => setCars(data))
        .catch(error => console.error(error))
    }, [])

    return(
        <div className="car-list">
            <NavBar />
        <div className="card-row" style={{ display: "flex", flexWrap: "wrap", borderRadius: "40px" }}>
      {cars.map(car => (
        <div className="col-4" style={{ marginTop: "36px", borderRadius: "30px" }} key={car.id}>
          <a class="car-image-details" href="./"><div className="card" style={{ width: "28rem" }}>
            <img className="card-img-top" src={car.image} alt="Car" />
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
              <span><p className="car-availability">{car.availability}</p></span>
              </nav>
              {/* <button className="btn btn-danger" style={{ marginRight: "5px" }} onClick={() => deleteHouse(house.id)}>Delete</button>
              <button className="btn btn-secondary" style={{ marginRight: "30px" }} onClick={() => editHouse(house.id)}>Edit</button> */}
            </div>
          </div></a>
        </div>
      ))}
    </div>
    </div>
    )
}

export default CarList