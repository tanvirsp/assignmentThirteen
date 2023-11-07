import './OurCompany.css'
import company from '../../assets/images/icons/company.png'
import mission from '../../assets/images/icons/mission.png'

const OurCompany = () => {
    return (
        <section className="container">
            <div className="our-company">
                <div className='card'>
                    <img src={company} alt="Company" />
                    <h4>Our company</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio molestias quae iste suscipit labore voluptas? Quos nulla placeat tempora.
                    </p>
                </div>
                <div  className='card'>
                    <img src={mission} alt="Company" />
                    <h4>Mission</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio molestias quae iste suscipit labore voluptas? Quos nulla placeat tempora.
                    </p>
                </div>
            </div>
            
        </section>
    );
};

export default OurCompany;