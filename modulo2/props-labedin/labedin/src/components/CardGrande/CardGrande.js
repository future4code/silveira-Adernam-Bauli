import React from 'react';
import styled from 'styled-components';


const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    height: 150px;
`
const BigCardImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const BigCardH4 = styled.h4`
margin-bottom: 15px;`

function CardGrande(props) {
    return (
        <BigCardContainer>
            <BigCardImg src={ props.imagem } />
            <div>
                <BigCardH4>{ props.nome }</BigCardH4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;