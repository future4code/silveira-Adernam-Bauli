import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";


const PrimaryDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SecondDiv = styled.div`
    /* background-color: yellow; */
    width: 550px;
    text-align: center;
    color: #708090;

    h1{
        font-weight: 700;
    }
`


const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
`

const Input = styled.input`
    height: 35px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 10px;
`

const DivBtn = styled.div`
    display: flex;
    justify-content: space-around;
`


const Btn = styled.button`
    width: 100px;
    height: 40px;
    background-color: #708090;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    margin: 20px 0;

    &:hover{
        cursor: pointer;
        background-color: #B6D4E3;
    }
`


function LoginPage() {
    const navigate = useNavigate()




    return (
        <PrimaryDiv>
            <SecondDiv>
                <h1>Login</h1>
                <DivInput>
                    <Input type="email" placeholder="E-mail" />
                    <Input placeholder="Senha"/>
                </DivInput>
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "/")}>Voltar</Btn>
                    <Btn>Entrar</Btn>
                </DivBtn>
            </SecondDiv>
        </PrimaryDiv>
    )
}

export default LoginPage;