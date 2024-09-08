import "./header.css";
import { Link } from 'react-scroll';


function Header() {


    return (

        <nav className="col-12 bg-dark  nav d-none d-sm-none    d-md-flex d-lg-flex d-xl-flex d-xxl-flex" style={{position:"fixed",zIndex:2}}>

            <div className="col-3 nav1">




            </div>
            <div className="col-6 nav2 d-flex">

            
                    <ul className="nav-links d-flex gap-5 align-items-center">
                    
                        <li className="li">
                            <Link to="home" smooth={true} duration={200}>
                                Home
                            </Link>
                        </li>
                        <li className="li">
                            <Link to="about" smooth={true} duration={200}>
                                About
                            </Link>
                        </li>
                        <li className="li">
                            <Link to="services" smooth={true} duration={200}>
                                Services
                            </Link>
                        </li>
                        <li className="li">
                            <Link to="contact" smooth={true} duration={200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                

            </div>
        </nav>








    )
}

export default Header;