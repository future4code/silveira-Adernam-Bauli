import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemPerfil from './imagens/FotoPerfil.png';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEmail from './imagens/o-email.png';
import ImagemLocation from './imagens/placeholder.png';
import styled from 'styled-components';

const AppMain = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 30px;
box-sizing: border-box;
`
const PageSectionContainer = styled.div`
width: 40vw;
margin: 10px 0;
box-sizing: border-box;
`
const AppH2 = styled.h2`  display: flex;
justify-content: center;
margin-bottom: 20px;
margin-top: 0px;
box-sizing: border-box;
`
function App() {
  return (
    <AppMain>
      <PageSectionContainer>
        <AppH2>Dados pessoais</AppH2>
        <CardGrande 
          imagem={ImagemPerfil}
          nome="Adernam Ferris Bauli" 
          descricao="Oi, eu me chamo Adernam Ferris Bauli. Sou o estudante de Desenvolvimento Web Fullstack da Labenu. Apaixonado por tecnologia desde cedo, e recém encantado pelo mundo da programação."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
      <CardPequeno
        imagem={ImagemEmail}
        nome="Email:"
        descricao="adernam147@hotmail.com"
        />

        <CardPequeno
        imagem={ImagemLocation}
        nome="Endereço:"
        descricao="Alta Floresta - MT"
        />
        </PageSectionContainer>

      <PageSectionContainer>
        <AppH2>Experiências profissionais</AppH2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de Desenvolvimento Web Fullstack." 
        />
        
        <CardGrande 
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" 
          nome="NASA" 
          descricao="Talvez um dia ?!" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <AppH2>Minhas redes sociais</AppH2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppMain>
  );
}

export default App;
