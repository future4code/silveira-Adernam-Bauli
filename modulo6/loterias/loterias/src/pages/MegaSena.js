import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Logo from '../images/mega-sena-logo.png';

const Container = styled.div`
    background-color: #6BEFA3;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
`

const Content = styled.div`
    height: 100vh;
    width: 40vw;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`

const Img = styled.img`
    height: 39px;
    width: 200px;
`

const Raffle = styled.div`
    background-color: #EFEFEF;
    height: 100%;
    width: 60vw;
`


export default function MegaSena() {




    return (
        <Container>
            <Content>
                <Img src={Logo} />
            </Content>
            <Raffle>

            </Raffle>
        </Container>
    )
}