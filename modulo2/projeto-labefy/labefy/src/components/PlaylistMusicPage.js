import React from "react";
import styled from "styled-components";
import axios from "axios";


const DivClips = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const DivForm = styled.div`
    padding: 5px;
    display: flex;
    gap: 10px;
    margin-top: 560px;
`

const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
};


export default class PlaylistMusicPage extends React.Component {

    state = {
        track: [],
        trackName: "",
        artist: "",
        url: ""
    }


    componentDidMount() {
        this.getTrack()
    }

    getTrack = () => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        axios.get(url, headers)
            .then((res) => this.setState({ track: res.data.result.tracks }))
            .catch((err) => console.log(err.data))
    }

    addTrack = () => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`

        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(url, body, headers)
            .then((res) => {
                alert("Música adicionada com sucesso.")
                this.getTrack()
            })
            .catch((err) => {
                alert("Não foi possível adicionar a música na playlist.")
            })

        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    }

    onChangeTrackName = (event) => {
        this.setState({
            trackName: event.target.value
        });
    };

    onChangeArtist = (event) => {
        this.setState({
            artist: event.target.value
        });
    };

    onChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        });
    };


    render() {

        const detalhes = this.state.track.map((detalhe) => {
            return <div key={detalhe.id}>
                <p>{detalhe.artist} - {detalhe.name}</p>
                <iframe width="560" height="315"
                    src={detalhe.url}
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        })

        return (
            <div>
                <DivClips>
                    {detalhes}
                </DivClips>
                <DivForm>
                    <button onClick={this.props.goToPlaylistPage}>Voltar</button>
                    {<input type="text" value={this.state.trackName} onChange={this.onChangeTrackName} placeholder="Nome da Música"></input>}
                    {<input type="text" value={this.state.artist} onChange={this.onChangeArtist} placeholder="Cantor/banda"></input>}
                    {<input type="text" value={this.state.url} onChange={this.onChangeUrl} placeholder="Link da música"></input>}
                    <button onClick={this.addTrack}>Adicionar música</button>
                </DivForm>
            </div>
        )
    }
}