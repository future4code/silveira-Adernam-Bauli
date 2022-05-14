import React from "react";
import Logo from '../../assets/logo.png'
import { ScreenContainer } from "./styled";
import SignUpForm from './SignUpForm';
import {LogoImage} from './styled'
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage();
    
    return (
        <ScreenContainer>
            <LogoImage src={Logo}/>
            <SignUpForm setRightButtonText={setRightButtonText} />
        </ScreenContainer>
    )
}

export default SignUpPage;