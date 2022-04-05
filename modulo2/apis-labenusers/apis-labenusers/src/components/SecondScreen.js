import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Li = styled.li`
    margin: 10px 20px;
`

const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
};


class Screen2 extends React.Component {


    state = {
        users: []
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





    render() {

        const conmponentUsers = this.state.users.map((user) => {
            return <Li key={user.id}>{user.name}{user.email}</Li>
        })


        return (
            <div>
                {conmponentUsers}
                <hr></hr>
                <h4>Procurar usuário</h4>
                <input type="text" value="" onChange="" placeholder="Nome exato para busca"></input>
                <button>Salvar edição</button>
            </div>
        )
    }

}

export default Screen2;