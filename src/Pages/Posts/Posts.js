import './Posts.css'
import { Tabs, Tab, Container } from 'react-bootstrap';
import Personal from '../../Components/Personal/Personal';
import All from '../../Components/All/All';
import PostModel from '../../Model/PostModel';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';


const Posts = ({ token }) => {
    const [tabKey, setTabKey] = useState('');
    const [posts, setPosts] = useState();
    const [personalPosts, setPersonalPosts] = useState();
    const [allPosts, setAllPosts] = useState();
    const history = useHistory();
    const { index } = useParams();

    useEffect(() => {     
        if (localStorage.getItem('token') === token) {
            const searchURL = "https://jsonplaceholder.typicode.com/posts";
            axios.get(searchURL).then(response => {
                setPosts(response.data)

            });
            
        }else{
            history.push("/")
        }
    }, [])

    useEffect(() => {   
        if(posts){
            let userid = index.replace(/[/:] ?/g, "");

            let personalObj = posts.filter(post => post.userId == userid); 
            const personalModelList = personalObj.map(post => new PostModel(post));
            setPersonalPosts(personalModelList)

            let allObj = posts.filter(post => post.userId != userid); 
            const allModelList = allObj.map(post => new PostModel(post));
            setAllPosts(allModelList)
        }
    }, [posts])

    const onSave = (post)=>{
        setPersonalPosts(personalPosts.concat(post))
    }

    const onRemove = (post)=>{
        setPersonalPosts(personalPosts.filter(item => item.id !== post.id));
    }

    return (
        <div className='p-posts'>
            <Container>
                <h1>Posts</h1>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={tabKey}
                    onSelect={(k) => setTabKey(k)}>
                    <Tab eventKey="personal" title="Personal Posts"></Tab>
                    <Tab eventKey="all" title="All Posts"></Tab>
                </Tabs>
                <hr />
                {tabKey === 'personal' &&
                    <Personal
                        personalPosts={personalPosts}
                        removePost={onRemove}
                    />
                }
                {tabKey === 'all' &&
                    <All
                        posts={allPosts}
                        savePost={onSave}
                    />
                }
            </Container>
        </div>
    );
};
export default Posts;