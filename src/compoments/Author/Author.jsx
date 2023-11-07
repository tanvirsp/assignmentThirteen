import './Author.css'
import author  from '../../assets/images/author.jpg'

const Author = () => {
    return (
        <div className='author-card'>
            <img src={author} alt="" />
            <h5>John Michel</h5>
            <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, repellat!</small>
            
        </div>
    );
};

export default Author;