import React from "react";
import styled from "styled-components";
import axios from "axios";
import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`

const DivUl = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    margin-top: 12px;
`

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`

const Li = styled.li`
    border: 1px solid black;
    padding: 7px;
    display: flex;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }
`

const FormDiv = styled.div`
display: flex;
justify-content: space-between;

`

const DivApp = styled.div`
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
`

const Btn = styled.button`
    padding: 0 8px;
`

const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
}


export default class PlaylistPage extends React.Component {

    state = {
        playlists: [],
        inputPlaylist: ""
    }


    componentDidMount() {
        this.getPlaylist()
    }

    getPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, headers)
            .then((res) => this.setState({ playlists: res.data.result.list }))
            .catch((err) => console.log(err))
    }

    postTrack = (event) => {

        event.preventDefault();

        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.inputPlaylist
        };

        axios
            .post(url, body, headers)
            .then((res) => {
                console.log("Deu certo")
                this.getPlaylist();
            })
            .catch((err) => {
                //Alertar caso um erro aconteça
                alert(err.response.data.message);
            });
        this.setState({
            inputPlaylist: "",
        });
    }

    onChangePlaylist = (event) => {
        this.setState({
            inputPlaylist: event.target.value
        });
    };

    deletePlaylist = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        axios.delete(url, headers)
        .then((res) => {
            alert("Playlist exluída com sucesso!")
            this.getPlaylist()
        })
        .catch((err) => {
            alert("Não foi possível deletar este usuário, tente novamente.")
        })
    }



    render() {
        const playlistsList = this.state.playlists.map((playlist) => {
            return <Ul key={playlist.id}>
                <Li onClick={() => this.props.goToTracksPage(playlist.id)}>{playlist.name}</Li> <Btn onClick={() => this.deletePlaylist(playlist.id)}>x</Btn>
            </Ul>
        })
        return (
            <DivApp>
                <FormDiv>
                    <input type="text" value={this.state.inputPlaylist} onChange={this.onChangePlaylist} placeholder="Nome da playlist"></input>
                    <Btn onClick={this.postTrack}>Criar Playlist</Btn>
                </FormDiv>
                <DivUl>
                    {playlistsList}
                </DivUl>
            </DivApp>
        )
    }
}