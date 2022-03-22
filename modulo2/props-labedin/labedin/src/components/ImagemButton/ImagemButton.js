import React from 'react';
import styled from 'styled-components';

const ImageButtonContainer = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
border-radius: 50px;
width: 200px;
padding: 0 30px;
margin: 5px auto;
box-sizing: border-box;
`
const ImageButtonImg = styled.img`
width: 30px;
margin-right: 10px;
box-sizing: border-box;
`
function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <ImageButtonImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;