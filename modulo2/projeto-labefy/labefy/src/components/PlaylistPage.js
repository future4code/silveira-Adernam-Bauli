import React from "react";
import styled from "styled-components";
import axios from "axios";



const Li = styled.li`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;

    &:hover {
        cursor: pointer;
        background-color: lightblue;
    }
`


const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
};


export default class PlaylistPage extends React.Component {

    state = {
        playlists: []
    }


    componentDidMount() {
        this.getPlaylist()
    }

    getPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, headers)
            .then((res) => this.setState({ playlists: res.data.result.list }))
            .catch((err) => alert("Ocorreu um erro com a lista."))
    }



    render() {
        const playlistsList = this.state.playlists.map((playlist) => {
            return <ul key={playlist.id}>
                <Li onClick={() => this.props.goToTracksPage(playlist.id)}>{playlist.name}</Li>
            </ul>
        })
        return (
            <div>
                olá
                {playlistsList}
            </div>
        )
    }
}