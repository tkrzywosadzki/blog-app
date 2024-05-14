import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { addPost } from "../../../redux/postsRedux";


const AddPostForm = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, publishedDate, shortDescription, content, postId: props.postId}));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
        navigate('/');
    };

    return (
    <Row className="mx-5">
        <div className="mb-2">
            <h1>Add post</h1>
        </div>
        <Form onSubmit={handleSubmit}>
            <Col>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="w-50" type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control className="w-50" type="text" placeholder="Enter author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="published">
                    <Form.Label>Published</Form.Label>
                    <Form.Control className="w-50" type="text" placeholder="dd-mm-yyyy" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Short description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Short description" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="content">
                    <Form.Label>Main content</Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Main content" value={content} onChange={(e) => setContent(e.target.value)} />
                </Form.Group>
            </Col>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
        </Form>
    </Row>

    );
};

export default AddPostForm;