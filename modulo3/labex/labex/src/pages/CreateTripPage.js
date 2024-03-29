import { goToPage, useProtectPage } from "../routes/coordinator";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'
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
    width: 500px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
`

const Select = styled.select`
    background-color: transparent;
    height: 35px;
    width: 500px;
    border-radius: 10px;
    border: solid black 1px;
    padding: 0 10px;
    border: none;
`

const DivInput = styled.div`
    /* background-color: green; */
    height: 40px;
    border-bottom: 2px solid black;
    border

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
    width: 500px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 70px;
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

function CreateTripPage() {
    const navigate = useNavigate();
    useProtectPage();
    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const addTrip = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips"
        const body = form
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "auth": localStorage.getItem("token")
            }
        }

        axios.post(url, body, headers)
            .then((res) => {
                alert("Viagem registrada!")
                console.log(res)
            }).catch((res) => {
                alert("Houve um erro.")
                console.log(res.response.data)
            })
    }



    return (
        <PrimaryDiv>
            <SecondDiv>
                <h1>Criar Viagem</h1>
                <DivForm>
                    <DivInput>
                        <Input name="name" type="text" value={form.name} onChange={onChange} pattern={"^.{5,}"} title={"Nome deve ter 5 letras ou mais"} placeholder="Nome" required />
                    </DivInput>
                    <DivInput>
                        <Select name="planet" value={form.planet} onChange={onChange}>
                            <option value="" selected disabled hidden required >Escolha um planeta</option>
                            <option value="Júpiter">Júpiter</option>
                            <option value="Marte" onChange={onChange} >Marte</option>
                            <option value="Mercúrio" onChange={onChange} >Mercúrio</option>
                            <option value="Netuno" onChange={onChange} >Netuno</option>
                            <option value="Saturno" onChange={onChange} >Saturno</option>
                            <option value="Urano" onChange={onChange} >Urano</option>
                            <option value="Vênus" onChange={onChange} >Vênus</option>
                        </Select>
                    </DivInput>
                    <DivInput>
                        <Input name="date" value={form.date} onChange={onChange} type="date" min={new Date().toISOString().slice(0, 10)} required />
                    </DivInput>
                    <DivInput>
                        <Input name="description" type="text" value={form.description} onChange={onChange} pattern={"^.{30,}"} title={"Descrição deve ter 30 letras ou mais"} placeholder="Descrição" required />
                    </DivInput>
                    <DivInput>
                        <Input name="durationInDays" value={form.durationInDays} onChange={onChange} min={50} title={"Deve ser mais que 50 dias"} type="number" placeholder="Duração em dias" required />
                    </DivInput>
                    <DivBtn>
                        <Btn onClick={addTrip}>Criar</Btn>
                        <Btn onClick={() => goToPage(navigate, "/homeadmin")}>Voltar</Btn>
                    </DivBtn>
                </DivForm>
            </SecondDiv>
        </PrimaryDiv>
    )
}
export default CreateTripPage;