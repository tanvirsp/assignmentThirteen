import './BlogCategory.css';

const BlogCategory = () => {
    return (
        <section>
            <div className='category'>
                <h4>Blog Category</h4>
                <ul className='category-list'>
                    <li>Graphic Design</li>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>MERN Stack</li>
                </ul>
            </div>
            
        </section>
    );
};

export default BlogCategory;