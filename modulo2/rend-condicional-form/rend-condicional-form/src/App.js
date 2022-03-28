import React from 'react';
import Form1 from './components/Form1.js';
import Form2 from './components/Form2.js';
import Form3 from './components/Form3.js';
import Final from './components/Final.js';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  text-align: center;
}`

const Button = styled.button`
  width: 100px;
  height: 22px;
  padding: 0 0;
  margin: 15px 27.5%;
`

class App extends React.Component {

  state = {
    pagina: 1
  }



  renderizaPagina = () => {
    switch (this.state.pagina) {
      case 1:
        return (
          <Form1 />
        )
      case 2:
        return (
          <Form2 />
        )
      case 3:
        return (
          <Form3 />
        )
      case 4:
        return (
          <Final />
        )
    }
  }

  proximaPagina = () => {
    this.setState({ pagina: this.state.pagina + 1 })
  }

  render() {


    return (
        <div>
          <GlobalStyled />
          {this.renderizaPagina()}
          {this.state.pagina!==4 ? <Button onClick={this.proximaPagina}>Próxima etapa</Button> : <div></div>}
        </div>
    )
  }

}

export default App;