import './PostCard.css'
import { Card,Button } from 'react-bootstrap';


const PostCard = ({ post, type , savePost, removePost}) => {
    return (
        <div className='c-postcard'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Title: {post.title}</Card.Title>
                    <Card.Text>
                         Body: {post.body} 
                        
                     <div className="dataInfo">
                         ID: {post.id}
                        <br/>
                        User ID:{post.userId}
                    </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="button-warper">
            {type =="all" 
                    ? <Button onClick={()=>savePost(post)} variant="primary">Save</Button>
                    : <Button onClick={()=>removePost(post)} variant="primary">Remove</Button>
            }
            </div>
        </div>
    );
};

export default PostCard;