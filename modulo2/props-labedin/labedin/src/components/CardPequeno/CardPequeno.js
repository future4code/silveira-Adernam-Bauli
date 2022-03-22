import React from 'react';
import styled from 'styled-components';

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0px 10px;
    margin-bottom: 10px;
    height: 60px;`
const SmallCardImg = styled.img`
    width: 40px;
    margin-right: 10px;
    border-radius: 50%;`;
const SmallCardEmailDescricao = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;`;
const SmallCardH4 = styled.h4`
font-weight: 700;`;
const SmallCardP = styled.p`
padding: 0px 10px;`;

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardImg src={ props.imagem }/>
            <SmallCardEmailDescricao>
                <SmallCardH4>{ props.nome }</SmallCardH4>
                <SmallCardP>{ props.descricao }</SmallCardP>
            </SmallCardEmailDescricao>
        </SmallCardContainer>
    )
}

export default CardPequeno;