
import './Header.css'
import logo from "../../assets/images/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
   
    return (
        <header>
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><NavLink className={ ({isActive}) => isActive ? "active": ""  } to="/">Home</NavLink> </li>
                    <li><NavLink className={ ({isActive}) => isActive ? "active": ""  } to="/about">About</NavLink> </li>
                    <li><NavLink className={ ({isActive}) => isActive ? "active": ""  } to="/project">Project</NavLink> </li>
                    <li><NavLink className={ ({isActive}) => isActive ? "active": ""  } to="/service">Service</NavLink> </li>
                    <li><NavLink className={ ({isActive}) => isActive ? "active": ""  } to="/blog">Blog</NavLink> </li>
                    <li><NavLink className={ ({isActive}) => isActive ? "active": ""  } to="/contact">Contact</NavLink> </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;