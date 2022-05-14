import React, { useContext } from "react";
import PostCard from '../../components/PostCard/PostCard';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import useForm from '../../hooks/useForm';
import GlobalStateContext from "../../context/GlobalStateContext";
import { DivCard, DivPost, PostContainer, PostBox, ButtonPost } from './styled';
import { createComment } from '../../services/posts';
import { votePost } from '../../services/vote';

const PostDetailPage = () => {
    useProtectedPage();
    const params = useParams();
    const { states } = useContext(GlobalStateContext);
    const [comment, getPosts] = useRequestData([], `${BASE_URL}/posts/${states.currentPost.id}/comments`);
    const [form, onChange, clear] = useForm({ body: "" })

    const commentsMap = comment && comment.map((post) => {
        return (
            <PostCard
                key={post.id}
                clickUp={() => votePost(1, post.id, getPosts)}
                clickDown={() => votePost(-1, post.id, getPosts)}
            />
        )

    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComment(form, clear, getPosts)
    }

    console.log(states.currentPost)

    return (
        <DivCard>
            <DivPost>
                <PostContainer>
                    <form onSubmit={onSubmitForm}>
                        <PostBox
                            placeholder="Post"
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            required
                        />
                        <ButtonPost>Postar</ButtonPost>
                    </form>
                </PostContainer>
            </DivPost>
            <PostCard post={states.currentPost} />
            {/* {detailMap} */}
        </DivCard>
    )
}

export default PostDetailPage;