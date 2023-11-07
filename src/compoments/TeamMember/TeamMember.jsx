import './TeamMember.css'
import img1  from '../../assets/images/team/1.webp'
import img2  from '../../assets/images/team/2.webp'
import img3  from '../../assets/images/team/3.webp'

const TeamMember = () => {
    return (
        <section className="container">
            <div className='section-title'>
                <h3>MEET OUR TEAM</h3>
            </div>
            <div className="team-member">
                <div className='member'>
                    <img src={img1} alt="" />
                    <h4>HARRY CLARENS VICK</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio molestias quae iste suscipit labore voluptas? Quos nulla placeat tempora.
                    </p>
                </div>
                <div className='member'>
                    <img src={img2} alt="" />
                    <h4>HCAROL PORTER VIRE</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio molestias quae iste suscipit labore voluptas? Quos nulla placeat tempora.
                    </p>
                </div>
                <div className='member'>
                    <img src={img3} alt="" />
                    <h4>ADO VELASQUEZ</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio molestias quae iste suscipit labore voluptas? Quos nulla placeat tempora.
                    </p>
                </div>
                
            </div>
            
        </section>
    );
};

export default TeamMember;