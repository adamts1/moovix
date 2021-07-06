import './All.css';
import PostCard from './../PostCard/PostCard';


const All = ({ posts }) => {
    return (
        <div className='c-all'>
            {posts.map(post =>
                <PostCard
                    title={post.title}
                    body={post.body}
    
                />
            )}

        </div>
    );
};

export default All;