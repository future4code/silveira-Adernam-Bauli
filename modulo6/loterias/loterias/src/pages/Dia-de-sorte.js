import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../images/dia-de-sorte.png';

const Container = styled.div`
    background-color: #BFAF83;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100vw;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    };
`

const Content = styled.div`
    height: 90vh;
    width: 20vw;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 40vh;
        width: 100vw;
        margin: 50px 0;
        align-items: center;
    };
`

const Select = styled.select`
    height: 30px;
    width: 200px;
    border: none;
    border-radius: 10px;
    padding-left: 15px;
    font-weight: 100;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 38px;
        width: 170px;
    };
`

const Logotipo = styled.div`
    height: 60px;
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    p{
        color: white;
        font-size: 25px;
        font-weight: 900;
        margin: 0;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            font-size: 20px;
            margin: 20px 0;
        };
    };

    @media screen and (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        gap: 0;
    };
`

const Img = styled.img`
    height: 60px;
    width: 65px;
    margin-left: -10px;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 50px;
        width: 50px;
    };
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

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 50vh;
        width: 100vw;
        border-radius: 50% 50% 50% 0% / 15% 15% 0% 44% ;
        margin: 0;
        flex-direction: column;
        padding: 0;
        align-items: center;
    };
`

const Sort = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 48px;
    width: 800px;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 150px;
        width: 300px;
        margin-top: 50px;
        gap: 10px;
        flex-wrap: wrap;
    };
`

const H1 = styled.div`
    margin-top: 47vh;
    text-align: center;
    height: 75px;
    width: 90px;
    border: 10px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
    font-size: 30px;

        @media screen and (min-width: 320px) and (max-width: 480px) {
            font-size: 15px;
        };
    };

    @media screen and (min-width: 320px) and (max-width: 480px) {
        margin: 0;
        height: 55px;
        width: 55px;
    };
`

const Footer = styled.div`
    width: 800px;
    text-align: center;
    font-size: 11px;
    font-weight: 700;
    margin-top: 38vh;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 50px;
        width: 250px;
        font-size: 10px;
        margin: 30px 0;
    };
`

const Concurso = styled.div`
    width: 160px;
    height: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;

    h1{
        letter-spacing: 1px;
        font-size: 18px;
        font-weight: lighter;
        margin: 0;
        border: 0;
    };

    p{
        margin: 0;
        border: 0;
        font-weight: 700;
    };

    @media screen and (min-width: 320px) and (max-width: 480px) {
        gap: 6px;
    };
`


export default function DiaDeSorte() {
    const navigate = useNavigate();
    const [page,setPage] = useState('dia-de-sorte');
    const [diaDeSorte, setDiaDeSorte] = useState({});
    const date = String(diaDeSorte.data);
    const dateSplit = date.split('T');
    const concurso = `${diaDeSorte.id} - ${dateSplit[0]}`;

    const getNumbers = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getNumbers('https://brainn-api-loterias.herokuapp.com/api/v1/concursos/440')
            .then(setDiaDeSorte);
    }, []);

    useEffect(() => {
        navigate(`/${page}`);
    }, [page]);

    const onChange = (event) => {
        setPage(event.target.value);
    };

    return (
        <Container>
            <Content>
                <Select value={page} onChange={onChange}>
                    <option value='dia-de-sorte'>DIA DE SORTE</option>
                    <option value=''>MEGA-SENA</option>
                    <option value='quina'>QUINA</option>
                    <option value='lotoFacil'>LOTOFACIL</option>
                    <option value='lotoMania'>LOTOMANIA</option>
                    <option value='timeMania'>TIMEMANIA</option>
                </Select>
                <Logotipo>
                    <Img src={Logo} />
                    <p><stroing>DIA DE SORTE</stroing></p>
                </Logotipo>
                <Concurso>
                    <h1>Concurso</h1>
                    <p>{concurso}</p>
                </Concurso>
            </Content>
            <Raffle>
                <Sort>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[0]}</h1>
                    </H1>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[1]}</h1>
                    </H1>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[2]}</h1>
                    </H1>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[3]}</h1>
                    </H1>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[4]}</h1>
                    </H1>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[5]}</h1>
                    </H1>
                    <H1>
                        <h1>{diaDeSorte.numeros && diaDeSorte.numeros[6]}</h1>
                    </H1>
                </Sort>
                <Footer>
                    <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
                </Footer>
            </Raffle>
        </Container>
    );
};