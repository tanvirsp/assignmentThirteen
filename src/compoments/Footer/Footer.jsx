import './Footer.css'
import logo from '../../assets/images/logo-white.png';
import { CiFacebook,CiInstagram,CiYoutube } from 'react-icons/ci';

const Footer = () => {
    return (
        <footer>
            <div >
                <img src={logo} alt="" />
                <p>Copyright © All Right Reserved</p>
                <ul className='socialIcons'>
                    <li><a href="#"><CiFacebook /> </a></li>
                    <li><a href="#"> <CiInstagram /></a></li>
                    <li><a href="#"> <CiYoutube /></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;