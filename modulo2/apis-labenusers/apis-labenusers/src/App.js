import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Screen1 from './components/FirstScreen';
import Screen2 from './components/SecondScreen';


const DivDad = styled.div`
  display: flex;
  justify-content: center;
`


const DivApp = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`

const Btn = styled.button`
  width: 98px;
  margin: auto;
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

  keyPress = (event) => {
    if (event.keyCode === 13) {
      this.criarCadastro()
    }
  }

  render() {
    return (
      <DivDad>
        <DivApp>
          <Btn onClick={this.onClickButton}> Trocar de tela</Btn>
          {this.showPage()}
        </DivApp>
      </DivDad>
    );
  }
}

export default App;