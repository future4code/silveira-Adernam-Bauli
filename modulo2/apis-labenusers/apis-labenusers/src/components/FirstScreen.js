import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const FirstDiv = styled.div`
`

const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
};

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class Screen1 extends React.Component {

    state = {
        users: [],
        inputName: "",
        inputEmail: "",
    }


    // componentDidMount() {
    //     //Pegar todas as playlists
    //     this.getAllUsers();
    // }


    // getAllUsers() {

    //     const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    //     axios
    //         .get(url, headers)
    //         .then((res) => {
    //             console.log(res.data);
    //             this.setState({
    //                 users: res.data
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err.response.data);
    //         });
    // }


    postUser = (event) => {

        event.preventDefault();

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };

        axios
            .post(`${baseUrl}`, body, headers)
            .then((res) => {
                console.log("Deu certo")
                this.getAllUsers();
            })
            .catch((err) => {
                //Alertar caso um erro aconteça
                alert(err.response.data.message);
            });
        this.setState({
            inputName: "",
            inputEmail: "",
        });
    };


    onChangeName = (event) => {
        this.setState({
            inputName: event.target.value
        });
    };

    onChangeEmail = (event) => {
        this.setState({
            inputEmail: event.target.value
        });
    };

    funcaoTeste = (event) => {
        if (event.keyCode === 13 && this.state.mensagem) {
            this.postUser()
            document.getElementById("Mail").focus();
        };
    };


    render() {



        return (
            <FirstDiv>
                <div>
                    <input type="text" value={this.state.inputName} onChange={this.onChangeName} placeholder="Nome"></input>
                    <input id="Mail" className="Mail" type="text" value={this.state.inputEmail} onChange={this.onChangeEmail} placeholder="E-mail"></input>
                    <button onClick={this.postUser}>Criar Usuário</button>
                </div>
            </FirstDiv>
        );
    };

};



export default Screen1;