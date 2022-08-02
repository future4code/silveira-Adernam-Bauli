import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Logo from '../images/mega-sena-logo.png';

const Container = styled.div`
    background-color: #6BEFA3;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    /* background-color: red; */
    height: 90vh;
    width: 20vw;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Select = styled.select`
    height: 30px;
    width: 200px;
    border: none;
    border-radius: 10px;
`

const Img = styled.img`
    height: 58.5px;
    width: 300px;
    margin-left: -10px;
`

const Raffle = styled.div`
    background-color: #EFEFEF;
    margin-left: 10vw;
    height: 100%;
    width: 80vw;
    border-radius: 10% 0% 0% 10% / 55% 0% 0% 55% ;
    display: flex;
    flex-direction: column;
    padding-left: 18%;
`

const Sort = styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 48px;
    width: 800px;
`

const H1 = styled.div`
    margin-top: 47vh;
    text-align: center;
    height: 85px;
    width: 90px;
    border: 10px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
    font-size: 30px;
    }
`

const Footer = styled.div`
    /* background-color: gray; */
    width: 800px;
    text-align: center;
    font-size: 11px;
    font-weight: 100;
    margin-top: 38vh;
`

const Concurso = styled.div`
    /* background-color: red; */
    width: 250px;
    height: 50px;
    color: white;
    display: flex;
    flex-direction: column;

    h1{
        letter-spacing: 1px;
        font-size: 18px;
        font-weight: lighter;
        /* background-color: black; */
        margin: 0;
        border: 0;
    }

    p{
        /* background-color: pink; */
        margin: 0;
        border: 0;
    }
`


export default function MegaSena() {


    return (
        <Container>
            <Content>
                <Select>aaaaaa</Select>
                <Img src={Logo} />
                <Concurso>
                    <h1>Concurso</h1>
                    <p>4531 - 07/04/2020</p>
                </Concurso>
            </Content>
            <Raffle>
                {/* <Center> */}
                <Sort>
                    <H1>
                        <h1>01</h1>
                    </H1>
                    <H1>
                        <h1>02</h1>
                    </H1>
                    <H1>
                        <h1>03</h1>
                    </H1>
                    <H1>
                        <h1>04</h1>
                    </H1>
                    <H1>
                        <h1>05</h1>
                    </H1>
                    <H1>
                        <h1>06</h1>
                    </H1>
                </Sort>
                <Footer>
                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </Footer>
                {/* </Center> */}
            </Raffle>
        </Container>
    )
}