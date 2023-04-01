import React from "react";
import fastlane2 from "../images/fastlane2.png"
import fastlane3 from "../images/fastlane3.jpg"
import fastlane4 from "../images/fastlane4.jpg"
import flm1 from "../images/flm1.jpg"
import flm2 from "../images/flm2.jpg"
import flm3 from "../images/flm3.jpg"
import flm5 from "../images/flm5.jpg"
import flm4 from "../images/flm4.jpg"
import flm7 from "../images/flm7.jpg"
import bmw from "../images/bmw-logo.png"
import ford from "../images/ford-logo.png"
import gm from "../images/gm-logo.png"
import landrover from "../images/landrover-logo.png"
import mini from "../images/mini-logo.png"
import mitsubishi from "../images/mitsubishi-logo.png"
import nissan from "../images/nissan-logo.png"
import porsche from "../images/porsche-logo.png"
import subaru from "../images/subaru-logo.png"
import tesla from "../images/tesla-logo.png"
import toyota from "../images/toyota-logo.png"
import volkswagen from "../images/vw-logo.png"
import carsearch from "../images/car.png"
import pay from "../images/pay.png"
import mail from "../images/mail.png"
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
            <p className="brand-message">Visit our car showroom today and see our extensive selection of brands and models. </p>
            <div className="brand-icons1">
                <div>
                    <img className="brand-icon" src={bmw} alt="bmw-icon" />
                </div>
                <div>
                    <img className="brand-icon" src={ford} alt="ford-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={gm} alt="gm-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={landrover} alt="landrover-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={mini} alt="mini-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={mitsubishi} alt="mitsubishi-icon"/>
                </div>
            </div>
            <div className="brand-icons2">
                <div>
                    <img className="brand-icon" src={nissan} alt="nissan-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={porsche} alt="porsche-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={subaru} alt="subaru-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={tesla} alt="tesla-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={toyota} alt="toyota-icon"/>
                </div>
                <div>
                    <img className="brand-icon" src={volkswagen} alt="volkswagen-icon"/>
                </div>
            </div>
                <div className="about1">
                    <img className="about-car-image" src={fastlane2} alt="car-about" />
                <div>
                    <h2 className="about1-car-header">Experience the thrill of the ride with us</h2>
                    <p className="about1-car-desc">We are committed to offering the finest selection of vehicles, exceptional customer service, and personalized attention to detail</p>
                </div>
            </div>
            <div className="about2">
                <div>
                    <h2 className="about2-car-header">Making car buying simple and affordable</h2>
                    <p className="about2-car-desc">Our goal is to exceed our customers' expectations at every turn, delivering a seamless and enjoyable buying experience that reflects the unparalleled quality and craftsmanship of the cars we sell</p>
                </div>
                <img className="about2-car-image" src={flm5} alt="car-about" />
            </div>
            <div className="process-container">
                <p className="process-summary">Owning your dream car is a 3-step process</p>
                <div className="process-section">
                    <div className="process-header-container">
                        <img className="process-image" src={carsearch} alt="car-about" />
                        <h4 className="process-header">Select your car</h4>
                        <p classname="process-desc">Browse through our collection in kenya or a choice of ready for export units carefully handpicked by our international team in Singapore,Japan & the UK and choose your preferred unit.</p>
                    </div>
                    <div className="process-header-container">
                        <img className="process-image" src={mail} alt="car-about" />
                        <h4 className="process-header">Make an Enquiry</h4>
                        <p classname="process-desc">Get in touch with our sales team for an invoice or visit us at our Diamond plaza II offices in Nairobi for further information.</p>
                    </div>
                    <div className="process-header-container">
                        <img className="process-image" src={pay} alt="car-about" />
                        <h4 className="process-header">Payment</h4>
                        <p classname="process-desc">Pay & drive off with your vehicle for kenyan available cars. Place an order,pay the CIF amount via bank transfer and sit back us we ship your vehicle to your preferred port of choice (for importation clients).</p>
                    </div>
                </div>
            </div>
            {/* <div className="sunset-rideoff">
                <img className="sunset-rideoff-image" src={fastlane3} alt="ride-off" />
                <h2 className="sunset-rideoff-desc">Visit us today and ride off into the sunset!</h2>
            </div> */}
        </div>
    </div>
    )}

export default Home