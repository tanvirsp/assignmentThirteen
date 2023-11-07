import { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import './BlogSection.css'

const BlogSection = () => {
    const [allPost, setAllPost] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            const tenPost = data.slice(0, 10);
            setAllPost(tenPost);
        })

    }, [])

    return (
        <section>
           
               <div className="blog-section">
                    {
                        allPost.map( (post, index) => <PostCard key={index} post={post} /> )
                    }
               </div>
        </section>
    );
};

export default BlogSection;