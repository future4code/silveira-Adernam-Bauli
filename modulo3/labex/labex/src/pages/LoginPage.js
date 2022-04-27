import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";
import axios from "axios";


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
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onSubmitLogin = () => {
        console.log(email, password)
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/login"
        const body = {
            email: email,
            password: password
        }

        axios.post(url, body)
        .then((res) => {
            console.log('Deu certo', res.data)
            localStorage.setItem('token', res.data.token)
            goToPage(navigate, "/tripsdetail")
        }).catch((res) => {
            console.log('Deu errado', res)
        })
    }


    return (
        <PrimaryDiv>
            <SecondDiv>
                <h1>Login</h1>
                <DivInput>
                    <Input type="email" value={email} onChange={onChangeEmail} placeholder="E-mail" />
                    <Input type="password" value={password} onChange={onChangePassword} placeholder="Senha"/>
                </DivInput>
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "/")}>Voltar</Btn>
                    <Btn onClick={onSubmitLogin}>Entrar</Btn>
                </DivBtn>
            </SecondDiv>
        </PrimaryDiv>
    )
}

export default LoginPage;