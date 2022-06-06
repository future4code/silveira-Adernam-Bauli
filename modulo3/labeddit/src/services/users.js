import axios from "axios";
import { BASE_URL } from '../constants/urls';
import { useNavigate } from 'react-router-dom';



export const login = (body, clear, navigate, setRightButtonText) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            clear();
            navigate('/')
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert("Erro ao fazer login")
            console.Console.log(err.response.data.message)            
        })
}

export const signUp = (body, clear, navigate, setRightButtonText) => {
    // setIsLoading(true)
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            // setIsLoading(false)
            navigate('/')
            setRightButtonText("Logout")
        })
        .catch((err) => {
            // setIsLoading(false)
            console.log(err.response.data.message)
            alert("Erro ao realizar cadastro")
        })
}