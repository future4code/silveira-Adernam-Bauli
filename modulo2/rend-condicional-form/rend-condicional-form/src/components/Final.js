import React from 'react';
import styled from 'styled-components';


const H3 = styled.h3`
    margin: 18px 0 0 0;
`

const Form3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

class Final extends React.Component {
    state = {
        curso: "",
        unidadeEnsino: "",
    }



    render() {
        return (
            <div className="App">
                <Form3>
                    <H3>O FORMULÁRIO ACABOU</H3>
                    <p>Muito obrigado por participar! Entraremos em contato!</p>
                </Form3>
            </div>
        )
    }
}

export default Final