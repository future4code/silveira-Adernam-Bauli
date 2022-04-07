import React from "react";
import styled from "styled-components";
import axios from "axios";



const headers = {
    headers: {
        Authorization: "Adernam-Ferris-Bauli-Silveira"
    }
};


export default class PlaylistMusicPage extends React.Component {

    state = {
        track: {}
    }


    componentDidMount () {
        this.getTrack()
    }

    getTrack = () => {
        axios.get(this.props.id, headers)
        .then((res) => this.setState({track: res.data}))
        .catch((err) => console.log(err.data))
    }


    render() {
        console.log(this.state.track)
        return (
            <div>{this.props.id}</div>
        )
    }
}