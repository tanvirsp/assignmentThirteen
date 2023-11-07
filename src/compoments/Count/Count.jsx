import "./Count.css";
import timer from "../../assets/images/icons/timer.png";
import idea from "../../assets/images/icons/idea.png";
import wine from "../../assets/images/icons/wine.png";
import parachute from "../../assets/images/icons/parachute.png";

const Count = () => {
 
  return (
    <section className="container">
      <div className="counter-grid">
        <div className="counter-grid-item">
          <img src={timer} alt="" />
          <div>
            <h3>128</h3>
            <p>Satisfied Client</p>
          </div>
        </div>
        <div className="counter-grid-item">
          <img src={idea} alt="" />
          <div>
            <h3>36</h3>
            <p>Projects a year</p>
          </div>
        </div>
        <div className="counter-grid-item">
          <img src={wine} alt="" />
          <div>
            <h3>662</h3>
            <p>Blog Posts</p>
          </div>
        </div>
        <div className="counter-grid-item">
          <img src={parachute} alt="" />
          <div>
            <h3>332</h3>
            <p>Support Ticket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
