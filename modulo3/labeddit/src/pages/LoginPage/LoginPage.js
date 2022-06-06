import React from "react";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from './styled';
import Logo from '../../assets/logo.png';
import { Button } from "@mui/material";
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButtonText}) => {
    const navigate = useNavigate();
    useUnprotectedPage();

    return (
        <ScreenContainer>
            <LogoImage src={Logo} />
            <LoginForm setRightButtonText={setRightButtonText} />
            <SignUpButtonContainer>
                <Button
                    onClick={() => navigate('/cadastro')}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                >
                    Não possui uma conta? Cadastre-se!
                </Button>
            </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage;