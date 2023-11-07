import "./RecentWork.css";
import logo1 from '../../assets/images/works/logo1.jpg'
import logo2 from '../../assets/images/works/logo2.jpg'
import logo3 from '../../assets/images/works/logo3.jpg'
import logo4 from '../../assets/images/works/logo4.jpg'
import logo5 from '../../assets/images/works/logo5.jpg'
import logo6 from '../../assets/images/works/logo6.jpg'
// import logo7 from '../../assets/images/works/logo7.jpg'

const RecentWork = () => {

  


    return (
        <section className="container">
            <h3>Our Recent <span className="high-light">Works</span></h3>
            <div className="project-grid">
                <div className="project-grid-item"><img src={logo1} alt="" /></div>
                <div className="project-grid-item"><img src={logo2} alt="" /></div>
                <div className="project-grid-item"><img src={logo3} alt="" /></div>
                <div className="project-grid-item"><img src={logo4} alt="" /></div>
                <div className="project-grid-item"><img src={logo5} alt="" /></div>
                <div className="project-grid-item"><img src={logo6} alt="" /></div>

            </div>
        </section>
    );
};

export default RecentWork;