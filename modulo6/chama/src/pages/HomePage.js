import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import searchLogo from '../images/search.png';


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

const Form = styled.div`
    background-color: #525153;
    height: 150px;
    width: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    p{
        height: 30px;
        width: 140px;
        border-radius: 3px;
        text-align: center;
        margin: 0;
        font-size: 20px;
        font-weight: 500;
        color: white;
    }
`

const Searchbar = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 25px;

    input{
        height: 30px;
        width: 180px;
        border-radius: 12px;
        border: none;
        padding-left: 10px;
        font-size: 16px;
    }

    img{
        background-color: #FF6C00;
        height: 22px;
        border-radius: 20px;
        padding: 5px;
    }

    img:hover{
        background-color: #ea6709;
    }
`

const UserContainer = styled.div`
    background-color: #F5F4F6;
    height: 500px;
    width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 12px solid #FF7A00;

    img{
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 10px solid white;
        margin-top: 30px;
    }

    h2{
        margin: 15px 0 10px 0;
        color: #444;
    }

    p{
        margin: 0 0 30px 0;
        color: #444;
        font-weight: 500;
    }
`

const UserDetails = styled.div`
    height: 80px;
    width: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Detail = styled.div`
    height: 60px;
    width: 100px;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover{
        background-color: #767477;
    }

    h1{
        font-size: 29px;
        margin: 0;
    }

    p{
        font-size: 15px;
        font-weight: 700;
        margin: 0;
    }
`

const Button = styled.button`
    background-color: #767477;
    height: 25px;
    border-radius: 5px;
    border: none;
    color: white;
    position: absolute;
    margin: 467px 0 0 355px;

    :hover{
        background-color: #525153;
    }
`

function HomePage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const { form, onChange } = useForm({ username: '' });
    let history = [];

    const updateLocalStorage = () => {
        if (localStorage.history) {
            history = JSON.parse(localStorage.getItem('history'))
        }

        const newHistory = form.username;
        history.push(newHistory);
        localStorage.setItem('history', JSON.stringify(history));
    };

    const onSubmit = () => {
        getUserData(`${BASE_URL}/users/${form.username}`)
            .then(setUserData);
        updateLocalStorage();
        form.username = '';
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
            <Form>
                <p>Github Profile</p>
                <Searchbar>
                    <input name='username' value={form.username} onChange={onChange} placeholder='Github Username' />
                    <img src={searchLogo} onClick={() => onSubmit(form.username)} />
                </Searchbar>
            </Form>
            {userData.data?.name ?
                <UserContainer>
                    <img src={userData.data?.avatar_url} />
                    <h2>{userData.data?.name}</h2>
                    <p>{userData.data?.login}</p>
                    <p>{userData.data?.bio}</p>
                    <UserDetails>
                        <Detail>
                            <h1>{userData.data.public_repos}</h1>
                            <p>Repositories</p>
                        </Detail>
                        <Detail>
                            <h1>{userData.data.followers}</h1>
                            <p>Followers</p>
                        </Detail>
                        <Detail>
                            <h1>{userData.data.following}</h1>
                            <p>Following</p>
                        </Detail>
                    </UserDetails>
                    <Button onClick={() => navigate('/history')}>View search history</Button>
                </UserContainer>
            : undefined}
        </App>
    );
};

export default HomePage;