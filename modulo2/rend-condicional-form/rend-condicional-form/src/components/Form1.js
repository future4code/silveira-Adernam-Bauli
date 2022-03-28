import React from 'react';
import styled from 'styled-components';
import '../App.js';


const App = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const Pagina1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const H3 = styled.h3`
    margin: 18px 0 0 0;
`



class Form1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
  }



  render() {
    return (
      <App>
        <div>
          <H3>ETAPA 1 - DADOS GERAIS</H3>
        </div>
        <Pagina1>
          <p>1. Qual o seu nome ?</p>
          <input
            value={this.state.nome}
          />
        </Pagina1>
        <Pagina1>
          <p>2. Qual sua idade ?</p>
          <input
            value={this.state.idade}
          />
        </Pagina1>
        <Pagina1>
          <p>3. Qual seu email ?</p>
          <input
            value=""
          />
        </Pagina1>
        <Pagina1>
          <p>4. Qual a sua escolaridade ?</p>
          <select>
            <option value="Default">- Selecione sua escolaridade -</option>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
          </select>
        </Pagina1>

      </App>
    )
  }
}

export default Form1