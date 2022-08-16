import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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

const ListOfReposContainer = styled.div`
    height: 500px;
    width: 96%;
    padding: 10px;
    overflow-y: scroll;
`

const Name = styled.h2`
    width: 95%;
    border-radius: 5px;
    margin-bottom: 10px;
    text-align: center;

    h2{
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #444;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: #777;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 10px;
    }
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
    }
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
    }
`

const ReposContainer = () => {
    const navigate = useNavigate();
    const history = JSON.parse(localStorage.getItem('history'));

    const clearStorage = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <App>
            <Section>
                <ButtonBack onClick={() => navigate('/')}>Back to Home</ButtonBack>
                <ButtonClear onClick={clearStorage}>Clear history</ButtonClear>
                <Title>History</Title>
                <ListOfReposContainer>
                    {history?.map(user => (<Name key={user}><h2>{user}</h2>
                    </Name>
                    ))}
                </ListOfReposContainer>
            </Section>
        </App>
    );
}

export default ReposContainer;