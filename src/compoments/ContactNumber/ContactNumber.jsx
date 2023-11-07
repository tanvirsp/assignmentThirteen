import './ContactNumber.css';
import phone from '../../assets/images/icons/phone-call.png';
import email from '../../assets/images/icons/mail.png';
import map from '../../assets/images/icons/location.png';

const ContactNumber = () => {
    return (
       <section style={{backgroundColor:" #89cef931 "}}>
            <div className='contact-info'>
                <div className='contact-item'>
                    <img src={phone} alt="Phone" />
                    <h5>01722 199479</h5>
                </div>
                <div className='contact-item'>
                    <img src={email} alt="Phone" />
                    <h5>tanvirgrpahic@gmail.com</h5>
                </div>
                <div className='contact-item'>
                    <img src={map} alt="Phone" />
                    <h5>Fulbria, Munshipara, Jamalpur Sadar, Jamalpur</h5>
                </div>

            </div>
        </section>
        
       
    );
};

export default ContactNumber;