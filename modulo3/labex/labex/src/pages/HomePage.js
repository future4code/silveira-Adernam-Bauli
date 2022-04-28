import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";
import Wallpapper from '../img/wallpapper.jpg'

const PrimaryDiv = styled.div`
    background-image: url(${Wallpapper});
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: gray; */
    width: 100vw;
    height: 100vh;
    display: flex;
`

const Div1 = styled.div`
    /* background-color: blue; */
    width: 300px;
    margin: auto;
    text-align: center;
    color: #708090;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-weight: 700;
        margin: 0;
        color: white;
    }
`

const P = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Square+Peg&display=swap');
    font-family: 'Square Peg', cursive;
    width: 400px;
    color: white;
`

const DivBtn = styled.div`
    /* background-color: gray; */
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
`

const Btn = styled.button`
    background-color: #708090;
    color: white;
    width: 120px;
    height: 35px;
    border-radius: 20px;
    border: none;
    font-size: 16px;

    &:hover{
        cursor: pointer;
        background-color: #B6D4E3;
    }
`

function HomePage() {
    const navigate = useNavigate()




    return (
        <PrimaryDiv>
            <Div1>
                <h1>LabeX</h1>
                <P>Explore the stars and discover new territories</P>
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "trips")}>Ver viagens</Btn>
                    <Btn onClick={() => goToPage(navigate, "login")}> Área de Admin</Btn>
            </DivBtn>
        </Div1>

        </PrimaryDiv >
    )
}

export default HomePage;