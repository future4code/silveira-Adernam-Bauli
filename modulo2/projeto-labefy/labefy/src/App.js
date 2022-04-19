import React from "react";
import styled from "styled-components";
import axios from "axios";
import PlaylistPage from "./components/PlaylistPage";
import PlaylistMusicPage from "./components/PlaylistMusicPage";


const headers = {
  headers: {
    Authorization: "Adernam-Ferris-Bauli-Silveira"
  }
};

export default class App extends React.Component {

  state = {
    currentPage: "list",
    trackClicked: ""
  }


  goToTracksPage = (id) => {
    this.setState({currentPage: "tracks", trackClicked: id})
  }

  goToPlaylistPage = () => {
    this.setState({currentPage: "list", trackClicked: ""})
  }


  selectPage = () => {
    switch (this.state.currentPage) {
      case "list":
        return <PlaylistPage goToTracksPage={this.goToTracksPage} />
      case "tracks":
        return <PlaylistMusicPage goToPlaylistPage={this.goToPlaylistPage} id={this.state.trackClicked} />
      default:
        return <PlaylistPage />
    }
  }


  render() {
    return (
      <div>
        {this.selectPage()}
      </div>
    )
  }
}
