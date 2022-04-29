import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../img/Logo.png'
import Like from '../img/Like.png'
import Matches from '../img/Matches.png'
import Deslike from '../img/Deslike.png'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    /* background-color: rgb(208, 208, 208); */
    font-family: Roboto, sans-serif;
}
`

const Card = styled.div`
    width: 500px;
    height: 745px;
    position: fixed;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`

const DivProfile = styled.div`
    display: flex;
    flex-direction: column;
    height: 530px;
`

const Header = styled.div`
    height: 50px;
`

const ImgAstro = styled.img`
    width: 190px;
    position: relative;
    margin: 0px 0 0 33%;
`

const MatchBtn = styled.img`
    width: 40px;
    margin-left: 80px;
    margin-top: 10px;

    &:hover{
            transform: scale(1.2);
            transition: 0.2s linear;
        }
`

const ProfileImg = styled.img`
    display: block;
    width: 90%;
    height: 500px;
    margin: 20px 25px;
    border-radius: 5px;
    box-shadow: 0 1px 20px 1px #888888;
    position: absolute;
`

const DivBio = styled.div`
    backdrop-filter: blur(1px);
    border-radius: 20px;
    width: 420px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 10px;
    margin: 82% auto;
`

const NameAge = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    height: 30px;
`

const Bio = styled.div`
    margin-top: -15px;
    padding: 0;
    height: 50px;

    p{
        color: white;
        text-shadow:  1px 0 black, 0 -1px black;
    }
`

const H2 = styled.h2`
    color: white;
    text-shadow:  1px 0 black, 0 -1px black;
`

const P = styled.p`
    color: white;
    text-shadow: 1px 0 black, 0 -1px black;
    margin-top: 20px;
`

const DivIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 30px;
    height: 140px;

    img {
        height: 100px;

        &:hover{
            transform: scale(1.2);
            transition: 0.2s linear;
        }
    }
`


function Home(props) {

    const [profile, setProfile] = useState({})


    useEffect(() => {
        GetProfileToChoose()
    }, [])


    const GetProfileToChoose = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adernam-silveira/person"
        axios
            .get(url)
            .then((res) => {
                if (res.data.profile) {
                    setProfile(res.data.profile)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const setMatch = (choice) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adernam-silveira/choose-person"
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = {
            "id": profile.id,
            "choice": choice
        }

        axios
            .post(url, body, headers)
            .then((res) => {
                GetProfileToChoose()
                console.log(res)
            })
    }

    return (
            <Card>
                <GlobalStyle />
                <Header>
                    <ImgAstro src={Logo} />
                    <MatchBtn onClick={props.setMatches} src={Matches} />
                </Header>
                <hr />
                <DivProfile>
                    <ProfileImg src={profile.photo} />
                    <DivBio>
                        <NameAge>
                            <H2>{profile.name},</H2>
                            <P>{profile.age}</P>
                        </NameAge>
                        <Bio>
                            <p>{profile.bio}</p>
                        </Bio>
                    </DivBio>
                </DivProfile>
                <DivIcons>
                    <img onClick={() => setMatch(false)} src={Deslike} />
                    <img onClick={() => setMatch(true)} src={Like} />
                </DivIcons>
            </Card>
    );
}

export default Home;