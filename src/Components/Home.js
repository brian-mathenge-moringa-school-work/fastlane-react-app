import React from "react";
import fastlane2 from "../images/fastlane2.png"
import fastlane4 from "../images/fastlane4.jpg"
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
            <div className="about1">
                <img className="about-car-image" src={fastlane2} alt="car-about" />
                <div>
                    <h2 className="about1-car-header">Experience the thrill of the ride with us</h2>
                    <p className="about1-car-desc">We are committed to offering the finest selection of vehicles, exceptional customer service, and personalized attention to detail. </p>
                </div>
            </div>
            <div className="about1">
                <div>
                    <h2 className="about2-car-header">Experience the thrill of the ride with us</h2>
                    <p className="about2-car-desc">We are committed to offering the finest selection of vehicles, exceptional customer service, and personalized attention to detail. </p>
                </div>
                <img className="about2-car-image" src={fastlane4} alt="car-about" />
            </div>
        </div>
    </div>
    )}

export default Home