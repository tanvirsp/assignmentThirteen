import './BannerTwo.css';
import img2 from '../../assets/images/img2.jpg'

const BannerTwo = () => {
    return (
        <section className="contact-banner-section">
            <div>
                <h4>Expert in Skills</h4>
                <h2>Creative Solutions for <br /> your Busiess</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis non reiciendis repellendus consequatur eos et at deleniti libero quis.</p>
            </div>
            <div>
                <img src={img2} alt="image" />
            </div>

        </section>
    );
};

export default BannerTwo;