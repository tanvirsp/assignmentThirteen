import './Subscribe.css'
import { useRef } from 'react';

const Subscribe = () => {

    const field = useRef();
    const handleSubscribe = ()=>{
        alert(field.current.value)
    }

    return (
        <section className='subscribe-section'>         
                <input ref={field} placeholder='Your Email' type="email" />
                <button onClick={handleSubscribe}>SUBSCRIBE</button>
        </section>
    );
};

export default Subscribe;