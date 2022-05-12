import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { StyledToolbar } from './styled'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from "../../context/GlobalStateContext";

const ButtonAppBar = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const { setters } = useContext(GlobalStateContext);

    const logout = () => {
        localStorage.removeItem("token");
    }

    const labeddit = () => {
        navigate('/');
        setters.setCurrentPage("posts")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            navigate('/login')
        } else {
            navigate('/login')
        }
    }



    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={labeddit} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    )
}

export default ButtonAppBar;