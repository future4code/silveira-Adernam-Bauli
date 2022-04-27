import React, { useState, useEffect } from "react";
import styled, { keyframes } from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";


const RingAnimation = keyframes`
    0%{
        transform: rotate(0deg);
        box-shadow: 1px 5px 2px #708090;
    }
    
    50%{
        transform: rotate(180deg);
        box-shadow: 1px 5px 2px #708090;
    }
    
    100%{
        transform: rotate(360deg);
        box-shadow: 1px 5px 2px #708090;
    }
`

const FirstDiv = styled.div`
    /* background-color: gray; */
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`

const SecondDiv = styled.div`
    /* background-color: yellow; */
    width: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Center = styled.div`
    /* background-color: black; */
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* background-color: gray; */
`

const Ring = styled.div`
    /* background-color: gray; */
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    animation: ${RingAnimation} 1.7s linear infinite;

    &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(255,255,255,.3);
    }
`

const Span = styled.span`
    color: #737373;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 200px;

`

const DivBtn = styled.div`
    /* background-color: pink; */
    display: flex;
    justify-content: center;
    gap: 50px;
    padding: 70px 0 20px 0;
`


const Btn = styled.button`
    max-width: 130px;
    min-width: 90px;
    height: 40px;
    padding: 0 20px;
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

const Li = styled.li`
    list-style-type: none;
    width: 500px;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 8px 20px;
    margin-bottom: 20px;
`

const P = styled.p`
    display: flex;
`

const Strong = styled.strong`
    color: #708090;
    margin-right: 5px;
`

function ListTripsPage(props) {
    const navigate = useNavigate()
    const [tripsList, setTripsList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getTrips();
    }, [])

    const getTrips = () => {
        setIsLoading(true)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips`
        axios.get(url)
            .then((res) => {
                setIsLoading(false)
                console.log(res)
                setTripsList(res.data.trips)
            })
            .catch((res) => {
                setIsLoading(false)
                console.log(res)
            })
    }

    const tripsDetails = tripsList.map((detail) => {
        return <ul key={detail.id}>
            <Li>
                 <P><Strong>Nome:</Strong>{detail.name}</P>
                 <P><Strong>Descrição:</Strong>{detail.description}</P>
                 <P><Strong>Planeta:</Strong>{detail.planet}</P>
                 <P><Strong>Duração:</Strong>{detail.durationInDays}Dias</P>
                 <P><Strong>Data:</Strong>{detail.date}</P>
            </Li>
        </ul>
    })


    return (


        <FirstDiv>
            <SecondDiv>
                {isLoading && <Center>
                    <Ring></Ring>
                    <Span>Carregando...</Span>
                </Center>}
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "/")}>Voltar</Btn>
                    <Btn onClick={() => goToPage(navigate, "/application")}>Inscrever-se</Btn>
                </DivBtn>
                <H1>Lista de Viagens</H1>
                {tripsDetails}
            </SecondDiv>
        </FirstDiv>
    )
}
export default ListTripsPage;