import './All.css';
import PostCard from './../PostCard/PostCard';


const All = ({ posts, savePost }) => {

    return (
        <div>
            {posts
            ? <div className='c-all'>
            {posts.map(post =>
                <PostCard
                    key={post.id}       
                    post = {post}
                    type="all"
                    savePost={savePost}
                />
            )}
            </div>
            : <h1>No Posts</h1>
            }

        </div>
    );
};

export default All;