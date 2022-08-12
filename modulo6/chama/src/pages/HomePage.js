import styled from 'styled-components';
import { useState, useEffect, useNavigate } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import useForm from '../hooks/useForm';
import searchLogo from '../images/search.png';
import Userpicture from '../components/userPicture';


const App = styled.div`
    background-color: #212022;
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
`

const Searchbar = styled.div`
    display: flex;
    gap: 10px;
    margin-left: 25px;

    input{
        border-radius: 12px;
        border: none;
        padding-left: 10px;
    }

    img{
        height: 30px;
    }

    img:hover{
        background-color: gray;
    }
`

const UserContainer = styled.div`
    background-color: #F5F4F6;
    height: 500px;
    width: 500px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: 150px;
        width: 150px;
        border-radius: 50%;
        border: 10px solid white;
        margin-top: 30px;
    }
`

function HomePage() {
    const [userData, setUserData] = useState({});
    const { form, onChange } = useForm({ username: '' });

    const getUserData = async (url) => {
        try {
            const result = await axios.get(url);
            return result;
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        if (!userData) {
            alert('User not found.')
        };
        console.log(userData)
    }, [userData]);

    const onSubmit = () => {
        getUserData(`${BASE_URL}/users/${form.username}`)
            .then(setUserData)
    };

    return (
        <App>
            <Form>
                <p>Github Profile</p>
                <Searchbar>
                    <input name='username' value={form.username} onChange={onChange} placeholder='Github Username' />
                    <img src={searchLogo} onClick={onSubmit} />
                </Searchbar>
            </Form>
            <UserContainer>
                <img src={searchLogo} />
            </UserContainer>
        </App>
    );
}

export default HomePage;