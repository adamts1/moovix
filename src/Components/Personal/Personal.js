import './Personal.css'
import PostCard from './../PostCard/PostCard';
import { useState, useEffect } from 'react';



const Personal = ({ posts, data }) => {
    const [personalPosts, setPersonalPosts] = useState()

    
    useEffect(()=>{
        const personalPost = posts.filter(post => post.userId === data.data.id);
        setPersonalPosts(personalPost)

    },[posts])

    return (
        <div className='p-personal'>
              {personalPosts.map(post =>
                <PostCard
                    title={post.title}
                    body={post.body}
                />
            )}
        </div>
    );
};

export default Personal;