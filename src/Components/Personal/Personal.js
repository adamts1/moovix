import './Personal.css'
import PostCard from './../PostCard/PostCard';


const Personal = ({ personalPosts, removePost }) => {

    return (
        <div>
            {personalPosts
                ? <div  className='c-personal'>
                    {personalPosts.map(post =>
                        <PostCard
                            key={post.id}
                            post ={post}
                            type="personal"
                            removePost ={removePost}
                        />
                    )}
                </div>
                : <h1>No Personal Posts</h1>
            }
        </div>
    );
};

export default Personal;