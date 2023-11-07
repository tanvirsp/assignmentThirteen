import './GoogleMap.css';
import map from "../../assets/images/map.webp"

const GoogleMap = () => {
    return (
        <section className="google-map">
            <img src={map} alt="" />
        </section>
    );
};

export default GoogleMap;