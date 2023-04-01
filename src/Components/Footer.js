import React from "react";

function Footer() {
    return(
        <div className="footer">
        {/* <h5 className="awards">Our Awards */}
         <p className="footer-mission">We're committed to finding your perfect ride. </p>
        {/* </h5>  */}
            <div className="footercont">
                <h5 className="layout">Company
                    <p className="home-footer">Home</p>
                    <p className="cars-footer">Cars</p>
                    <p className="contacts-footer">Contacts</p>
                </h5> 
                <h5 className="footer-socials">Engage with us on Social Media
                <p className="instagram-footer"><span>Instagram  </span>@FastlaneLuxury </p>
                <p className="twitter-footer"><span>Twitter  </span>@fastlane_luxury </p>
                </h5>
                <h5 className="footer-contacts">Get in touch with us
                <p className="phone1-footer"><span>Phone </span>+2123-456-788 </p>
                <p className="phone2-footer"><span>Phone </span>+2123-456-789 </p>
                </h5>

            
            </div>
            <div className="copyright">
                  <h5>Copyright @2023 All Rights  Reserved | FASTLANE LUXURY MOTORS</h5>
             </div>
        </div>
    )
}

export default Footer