import React from "react";
import { InputsContainer } from './styled';
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';
import { Button } from "@mui/material";
import { login } from '../../services/users';
import { useNavigate } from 'react-router-dom';



const LoginForm = ({setRightButtonText }) => {
    const [form, onChange, clear] = useForm({ email: "", password: "", })
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault();
        login(form, clear, navigate, setRightButtonText);
    }


    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    label={"E-mail"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    fullWidth
                    required
                    type={"email"}
                />
                <TextField
                    label={"Senha"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    fullWidth
                    margin={"normal"}
                    required
                    type={"password"}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                >Fazer Login!
                </Button>
            </form>
        </InputsContainer>
    )
}

export default LoginForm;