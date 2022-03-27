import './App.css';
import React, { useEffect } from 'react';
// import MessageItem from './components/MessageItem';


class App extends React.Component {

  state = {
    chat: [
      { usuario: "Adernam", mensagem: "Olá tudo bem", hora: "19:00" }
    ],
    valorInputUsuario: "",
    valorInputMensagem: "",
    // date: new Date(),
    // hour: date.getHours(),
    // minutes: date.getMinutes(),
    // seconds: date.getSeconds(),
    // hourAndMinutes: `${hour}: ${minutes}: ${seconds}`;
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

    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let hourAndMinutes = `${hour}:${minutes}`

    const chatMensagens = this.state.chat.map((msg) => {
      return (
        <div className="MessageItem">
            <p className="MessageText">{msg.usuario}: {msg.mensagem}</p>
            <p className="MessageHour">{hourAndMinutes}</p>
        </div>
      );
  });


    return (
      <div className="App">
        <div className="container">

          <div className="divChat">
            {chatMensagens}
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
              placeholder={"Digite uma mensagem"}
            />
            <button onClick={this.adicionaMensagem}>Enviar</button>
          </div>
        </div>
      </div>
    );
  };

};

export default App;