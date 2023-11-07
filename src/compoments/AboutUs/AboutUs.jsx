import { useNavigate } from 'react-router-dom';
import myImage  from '../../assets/images/about.jpg'
import './AboutUs.css';

const AboutUs = () => {
    const nagivate = useNavigate();
    return (
        <section>
            <div className="container">
                <div className='about-section'>
                    <div>
                        <img src={myImage} alt="About Me" />
                    </div>
                    <div className='about-content'>
                        <h3>About Us</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                        <button onClick={() => nagivate("/about")} className='view-details'>VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;