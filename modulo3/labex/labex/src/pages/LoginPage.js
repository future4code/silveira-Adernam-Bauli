import React, { useState, useEffect } from "react";
import styled from 'styled-components';
// import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage, useProtectPage } from "../routes/coordinator";
import axios from "axios";
import useForm from '../hooks/useForm.js'


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


const DivForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
`

const DivInput = styled.div`
    /* background-color: green; */
    height: 40px;
    border-bottom: 2px solid black;
    border
`

const Input = styled.input`
    background-color: transparent;
    height: 35px;
    width: 500px;
    /* border-radius: 10px; */
    /* border: solid black 1px; */
    padding: 0 10px;
    border: none;
    color: white;

    &::placeholder{
        color: black;
    }
    &:focus{
        border: none;
        outline: none;
        color: white;
    }
`

const DivBtn = styled.div`
    display: flex;
    flex-direction: row-reverse;
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

    const SubmitLogin = (event) => {
        console.log(email, password)
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/login"
        const body = {
            email: email,
            password: password
        }

        axios.post(url, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                goToPage(navigate, "/homeadmin")
            }).catch((res) => {
                alert("Email ou senha inválido, tente novamente.")
                console.log(res)
            })
    }


    const adminArea = () => {
        const token = localStorage.getItem('token');

        if (token) {
            goToPage(navigate, '/homeadmin')
        }

    }

    useEffect(() => {
        adminArea();
    }, [])

    return (
        <PrimaryDiv>
            <SecondDiv>
                <h1>Login</h1>
                <DivForm>
                    <DivInput>
                        <Input type="email" value={email} onChange={onChangeEmail} placeholder="E-mail" required />
                    </DivInput>
                    <DivInput>
                        <Input type="password" value={password} onChange={onChangePassword} placeholder="Senha" required />
                    </DivInput>
                    <DivBtn>
                        <Btn onClick={SubmitLogin}>Entrar</Btn>
                        <Btn onClick={() => goToPage(navigate, "/")}>Voltar</Btn>
                    </DivBtn>
                </DivForm>
            </SecondDiv>
        </PrimaryDiv>
    )
}

export default LoginPage;