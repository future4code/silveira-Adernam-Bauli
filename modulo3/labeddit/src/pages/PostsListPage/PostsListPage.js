import React, { useContext } from "react";
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/urls';
import {RecipeListContainer, AddPostButton, PostBox} from './styled';
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";

const PostsListpage = () => {
    useProtectedPage();
    const navigate = useNavigate();
    const { setters } = useContext(GlobalStateContext);
    const posts = useRequestData([], `${BASE_URL}/posts`);

    const goToDetail = (post) => {
        navigate(`/detalhe/${post.id}`)
        setters.setCurrentPost(post)
        setters.setCurrentPage("detail")
    }

    const postsCards = posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                post={post}
                onClick={() => goToDetail(post)}
            />
        )

    })

    return (
        <RecipeListContainer>
            <AddPostButton/>
            {postsCards}
        </RecipeListContainer>
    )
}

export default PostsListpage;