import './Posts.css'
import { useHistory } from "react-router-dom";
import { Tabs, Tab, Container } from 'react-bootstrap';
import Personal from '../../Components/Personal/Personal';
import All from '../../Components/All/All';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = ({ data }) => {
    const [tabKey, setTabKey] = useState('')
    const [posts, setPosts] = useState()
    const [userId, setUserid] = useState()

    useEffect(()=>{
        const searchURL = "https://jsonplaceholder.typicode.com/posts";
        axios.get(searchURL).then(response => {
            setPosts(response.data)
         
        });
    },[data])

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
                        posts ={posts}
                        data={data}
                    />
                }
                {tabKey === 'all' &&
                    <All
                        posts ={posts}
                    />
                }
            </Container>
        </div>
    );
};

export default Posts;