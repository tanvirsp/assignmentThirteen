/* eslint-disable react/prop-types */
import './ServiceCard.css'

const ServiceCard = ({item}) => {
    return (
        <div className="service-card">
            <img src={item["icon"]} alt="" />
            <h5>{item["name"]}</h5>
            <p>{item["des"]}</p>
        </div>
    );
};

export default ServiceCard;