import './PostCard.css'
import { Card } from 'react-bootstrap';


const PostCard = ({ title, body }) => {
    return (
        <div className='c-postcard'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {body}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default PostCard;