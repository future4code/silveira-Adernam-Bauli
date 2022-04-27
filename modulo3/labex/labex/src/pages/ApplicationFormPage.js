import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";


const FirstDiv = styled.div`
    /* background-color: gray; */
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SecondDiv = styled.div`
    /* background-color: yellow; */
    width: 600px;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const H1 = styled.h1`
    width: 500px;
    color: #708090;
    font-weight: 700;
`

const DivForm = styled.div`
    width: 500px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
`

const Select = styled.select`
    height: 35px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 10px;
`

const Input = styled.input`
    height: 35px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 10px;
`

const DivBtn = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-around;
    gap: 20px;
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

function ApplicationFormPage() {
    const navigate = useNavigate()
    const [tripsList, setTripsList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

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
        return <option>{detail.name}</option>
    })

    return (
        <FirstDiv>
            <SecondDiv>
                <H1>Inscreva-se para uma viagem</H1>
                <DivForm>
                    <Select>
                        {tripsDetails}
                    </Select>
                    <Input placeholder="Nome" />
                    <Input placeholder="Idade" />
                    <Input placeholder="Texto de Candidatura" />
                    <Input placeholder="Profissão" />
                    <Select>
                        <option>Escolha um País</option>
                    </Select>
                </DivForm>
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "/trips")}>Voltar</Btn>
                    <Btn>Enviar</Btn>
                </DivBtn>
            </SecondDiv>
        </FirstDiv>
    )
}
export default ApplicationFormPage;