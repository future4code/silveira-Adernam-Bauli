import React from 'react';
import styled from 'styled-components';


const App = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

const Pagina3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

const H3 = styled.h3`
    margin: 18px 0 0 0;
`

class Form3 extends React.Component {
    state = {
        graducao: "",
        cursoComplementar: "",
    }



    render() {
        return (
            <App>
                <div>
                    <H3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</H3>
                </div>
                <Pagina3>
                    <p>5. Por que você não terminou um curso de graduação ?</p>
                    <input
                        value={this.state.curso}
                    />
                </Pagina3>
                <Pagina3>
                    <p>6. Você fez algum curso complementar ?</p>
                    <select>
                        <option value="Default">Nenhum</option>
                        <option value="Curso tecnico">Curso técnico</option>
                        <option value="Curso de Ingles">Curso de Inglês</option>
                    </select>
                </Pagina3>
            </App>
        )
    }
}

export default Form3