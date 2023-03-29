import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

function Cars() {
    // const [cars, setCars] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:4000/cars')
    //     .then(response => response.json())
    //     .then(data => setCars(data))
    //     .catch(error => console.error(error))
    // }, [])

    return(
        <div>
            <NavBar />
            <h1>Cars Page</h1>
        </div>
    )
}

export default Cars