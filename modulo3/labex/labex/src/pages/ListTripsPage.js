import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";


const FirstDiv = styled.div`
    /* background-color: gray; */
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const SecondDiv = styled.div`
    /* background-color: yellow; */
    width: 500px;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const DivBtn = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 70px 0 20px 0;
`


const Btn = styled.button`
    min-width: 120px;
    height: 40px;
    background-color: #708090;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 16px;

    &:hover{
        cursor: pointer;
        background-color: #B6D4E3;
    }
`

const H1 = styled.h1`
    color: #708090;
    font-weight: 700;
`

function ListTripsPage(props) {



    return (
        <FirstDiv>
            <SecondDiv>
                <DivBtn>
                    <Btn onClick={() => props.setPage("Home")}>Voltar</Btn>
                    <Btn>Inscrever-se</Btn>
                </DivBtn>
                <H1>Lista de Viagens</H1>
            </SecondDiv>
        </FirstDiv>
    )
}
export default ListTripsPage;