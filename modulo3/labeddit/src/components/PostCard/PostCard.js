import React, { useContext, useState } from 'react';
import { PostCardContainer, DivBottom, Votes } from './styled';
import GlobalStateContext from "../../context/GlobalStateContext";
import ArrowUp from '../../assets/arrowup.png';
import ArrowDown from '../../assets/arrowdown.png';

const RecipeCard = (props) => {
  const { states } = useContext(GlobalStateContext);



  return (
    <PostCardContainer>
      <p>Enviado por: {props.post.username}</p>
      <h2>{props.post.title}</h2>
      <DivBottom>
        <Votes>
          <img src={ArrowUp} onClick={props.clickUp} />
          {props.post.voteSum}
          <img src={ArrowDown} onClick={props.clickDown} />
          </Votes>
          <p onClick={props.onClickComment}>Comments: {props.post.commentCount}</p>
      </DivBottom>
    </PostCardContainer>
  )
}

export default RecipeCard;