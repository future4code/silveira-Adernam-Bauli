import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";

const DivPrimaria = styled.div`
    /* background-color: gray; */
    width: 100vw;
    height: 100vh;
    display: flex;
`

const DivPai = styled.div`
    /* background-color: blue; */
    width: 300px;
    margin: auto;
    text-align: center;
    color: #708090;
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
`

function HomePage() {




    return (
        <DivPrimaria>
            <DivPai>
                <h1>LabeX</h1>
                <DivBtn>
                    <Btn>Ver viagens</Btn>
                    <Btn>Área de Admin</Btn>
                </DivBtn>
            </DivPai>

        </DivPrimaria>
    )
}

export default HomePage;