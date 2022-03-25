import './App.css';
import React from 'react';


class App extends React.Component {

  state = {
    chat: [
      {usuario: "Adernam", mensagem: "Olá tudo bem"}
    ],
    valorInputUsuario: "",
    valorInputMensagem: "",
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    const novoChat = [...this.state.chat, novaMensagem]

    this.setState({
      chat: novoChat,
      valorInputMensagem: ""
    })
  }

  onChangeInputUsuario = (event) => {
    this.setState({
      valorInputUsuario: event.target.value
    })
  };

  onChangeInputMensagem = (event) => {
    this.setState({
      valorInputMensagem: event.target.value
    });
  };

  render() {
    const chatMensagens = this.state.chat.map((msg) => {
      return (
        <p>
          {msg.usuario}: {msg.mensagem}
        </p>
      );
    });
    return (
      <div className="App">
        <div className="DivChat">
          <div>{chatMensagens}</div>
        </div>
        <div className="Form">
         <input
            className="Nome"
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
         />
         <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            className="Mensagem"
            placeholder={"Mensagem"}
         />
         <button onClick={this.adicionaMensagem}>Enviar</button>
        </div>
     </div>
    );
  };

};

export default App;