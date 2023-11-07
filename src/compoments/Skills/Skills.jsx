import './Skills.css';

const Skills = () => {
    return (
        <section className="container">
             <h3>Our <span className="high-light">Skills</span></h3>
            <div className='skill-grid'>
                <div className='skill-item'>
                    <h3>90</h3>
                    <h5>Graphic Design</h5>
                </div>
                <div className='skill-item'>
                    <h3>85</h3>
                    <h5>Web Design</h5>
                </div>
                <div className='skill-item'>
                    <h3>80</h3>
                    <h5>Web Development </h5>
                </div>
                <div className='skill-item'>
                    <h3>75</h3>
                    <h5>MERN</h5>
                </div>

            </div>
            
        </section>
    );
};

export default Skills;