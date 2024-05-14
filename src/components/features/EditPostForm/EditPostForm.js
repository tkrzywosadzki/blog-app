import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import { useParams } from "react-router-dom";
import { editPost } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";


const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id))


    const handleSubmit = post => {
        dispatch(editPost({ ...post, id }));
        navigate('/');
    };
    if(!postData) return <Navigate to="/" />
    return (
        <PostForm 
            action={handleSubmit} 
            actionText="Edit post" 
            postId = {id}
            title = {postData.title}
            author = {postData.author}
            publishedDate = {postData.publishedDate}
            shortDescription = {postData.shortDescription}
            content = {postData.content}
        
        />
    );
};

export default EditPostForm;