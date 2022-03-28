import React from 'react';
import styled from 'styled-components';


const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const Pagina2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const H3 = styled.h3`
    margin: 18px 0 0 0;
`

class Form2 extends React.Component {
  state = {
    curso: "",
    unidadeEnsino: "",
  }



  render() {
    return (
      <App>
        <div>
          <H3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</H3>
        </div>
        <Pagina2>
          <p>5. Qual curso ?</p>
          <input
            value={this.state.curso}
          />
        </Pagina2>
        <Pagina2>
          <p>6. Qual a unidade de ensino ?</p>
          <input
            value={this.state.unidadeEnsino}
          />
        </Pagina2>
      </App>
    )
  }
}

export default Form2