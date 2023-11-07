import './ContactForm.css';
import contactImg  from '../../assets/images/contact-img.png'
import { useState } from 'react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const collectData =(name, value) =>{
        setFormData( (previous) =>({
             ...previous,
             [name] : value
        }))

    }

    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log(formData);
    }


    return (
        <section className='contact-bg'>
            <div className='container'>
                <div className="contact-section">
                    <div>
                    <img className='contac-img' src={contactImg} alt="" />
                    </div>
                    <div className='form'>
                        <h3>Get In Touch</h3>
                        <form onSubmit={handleSubmit} >
                            <input onBlur ={(e) =>collectData("name" , e.target.value )}  type="text" placeholder='Your Name'  />
                            <input onBlur ={(e) =>collectData("phone" , e.target.value )} type="tel" placeholder='Your Phone Number' />
                            <input onBlur ={(e) =>collectData("email" , e.target.value )} type="email" placeholder='Your Email' />
                            <textarea onBlur ={(e) =>collectData("message" , e.target.value )}  placeholder='Message' id="" cols="30" rows="10"></textarea>
                            <input type="submit" value="SEND" />
                        </form>
                    </div>
                </div>
                
                
            </div>
        </section>
    );
};

export default ContactForm;