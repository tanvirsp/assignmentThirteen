import './PostCard.css';

const PostCard = ({post}) => {
    return (
        <div className="post-grid-item">
            <h4>{post["title"]}</h4>
            <p>{post["body"]}</p>
        </div>
    );
};

export default PostCard;