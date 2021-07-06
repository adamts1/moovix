import './Personal.css'
import PostCard from './../PostCard/PostCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';




const Personal = ({ posts }) => {
    const [personalPosts, setPersonalPosts] = useState()
    const { index } = useParams();

    useEffect(()=>{
        var userid = index.replace(/[/:] ?/g, "");
        console.log(userid)
        const personalPost = posts.filter(post => post.userId == userid);
        setPersonalPosts(personalPost)
    },[posts])

    return (
        <div className='p-personal'>
              {personalPosts  
              ?<div>
              {personalPosts.map(post =>
                <PostCard
                    title={post.title}
                    body={post.body}
                />
            )}
            </div>
            : <h1>No Personal Posts</h1>
            }
            
        </div>
    );
};

export default Personal;