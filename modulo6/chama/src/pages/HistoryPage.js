import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { useContext } from 'react';
import { GlobalStateContext } from "../context/GlobalStateContext";

const App = styled.div`
    background-color: #333233;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const Section = styled.section`
    background-color: #F5F4F6;
    height: 500px;
    width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 12px solid #FF7A00;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 90vh;
        width: 99vw;
    };
`

const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #444;
    width: 100%;
    text-align: center;
    height: 30px;
`

const HistoryList = styled.div`
    height: 89%;
    width: 95%;
    padding: 10px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 320px) and (max-width: 480px) {
        margin-right: 20px;
    };
`

const Name = styled.div`
    width: 95%;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: center;
    padding-left: 20px;

    :hover{
        background-color: #767477;
        cursor: pointer;
    };

    h2{
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    };

    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding-left: 25px;
    };
`

const ButtonBack = styled.button`
    background-color: #767477;
    height: 25px;
    border-radius: 5px;
    border: none;
    color: white;
    position: absolute;
    margin: 13px 375px 0 0;

    :hover{
        background-color: #525153;
    };

    @media screen and (min-width: 320px) and (max-width: 480px) {
        margin: 13px 260px 0 0;
    };
`

const ButtonClear = styled.button`
    background-color: #767477;
    height: 25px;
    border-radius: 5px;
    border: none;
    color: white;
    position: absolute;
    margin: 13px 0 0 375px;

    :hover{
        background-color: #525153;
    };

    @media screen and (min-width: 320px) and (max-width: 480px) {
        margin: 13px 0 0 260px;
    };
`

const ReposContainer = () => {
    const navigate = useNavigate();
    const history = JSON.parse(localStorage.getItem('history'));
    const { setters } = useContext(GlobalStateContext);

    const clearStorage = () => {
        localStorage.clear();
        window.location.reload();
    };

    const onClickUser = (user) => {
        getUserData(`${BASE_URL}/users/${user}`)
            .then(setters.setCurrentUser);
        navigate('/');
    };

    const getUserData = async (url) => {
        try {
            const result = await axios.get(url);
            return result;
        } catch (error) {
            alert('User not found.');
            window.location.reload();
        };
    };

    return (
        <App>
            <Section>
                <ButtonBack onClick={() => navigate('/')}>Back to Home</ButtonBack>
                <ButtonClear onClick={clearStorage}>Clear history</ButtonClear>
                <Title>History</Title>
                <HistoryList>
                    {history?.map((user, index) => (<Name onClick={() => onClickUser(user)} key={index}><h2>{user}</h2>
                    </Name>
                    ))}
                </HistoryList>
            </Section>
        </App>
    );
}

export default ReposContainer;