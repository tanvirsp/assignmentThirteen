import './ServiceBanner.css';
import icon1 from '../../assets/images/icons/icon1.png'
import icon2 from '../../assets/images/icons/icon2.png'
import icon3 from '../../assets/images/icons/icon3.png'
import icon4 from '../../assets/images/icons/icon4.png'
import ServiceCard from '../ServiceCard/ServiceCard';
import { useNavigate } from 'react-router-dom';





const ServiceBanner = () => {
    const  nagivate = useNavigate();

    //service data
    const services = [
        {
            name: "Brand Design",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec leo.",
            icon: icon1
        },
        {
            name: "Graphic Design",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec leo.",
            icon: icon2
        },
        {
            name: "UI/UX Design",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec leo.",
            icon: icon3
        },
        {
            name: "Layout Design",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec leo.",
            icon: icon4
        },
    ]


    return (
        <section className='service-section'>
            <div className="container">
                <div className='service-content'>
                    <div className='service-text'>
                        <h2>These are our services</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quidem nostrum velit itaque sapiente animi suscipit incidunt non dolorem voluptate.
                        </p>
                        <button onClick={() => nagivate("/contact")} >Contact</button>

                    </div>
                    <div className='service-items'>
                        {
                            services.map( (item, index) => <ServiceCard key={index} item={item} />)
                        }
                        
                        
                        

                    </div>
                    <div>

                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ServiceBanner;