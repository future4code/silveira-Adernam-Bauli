import React, { useState, useEffect, } from "react";
import styled from 'styled-components';
import { useNavigate, useHistory, useParams } from 'react-router-dom'
import { goToPage, useProtectPage } from "../routes/coordinator";
import axios from "axios";


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

function TripDetailsPage() {
    useProtectPage();
    const [tripDetails, setTripsDetails] = useState([])
    const [tripCandidates, setTripCandidates] = useState({})
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
                console.log(res.data.trip.candidates)
                setTripsDetails(res.data.trip)
                setTripCandidates(res.data.trip.candidates)
            }).catch((erro) => {
                console.log(erro)
            })
        // console.log(tripCandidates)
    }

    console.log(tripCandidates)

    useEffect(() => {
        getTripDetail();
    }, [])

    const detailPage = <ul>
        <Li>
            <P><Strong>Nome:</Strong>{tripDetails.name}</P>
            <P><Strong>Descrição:</Strong>{tripDetails.description}</P>
            <P><Strong>Planeta:</Strong>{tripDetails.planet}</P>
            <P><Strong>Duração:</Strong>{`${tripDetails.durationInDays} Dias`}</P>
            <P><Strong>Data:</Strong>{tripDetails.date}</P>
        </Li>
    </ul >

    // const candidateDetail = tripCandidates.map((candidate) => {
    //     return (<ul>
    //         <Li>
    //             <P><Strong>Nome:</Strong>{candidate.name}</P>
    //             <P><Strong>Descrição:</Strong>{candidate.age}</P>
    //             <P><Strong>Planeta:</Strong>{candidate.country}</P>
    //             <P><Strong>Duração:</Strong>{candidate.applicationText}` dias`</P>
    //             <P><Strong>Data:</Strong>{candidate.profession}</P>
    //         </Li>
    //     </ul >
    //     )
    // })

    const candidateDetail = <ul>
        <Li>
            <P><Strong>Nome:</Strong>{tripCandidates.name}</P>
            <P><Strong>Descrição:</Strong>{tripCandidates.age}</P>
            <P><Strong>Planeta:</Strong>{tripCandidates.country}</P>
            <P><Strong>Duração:</Strong>{`${tripCandidates.applicationText} Dias`}</P>
            <P><Strong>Data:</Strong>{tripCandidates.profession}</P>
        </Li>
    </ul >


    return (
        <div>
            Esta é a TripsDetailsPage!
            {detailPage}
            {candidateDetail}
        </div>
    )
}


export default TripDetailsPage;