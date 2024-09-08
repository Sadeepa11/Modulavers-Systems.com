import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo ,faAddressCard,faSimCard,faPhone} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import { Link } from 'react-scroll'; function BottomNav() {


    return (

        <nav className="col-12 bg-dark d-flex nav d-lg-none d-md-none d-xl-none d-xxl-none  fixed-bottom">

            <div className="logoLI-SM col-3"></div>

            <div className="col-9 nav2 d-flex">




                <ul className="nav-links d-flex gap-5 align-items-center">



                    <li className="li">
                        <Link to="home" smooth={true} duration={200}>
                        <FontAwesomeIcon icon={faIgloo} size="xl" />
                            </Link>
                    </li>
                    <li className="li" >
                        <Link to="about" smooth={true} duration={200} >
                        <FontAwesomeIcon icon={faAddressCard} size="xl"  />
                        </Link>
                    </li>
                    <li className="li">
                        <Link to="services" smooth={true} duration={200}>
                        <FontAwesomeIcon icon={faSimCard} size="xl"/>
                        </Link>
                    </li>
                    <li className="li">
                        <Link to="contact" smooth={true} duration={200}>
                        <FontAwesomeIcon icon={faPhone} size="xl"/>
                        </Link>
                    </li>
                </ul>


            </div>
        </nav>








    )
}

export default BottomNav;