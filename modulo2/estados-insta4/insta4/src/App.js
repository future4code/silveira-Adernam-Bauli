import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from './components/Post/Post3';
import PostNovo from './components/Post/PostNovo';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`
const ButtonStyle = styled.button`
margin: 20px;
background: black;
color: white;
`
const DivButtons = styled.div`
display: flex;
gap: 10px;
`
const LabelButton = styled.label`
display: flex;
flex-direction: column;
font-weight: 500
`

class App extends React.Component {

  state = {
    pessoas: [
    { nomeUsuario: "Paulinha", fotoUsuario: "https://picsum.photos/50/50", fotoPost: "https://picsum.photos/200/150"},
    { nomeUsuario: "Adernam F. Bauli", fotoUsuario: "https://scontent.fafl1-1.fna.fbcdn.net/v/t1.6435-9/60160426_2186909051423738_8735415983402909696_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3qt9zuFNqmEAX_bypGC&_nc_ht=scontent.fafl1-1.fna&oh=00_AT_rV6gMD_Y8anwtwzE28VO60DXzIKd1m-wwFQvFpeB2Ag&oe=62619FD3", fotoPost: "https://picsum.photos/200/151"},
    { nomeUsuario: "jububanz", fotoUsuario: "https://scontent.fafl1-1.fna.fbcdn.net/v/t39.30808-6/277103058_1854992588025971_5188308316503462494_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zIESTIcwOZYAX9o_wq6&_nc_ht=scontent.fafl1-1.fna&oh=00_AT89MDY7XDSSuVUQEnqmSfuMQ-ZC__DuRf74wzVqCRkj7w&oe=62405860", fotoPost: "https://picsum.photos/200/153"},
     
  ],
   nomeUsuario: "",
   fotoUsuario: "",
   fotoPost: ""
  }

  adicionarPost = () => {
    const novoPost = {
    nomeUsuario: this.state.nomeUsuario,
    fotoUsuario: this.state.fotoUsuario,
    fotoPost: this.state.fotoPost
    };

    const novoPessoas = [...this.state.pessoas, novoPost];

    this.setState({
      pessoas: novoPessoas,
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""
    });
  };

  onChangeInputNome = (event) => {    
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeInputPerfil = (event) => {
    this.setState({ fotoUsuario: event.target.value});
  };

  onChangeInputPost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };


  render() {
    const listaDeComponentes = this.state.pessoas.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <DivButtons>
        <LabelButton>Digite seu nome:
          <input
            value={this.state.nomeUsuario}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}/>
        </LabelButton>
        <LabelButton>Cole o link da sua foto de perfil:
          <input
          value={this.state.fotoUsuario}
          onChange={this.onChangeInputPerfil}
          placeholder={"E-mail"}/>
        </LabelButton>
        <LabelButton>Cole o link da foto que deseja postar:
          <input
            value={this.state.fotoPost}
            onChange={this.onChangeInputPost}
            placeholder={"Telefone"}/>
        </LabelButton>
        </DivButtons>
        <ButtonStyle onClick={this.adicionarPost}>Postar</ButtonStyle>
        {listaDeComponentes}
      </MainContainer>
    );
  }

}
export default App;