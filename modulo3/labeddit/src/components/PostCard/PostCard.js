import React, { useContext, useEffect, useState } from 'react';
import { PostCardContainer, DivBottom } from './styled';
import GlobalStateContext from "../../context/GlobalStateContext";

const RecipeCard = (props) => {
  const { states } = useContext(GlobalStateContext);
  const [buttonComments, setButtonComment] = useState(states.currentPage == "posts" ? <p onClick={props.onClick}>Comments: {props.post.commentCount}</p> : <div></div>)



  return (
    <PostCardContainer>
      <p>Enviado por: {props.post.username}</p>
      <h2>{props.post.title}</h2>
      <DivBottom>
        <p>Likes Count: {props.post.voteSum}</p>
        {buttonComments}
      </DivBottom>
    </PostCardContainer>
  )
}

export default RecipeCard;