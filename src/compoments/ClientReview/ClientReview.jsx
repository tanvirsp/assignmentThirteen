import './ClientReview.css'
import pic1 from '../../assets/images/clients/01.jpg'
import pic2 from '../../assets/images/clients/02.jpg'

const ClientReview = () => {
    return (
        <section className="container">
             <div className='section-title'>
                <h3>HAPPY CLIENTS</h3>
            </div>
            <div className="review-grid">
                <div className="review-item">
                    <img src={pic1} alt="" />
                    <h5>JOHN SMITH</h5>
                    <p className='designation'>SMARTWAVE CEO</p>
                    <p >
                        "Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing cas non placerat mi."
                    </p>
                </div>
                <div className="review-item">
                    <img src={pic2} alt="" />
                    <h5>Bob Smith</h5>
                    <p className='designation'>SMARTWAVE CEO</p>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mipsum dolor sit amet, consectetur elitad adipiscing cas non placerat mi."
                    </p>
                </div>

            </div>
            
        </section>
    );
    
};

export default ClientReview;