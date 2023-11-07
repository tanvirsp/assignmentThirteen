import { useNavigate } from 'react-router-dom';
import './BigText.css';

const BigText = () => {
    const nagivete = useNavigate()

    return (
        <section className="big-text-section">
            <div className="container">
             <h2>WE ARE HERE TO HELP YOU <br /> TO MAKE YOUR PROJECT AWESOME</h2>
             <button onClick={() => nagivete("/contact")} className='contact-btn'>CONTACT US</button>
            </div>
            
        </section>
    );
};

export default BigText;