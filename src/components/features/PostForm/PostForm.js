import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";



const PostForm = ({ action, actionText, ...props }) => {


    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');


    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content, });
    }

    return (
    <section>
            <Row className="justify-content-center">
                <Col className="col-lg-6">
                    <div className="mb-4">
                        <h1>Add post</h1>
                    </div>
                    <Form onSubmit={handleSubmit}>
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
                        <Button variant="primary" type="submit">
                            {actionText}
                        </Button>
                    </Form>
                </Col>
            </Row>
    </section>

    );
};

export default PostForm;