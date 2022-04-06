import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Li = styled.li`
    margin: 10px 20px;
    height: 20px;
    width: 250px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
`


const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
};


class Screen2 extends React.Component {


    state = {
        users: [],
        search: ""
    }


    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers() {

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        axios
            .get(url, headers)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    users: res.data
                });
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }


    deleteUser = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, headers)
        .then((res) => {
            alert("Usuário(a) exluído com sucesso!")
            this.getAllUsers()
        })
        .catch((err) => {
            alert("Não foi possível deletar este usuário, tente novamente.")
        })
    }


    onChangeSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }



    render() {

        const conmponentUsers = this.state.users.map((user) => {
            return (
            <Li key={user.id}>{user.name}{user.email} <button onClick={() => this.deleteUser(user.id)}>x</button></Li>
            )
        })


        return (
            <div>
                {conmponentUsers}
                <hr></hr>
                <h4>Procurar usuário</h4>
                <input type="text" value={this.state.search} onChange={this.onChangeSearch} placeholder="Nome exato para busca"></input>
                <button>Salvar edição</button>
            </div>
        )
    }

}

export default Screen2;