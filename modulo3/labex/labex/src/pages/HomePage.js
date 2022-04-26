import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";

const PrimaryDiv = styled.div`
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

    h1{
        font-weight: 700;
    }
`

const DivBtn = styled.div`
    /* background-color: gray; */
    display: flex;
    justify-content: center;
    gap: 20px;
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

function HomePage(props) {




    return (
        <PrimaryDiv>
            <Div1>
                <h1>LabeX</h1>
                <DivBtn>
                    <Btn onClick={() => props.setPage("Trips")}>Ver viagens</Btn>
                    <Btn>Área de Admin</Btn>
                </DivBtn>
            </Div1>

        </PrimaryDiv>
    )
}

export default HomePage;