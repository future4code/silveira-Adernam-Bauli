import React, { useContext } from "react";
import PostCard from '../../components/PostCard/PostCard';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import GlobalStateContext from "../../context/GlobalStateContext";

const PostDetailPage = () => {
    useProtectedPage();
    const params = useParams();
    const { states } = useContext(GlobalStateContext);
    // const post = useRequestData({}, `${BASE_URL}/posts/${params.id}/comments`)

    return (
        <div>
            <h1>{states.currentPost.title}</h1>
            <PostCard post={states.currentPost}/>
        </div>
    )
}

export default PostDetailPage;