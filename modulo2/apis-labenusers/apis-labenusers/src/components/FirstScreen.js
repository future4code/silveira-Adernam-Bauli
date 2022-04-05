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


    postUser = () => {

        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        };

        axios
            .post(`${baseUrl}`, body, headers)
            .then((res) => {
                this.getAllUsers();
            })
            .catch((err) => {
                //Alertar caso um erro aconteça
                alert(err.response.data.message);
            });
        this.setState({
            inputName: "",
            inputEmail: "",
        })
    };


    onChangeName = (event) => {
        this.setState({
            inputName: event.target.value
        })
    }

    onChangeEmail = (event) => {
        this.setState({
            inputEmail: event.target.value
        })
    }




    render() {

        // const conmponentUsers = this.state.users.map((user) => {
        //     return <li key={user.id}>{user.name}{user.email}</li>
        // })

        return (
            <FirstDiv>
                <div>
                    <div>
                        <input type="text" value={this.state.inputName} onChange={this.onChangeName} placeholder="Nome"></input>
                        <input type="text" value={this.state.inputEmail} onChange={this.onChangeEmail} placeholder="E-mail"></input>
                        <button onClick={this.postUser}>Criar Usuário</button>
                    </div>
                    <div>
                        {/* {conmponentUsers} */}
                    </div>
                </div>
            </FirstDiv>
        )
    }

}



export default Screen1;