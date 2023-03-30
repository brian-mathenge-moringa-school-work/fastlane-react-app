import React from "react";
// import fastlane3 from "../images/fastlane3.jpg"
import flm1 from "../images/flm1.jpg"
import flm2 from "../images/flm2.jpg"
import flm3 from "../images/flm3.jpg"
import flm4 from "../images/flm4.jpg"
import flm7 from "../images/flm7.jpg"
import NavBar from "./NavBar";
function Home(){
    return(
      <div>
        <div>
            {/* <img className="img1" src={flm7} alt='featured_car'></img> */}
            <div className="homecontent">
            <NavBar />
                <div className="homeinnercont">
                    <h1 className="headtopic">FASTLANE LUXURY MOTORS</h1>
                    <p className="P1">DRIVE INTO YOUR DREAMS</p>
                    <p>Our mission at Fastlane Luxury Motors is to provide our customers with a world-class experience in the purchase and ownership of high-end luxury cars. </p>
                </div>
            </div>
        </div>
    </div>
    )}

export default Home