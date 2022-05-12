import React, { useContext } from "react";
import PostCard from '../../components/PostCard/PostCard';
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import GlobalStateContext from "../../context/GlobalStateContext";
import {DivCard} from './styled'

const PostDetailPage = () => {
    useProtectedPage();
    const params = useParams();
    const { states } = useContext(GlobalStateContext);

    // const detailMap = states.currentPost.map((post) => {
    //     return (
    //         <PostCard
    //             key={post.id}
    //         />
    //     )

    // })
    console.log(states.currentPost)
    return (
        <DivCard>
            <PostCard post={states.currentPost}/>
            {/* {detailMap} */}
        </DivCard>
    )
}

export default PostDetailPage;