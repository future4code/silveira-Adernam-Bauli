import React, { useState, useEffect, } from "react";
import styled from 'styled-components';
import { useNavigate, useHistory, useParams } from 'react-router-dom'
import { goToPage, useProtectPage } from "../routes/coordinator";
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

const LiTrip = styled.li`
    list-style-type: none;
    width: 500px;
    /* box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px; */
    padding: 8px 20px;
    margin-bottom: 20px;
`

const LiPend = styled.li`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur( 5px );
    list-style-type: none;
    width: 500px;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 8px 20px;
    margin-bottom: 20px;
    margin-left: -35px;
    color: black;
`

const P = styled.p`
    display: flex;
`

const Strong = styled.strong`
    color: #708090;
    margin-right: 5px;
    color: black;
`

const ThirdDiv = styled.div`
    h1{
        font-size: 25px;
        color: ;
    }
`

const DivAprovReprov = styled.div`
    display: flex;
    justify-content: space-around;
`

const Btn = styled.button`
    /* width: 100px; */
    height: 40px; 
    /* max-width: 130px;
    min-width: 90px; */
    background-color: #708090;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    margin: 0 0 20px 0;
    padding: 0 30px;

    &:hover{
        cursor: pointer;
        background-color: #B6D4E3;
    }
`

const DivAprov = styled.div`
    /* background-color: yellow; */
    /* width: 550px; */
    display: flex;
    flex-direction: column;
    align-items: center;
`

function TripDetailsPage() {
    useProtectPage();
    const navigate = useNavigate();
    const [tripDetails, setTripsDetails] = useState([])
    const [tripCandidates, setTripCandidates] = useState([])
    const [aprovCandidates, setaprovCandidates] = useState([])
    const params = useParams();

    const getTripDetail = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trip/${params.id}`
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }

        axios.get(url, headers)
            .then((res) => {
                setTripsDetails(res.data.trip)
                setTripCandidates(res.data.trip.candidates)
                setaprovCandidates(res.data.trip.approved)
            }).catch((erro) => {
                console.log(erro)
            })
    }

    const aprovReprov = (id, boolean) => {
        const headers = {
            headers: {
                auth: localStorage.getItem("token")
            }
        }

        const body = {
            approve: boolean
        }

        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips/${params.id}/candidates/${id}/decide`, body, headers)
            .then((res) => {
                console.log(res)
                alert("Candidato alterado com sucesso.")
                getTripDetail();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTripDetail();
    }, [])

    const detailPage = <ul>
        <LiTrip key={tripDetails.id}>
            <P><Strong>Nome:</Strong>{tripDetails.name}</P>
            <P><Strong>Descrição:</Strong>{tripDetails.description}</P>
            <P><Strong>Planeta:</Strong>{tripDetails.planet}</P>
            <P><Strong>Duração:</Strong>{`${tripDetails.durationInDays} Dias`}</P>
            <P><Strong>Data:</Strong>{tripDetails.date}</P>
        </LiTrip>
    </ul >

    const candidateDetail = tripCandidates.map((candidate) => {
        return (<ul>
            <LiPend key={candidate.id}>
                <P><Strong>Nome:</Strong>{candidate.name}</P>
                <P><Strong>Idade:</Strong>{candidate.age}</P>
                <P><Strong>País:</Strong>{candidate.country}</P>
                <P><Strong>Descrição:</Strong>{candidate.applicationText}</P>
                <P><Strong>Profissão:</Strong>{candidate.profession}</P>
                <DivAprovReprov>
                    <Btn onClick={() => aprovReprov(candidate.id, true)}>Aprovar</Btn>
                    <Btn onClick={() => aprovReprov(candidate.id, false)}>Reprovar</Btn>
                </DivAprovReprov>
            </LiPend>
        </ul >
        )
    })

    // const candidateDetail = <ul>
    //     <Li>
    //         <P><Strong>Nome:</Strong>{tripCandidates.name}</P>
    //         <P><Strong>Descrição:</Strong>{tripCandidates.age}</P>
    //         <P><Strong>Planeta:</Strong>{tripCandidates.country}</P>
    //         <P><Strong>Duração:</Strong>{`${tripCandidates.applicationText} Dias`}</P>
    //         <P><Strong>Data:</Strong>{tripCandidates.profession}</P>
    //     </Li>
    // </ul >

    const candidatesAprov = aprovCandidates && aprovCandidates.map((candidate) => {
        return (
            <li key={candidate.id}>{candidate.name}</li>
        )
    })

    return (
        <PrimaryDiv>
            <SecondDiv>
                <h1>{tripDetails.name}</h1>
                {detailPage}
                <Btn onClick={() => goToPage(navigate, "/homeadmin")}>Voltar</Btn>
                <ThirdDiv>
                    <h1>Candidatos pendentes</h1>
                    {candidateDetail.length === 0 ? <p>Nenhum candidato pendente :(</p> : candidateDetail}
                    <h1>Candidatos Aprovados</h1>
                    <DivAprov>
                        {candidatesAprov && candidatesAprov.length > 0 ? candidatesAprov : <p> Nenhum candidato aprovado :(</p>}
                    </DivAprov>
                </ThirdDiv>
            </SecondDiv>
        </PrimaryDiv>
    )
}


export default TripDetailsPage;