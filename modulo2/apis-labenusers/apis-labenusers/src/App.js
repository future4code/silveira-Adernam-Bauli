import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Screen1 from './components/FirstScreen';
import Screen2 from './components/SecondScreen';


const AppDiv = styled.div`
  padding: 8px;
`



class App extends React.Component {

  state = {
    firstPage: true,
  }



  onClickButton = () => {
    this.setState({
      firstPage: !this.state.firstPage
    })
    console.log(this.state.firstPage)
  }

  showPage = () => {
    switch (this.state.firstPage) {
      case true:
        return (
          <div><Screen1 /></div>
        )
      case false:
        return (
          <div><Screen2 /></div>
        )
    }
  }

  render() {
    return (
      <AppDiv>
        <button onClick={this.onClickButton}> Trocar de tela</button>
        {this.showPage()}
      </AppDiv>
    );
  }
}

export default App;