import { goToPage, useProtectPage } from "../routes/coordinator";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Lixeira from '../img/lixeira.png'

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

const DivBtn = styled.div`
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
    margin: 20px 0;
    padding: 0 30px;

    &:hover{
        cursor: pointer;
        background-color: #B6D4E3;
    }
`

const Li = styled.li`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur( 5px );
    list-style-type: none;
    text-align: left;
    width: 500px;
    height: 65px;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    /* padding: 5px 20px; */
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */
    position: relative;

    p{
        color: black;
        margin-left: 20px;
        font-weight: 600;
        position: relative;
        
        &:hover{
        cursor: pointer;
        position: relative;
        }
    }

    img{
        width: 35px;
        height: 35px;
        margin-left: 450px;
        position: absolute;

        &:hover{
            transform: scale(1.1);
            transition: 0.2s linear;
            cursor: pointer;
        }
    }
`

const Del = styled.button`
    background-color: transparent;
    border: none;
    width: 35px;
    height: 35px;
    margin-left: 420px;
    position: absolute;

    &:hover{
        transform: scale(1.1);
        transition: 0.2s linear;
        cursor: pointer;
    }
`

function AdminHomePage() {
    useProtectPage();
    const navigate = useNavigate();
    const [tripsList, setTripsList] = useState([])


    useEffect(() => {
        getTrips();
    }, [])


    const getTrips = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips`

        axios.get(url)
            .then((res) => {
                setTripsList(res.data.trips)
            })
            .catch((res) => {
                console.log(res)
            })
    }

    const deleteTrip = (id) => {
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adernam-silveira/trips/${id}`, headers)
            .then((res) => {
                alert('Viagem deletada com sucesso!')
                console.log(res)
                getTrips();
            }).catch((err) => {
                alert('Não foi possível deletar sua viagem!')
            })
    }

    const rendDetail = (id) => {
        goToPage(navigate, `/tripsdetails/${id}`)
    }

    const logout = () => {
        localStorage.setItem('token', "")
        goToPage(navigate, "/login")
    }


    const tripsDetails = tripsList && tripsList.map((detail) => {
        return <ul key={detail.id}>
            <Li>
                <p onClick={() => rendDetail(detail.id)}>{detail.name}</p>

                {/* Eu havia feito um botão com imagem de uma lixeira mas ele buga o tamanho quando recarrega a página. */}
                {/* <img src={Lixeira} onClick={() => deleteTrip(detail.id)} /> */}
                <Del onClick={() => deleteTrip(detail.id)}>Excluir</Del>
            </Li>
        </ul>
    })

    return (
        <PrimaryDiv>
            <SecondDiv>
                <h1>Painel Administrativo</h1>
                <DivBtn>
                    <Btn onClick={() => goToPage(navigate, "/")}>Voltar</Btn>
                    <Btn onClick={() => goToPage(navigate, "/createtrip")}>Criar Viagem</Btn>
                    <Btn onClick={logout}>Logout</Btn>
                </DivBtn>
                {tripsDetails}
            </SecondDiv>
        </PrimaryDiv>
    )
}
export default AdminHomePage;