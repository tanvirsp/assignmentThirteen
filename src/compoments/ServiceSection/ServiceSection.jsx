import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceSection.css';
import icon1 from '../../assets/images/icons/icon1.png'
import icon2 from '../../assets/images/icons/icon2.png'
import icon3 from '../../assets/images/icons/icon3.png'
import icon4 from '../../assets/images/icons/icon4.png'

const ServiceSection = () => {

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
        <section className='container'>
            <h5>Servies</h5>
            <h3>I offer services according to my expertise.</h3>
            <div className='service-grid'>
                {
                    services.map( (item, index) =>  <ServiceCard key={index} item={item} /> )
                }
            </div>
        </section>
    );
};

export default ServiceSection;