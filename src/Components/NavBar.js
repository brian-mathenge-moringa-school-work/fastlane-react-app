import { Link } from "react-router-dom";
import logo1 from "../images/Logo2.png"

function NavBar() {
    return (
        <div className="cont1">
            <div className="logo-image">
                <img className="logo-image" src={logo1} alt="Logo"/>
            </div>
            {/* <h2 className="header1">FASTLANE LUXURY MOTORS</h2> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/cars">Cars</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar