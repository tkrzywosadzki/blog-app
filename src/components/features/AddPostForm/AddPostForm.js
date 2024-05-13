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
    const [published, setPublished] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, author, published, description, content, postId: props.postId}));
        setTitle('');
        setAuthor('');
        setPublished('');
        setDescription('');
        setContent('');
        navigate('/');
    };


    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    );
};

export default AddPostForm;