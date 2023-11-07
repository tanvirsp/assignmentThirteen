import { useEffect, useState } from 'react';
import './RecentPost.css';

const RecentPost = () => {
    const [allPost, setAllPost] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const tenPost = data.slice(0, 5);
            setAllPost(tenPost);
        })

    }, [])

    return (
        <div className='side-card'>
             <h4>Recent Post</h4>
            <ul>
                {
                allPost?.map( (post, index) => <li key={index}>{post["title"]}</li>)
                }
            </ul>
            
        </div>
    );
};

export default RecentPost;