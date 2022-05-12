import React, { useContext, useEffect } from "react";
import PostCard from '../../components/PostCard/PostCard';
import useProtectedPage from '../../hooks/useProtectedPage';
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/urls';
import { RecipeListContainer, PostBox, DivPost, PostContainer, ButtonPost, InputTitle } from './styled';
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../context/GlobalStateContext";
import useForm from '../../hooks/useForm';
import { createPost } from '../../services/posts';
import axios from "axios";



const PostsListpage = () => {
    useProtectedPage();
    const navigate = useNavigate();
    const { states, setters } = useContext(GlobalStateContext);
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`);
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const goToDetail = (post) => {
        navigate(`/detalhe/${post.id}`)
        setters.setCurrentPost(post)
        setters.setCurrentPage("detail")
    }

    const votePost = (vote, id) => {
        const URL = `${BASE_URL}/posts/${id}/votes`;
        const body = {
            direction: vote,
        };
        const headers = {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        };
        axios
            .post(URL, body, headers)
            .then((res) => {
                getPosts();
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const postsCards = posts && posts.map((post) => {
        return (
            <PostCard
                key={post.id}
                post={post}
                onClickComment={() => goToDetail(post)}
                clickUp={() => votePost(1, post.id)}
                clickDown={() => votePost(-1, post.id)}
            />
        )

    })


    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, getPosts)
    }

    return (
        <RecipeListContainer>
            <DivPost>
                <PostContainer>
                    <form onSubmit={onSubmitForm}>
                        <InputTitle
                            placeholder="titulo"
                            name={"title"}
                            value={form.title}
                            onChange={onChange}
                            label={""}
                            required
                        />
                        <PostBox
                            placeholder="Post"
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            label={""}
                            required
                        />
                        <ButtonPost>Postar</ButtonPost>
                    </form>
                </PostContainer>
            </DivPost>
            {postsCards}
        </RecipeListContainer>

    )
}

export default PostsListpage;