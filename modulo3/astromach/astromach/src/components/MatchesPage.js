import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../img/Logo.png'
import Tinder from '../img/Tinder.png'
import styled from 'styled-components';

const Card = styled.div`
    width: 500px;
    height: 745px;
    position: fixed;
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`

const Header = styled.div`
    height: 50px;
    padding-left: 10px;
    padding-top: 5px;
`

const MatchBtn = styled.img`
    width: 45px;

    &:hover{
            transform: scale(1.2);
            transition: 0.2s linear;
        }
`

const ImgAstro = styled.img`
    width: 190px;
    position: relative;
    margin-left: 100px;
`

const BtnClear = styled.button`
    background-color: white;
    border-radius: 20px;
    width: 90px;
    height: 40px;
    position: absolute;
    margin: 7px 0 0 40px;

    &:hover {
        background-color: lightcoral;
        transition: 0.6s;
    }
`

const Li = styled.li`
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    gap: 10px;

    p{
        height: 10px;
        font-size: 20px;
    }
`

const ImgMatch = styled.img`
    width: 80px;
    border-radius: 30%;
`

const ContentMatch = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
`


function MatchesPage(props) {

    const [matchList, setMatchList] = useState([])

    useEffect(() => {
        getMatches();
    }, [])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adernam-silveira/matches"

        axios.get(url)
            .then((res) => {

                setMatchList(res.data.matches)
            })
            .catch((res) => console.log(res))
    }

    const clearMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/adernam-silveira/clear"

        axios.put(url)
        .then((res) => {
            console.log(res)
            alert("Matches cleared!")
            getMatches()
        })
    }

    const newMatchList = matchList.map((match) => {
        return <ul key={match.id}>
            <Li><ImgMatch src={match.photo} /> <p>{match.name}</p></Li>
        </ul>
    })

    return (
        <Card>
            <Header>
                <MatchBtn onClick={props.setHome} src={Tinder} />
                <ImgAstro src={Logo} />
                <BtnClear onClick={clearMatches}>Clear Matches</BtnClear>
            </Header>
            <hr />
            <ContentMatch>
                {newMatchList}
            </ContentMatch>
        </Card>
    );
}

export default MatchesPage;