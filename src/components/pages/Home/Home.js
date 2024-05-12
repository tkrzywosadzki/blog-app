import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";
import { Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = (props) => {
    const posts = useSelector(state => getAllPosts(state));
    //console.log(posts);
    return (
        <div>
            <Row>
                {posts.map(post => (
                    <Col key={post.id} md='4'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='mb-3'>{post.title}</Card.Title>
                                <Card.Text className='mb-2'><span><strong>Author:</strong></span>{post.author}</Card.Text>
                                <Card.Text className='mb-4'><span><strong>Published:</strong></span>{post.publishedDate}</Card.Text>
                                <Card.Text className='mb-3'>{post.shortDescription}</Card.Text>
                                <Link to={`/post/${post.id}`}>
                                    <Button>Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;