import { Link } from "react-router-dom";
import logo1 from "../images/Logo2.png"
import { FaOpencart } from 'react-icons/fa';

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
                        <Link to="/cars">Cars</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/signup" className="signup-button">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login" className="login-button">Login</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="cart-icon">
                            <FaOpencart />
                        </Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default NavBar