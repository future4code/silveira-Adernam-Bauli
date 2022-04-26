import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";
import { getDefaultNormalizer } from "@testing-library/react";

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
    const navigate = useNavigate()
    const [tripsList, setTripsList] = useState([])

    useEffect(() => {
        getTrips();
    }, [])

    const getTrips = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips`
        axios.get(url)
            .then((res) => {
                console.log(res)
                setTripsList(res.data.trips)
            })
            .catch((res) => {
                console.log(res)
            })
    }

    const tripsDetails = tripsList.map((detail) => {
        return <ul key={detail.id}>
            <li>
                 <p>Nome:{detail.name}</p>
                 <p>Descrição:{detail.description}</p>
                 <p>Planeta:{detail.planet}</p>
                 <p>Duração:{detail.durationInDays}Dias</p>
                 <p>Data:{detail.date}</p>
            </li>
        </ul>
    })


    return (


        <FirstDiv>
            <SecondDiv>
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "/")}>Voltar</Btn>
                    <Btn>Inscrever-se</Btn>
                </DivBtn>
                <H1>Lista de Viagens</H1>
                {tripsDetails}
            </SecondDiv>
        </FirstDiv>
    )
}
export default ListTripsPage;