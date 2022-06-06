import React from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { InputsContainer, SignUpFormContainer } from './styled';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {signUp} from '../../services/users'

const SignUpForm = ({setRightButtonText}) => {
    const navigate = useNavigate();
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "", })

    const onSubmitForm = (event) => {
        event.preventDefault();
        signUp(form, clear, navigate, setRightButtonText)
    }


    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                    <TextField
                        label={"Nome"}
                        name={"username"}
                        value={form.username}
                        onChange={onChange}
                        fullWidth
                        required
                        autoFocus
                        type={"text"}
                        margin={"dense"}
                    />
                    <TextField
                        label={"E-mail"}
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        fullWidth
                        required
                        margin={"dense"}
                        type={"email"}
                    />
                    <TextField
                        label={"Senha"}
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        fullWidth
                        margin={"dense"}
                        required
                        type={"password"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                    >Fazer Cadastro!
                    </Button>
                </InputsContainer>
            </SignUpFormContainer>
        </form >
    )
}

export default SignUpForm;