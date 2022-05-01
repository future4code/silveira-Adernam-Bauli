import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { goToPage } from "../routes/coordinator";
import { countries } from 'country-list-json'
import useForm from '../hooks/useForm.js'


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
    width: 540px;
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
    /* background-color: green; */
    width: 500px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
`

const Select = styled.select`
    /* height: 35px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 10px; */
    background-color: transparent;
    height: 35px;
    width: 500px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 6px;
    border: none;
    font-weight: 600;
`

const DivInput = styled.div`
    /* background-color: green; */
    height: 40px;
    border-bottom: 2px solid black;

    &:focus{
        border: none;
        outline: none;
        color: white;
    }
`

const Input = styled.input`
    /* height: 35px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 10px; */
    background-color: transparent;
    height: 35px;
    width: 500px;
    /* border-radius: 10px; */
    /* border: solid black 1px; */
    padding: 0 10px;
    border: none;
    color: black;
    font-weight: 600;

    &::placeholder{
        color: black;
        font-weight: 600;
    }

    &:focus{
        border: none;
        outline: none;
        color: black;
        font-weight: 600;
    }
`

const DivBtn = styled.div`
    /* background-color: green; */
    /* width: 100%; */
    padding-left: 20px;
    display: flex;
    flex-direction: row-reverse;
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
    const { form, onChange } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })
    const [tripId, setTripId] = useState("")

    useEffect(() => {
        getTrips();
    }, [])

    useEffect(() => {
        console.log(form)
        console.log(tripId)
    }, [form])

    const getTrips = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips`
        axios.get(url)
            .then((res) => {
                console.log(res)
                setTripsList(res.data.trips)
            })
            .catch((res) => {
                console.log(res)
                alert("Ops, algo deu errado.")
            })
    }

    const applyToTrip = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips/${tripId}/apply`
        const body = form
        // name: form.name,
        // age: form.age,
        // applicationText: form.applicationText,
        // profession: form.profession,
        // country: form.country,
        // trip: tripId.id


        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }

        axios.post(url, body)
            .then((res) => {
                alert("Inscrição registrada!")
                console.log(res)
            }).catch((res) => {
                alert("Houve um erro.")
                console.log(res)
            })
    }

    const tripsDetails = tripsList.map((detail) => {
        return <option value={detail.id}>{detail.name}</option>
    })

    const countryList = countries.map((country) => {
        return <option value={countries.name}>{country.name}</option>
    })

    const onChangeTrip = (event) => {
        setTripId(event.target.value)
    }

    return (
        <FirstDiv>
            <SecondDiv>
                <H1>Inscreva-se para uma viagem</H1>
                <DivForm>
                    <DivInput>
                        <Select name={tripId} value={tripId} onChange={onChangeTrip} onSubmit={() => applyToTrip(form.trip)}>
                            {tripsDetails}
                        </Select>
                    </DivInput>
                    <DivInput>
                        <Input name="name" value={form.name} onChange={onChange} placeholder="Nome" />
                    </DivInput>
                    <DivInput>
                        <Input name="age" value={form.age} onChange={onChange} placeholder="Idade" />
                    </DivInput>
                    <DivInput>
                        <Input name="applicationText" value={form.applicationText} onChange={onChange} placeholder="Texto de Candidatura" />
                    </DivInput>
                    <DivInput>
                        <Input name="profession" value={form.profession} onChange={onChange} placeholder="Profissão" />
                    </DivInput>
                    <DivInput>
                        <Select name="country" value={form.country} onChange={onChange}>
                            <option>Escolha um País</option>
                            {countryList}
                        </Select>
                    </DivInput>
                </DivForm>
                <DivBtn>
                    <Btn onClick={() => applyToTrip(form.trip)}>Enviar</Btn>
                    <Btn onClick={() => goToPage(navigate, "/trips")}>Voltar</Btn>
                </DivBtn>
            </SecondDiv>
        </FirstDiv>
    )
}
export default ApplicationFormPage;