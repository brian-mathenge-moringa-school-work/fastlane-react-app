import React from "react";
import NavBar from "./NavBar";
import { Row, Col } from 'react-bootstrap';
import fastlane4 from '../images/fastlane4.jpg'


function About() {
    return(
        <div className="aboutcontent">
            <NavBar />
            <section className="about-section">
      <h2 className="about-section__primary">
      Experience the thrill of the ride with us
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
          Drive away with confidence and peace of mind
          </h4>
          <p className="about-section__desc">
          Our goal is to exceed our customers' expectations at every turn, delivering a seamless and enjoyable buying experience that reflects the unparalleled quality and craftsmanship of the cars we sell.
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <img src={fastlane4} className="img-fluid" alt="ride" />
        </Col>
      </Row>
    </section>
        </div>
    )
}

export default About;