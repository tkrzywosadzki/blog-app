import { useDispatch } from "react-redux";
import { removePost } from "../../../redux/postsRedux";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const RemovePost = ({ id }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleRemovePost = () => {
        dispatch(removePost(id));
        handleClose();
    };

    return(
        <div>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will completely remove this post from the app. Are you sure you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleRemovePost}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );

};

export default RemovePost;