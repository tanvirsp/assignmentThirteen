import { useNavigate } from 'react-router-dom';
import './HeroSection.css'

const HeroSection = () => {
    const nagivate = useNavigate();
    return (
        <section className='hero-section'>
            <div className='hero-content'>
                <h1>SMART SERVICE</h1>
                <p>Your Online Service Destination</p>
                <button onClick={() => nagivate("/service")}>OUR SERVICES</button>

            </div>
            
        </section>
    );
};

export default HeroSection;