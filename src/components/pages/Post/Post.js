import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import { Row, Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = (props) => {

const { postId } = useParams();

const postData = useSelector(state => getPostById(state, postId));

if(!postData) return <Navigate to="/" />
else return(
    <Row className="justify-content-center">
        <Col className="col-lg-6">
            <Row>
                <Col>
                <h1 className="ms-3">{postData.title}</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                <Link key={props.id} to={`/post/edit/${postId}`}>
                    <Button className="me-1" variant="outline-info">Edit</Button>
                </Link>
                <Link key={props.id} to={`/post/edit/${postId}`}>
                    <Button variant="outline-danger">Delete</Button>
                </Link>
                </Col>
            </Row>
            <Card className="border-0">
                <Card.Body>
                    <Card.Text className='mb-2'><span><strong>Author:</strong></span>{postData.author}</Card.Text>
                    <Card.Text className='mb-4'><span><strong>Published:</strong></span>{postData.publishedDate}</Card.Text>
                    <Card.Text className='mb-3'>{postData.content}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
)
};

export default Post;

//<Card.Title className='mb-3'>{postData.title}</Card.Title>