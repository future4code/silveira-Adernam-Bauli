import './App.css';
import React, { useEffect } from 'react';
import { getAllByPlaceholderText } from '@testing-library/react';
// import MessageItem from './components/MessageItem';


class App extends React.Component {
  getFormatDate = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hour}:${minutes}:${seconds}`
  }

  state = {
    chat: [
      { usuario: "Adernam", mensagem: "Olá tudo bem", time: this.getFormatDate() }
    ],
    valorInputUsuario: "",
    valorInputMensagem: "",
  }

  adicionaMensagem = (event) => {
    event.preventDefault();
    const novaMensagem = {
      usuario: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
      time: this.getFormatDate()
    }

    this.state.chat.push(novaMensagem)
    this.state.valorInputMensagem = "";

    this.setState({})

    // this.setState({
    //   valorInputMensagem: "",
    // },

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


  chatMensagens = () => {
    return this.state.chat.map((msg) => {
      return (
        <div className="MessageItem">
          <p className="MessageText">{msg.usuario}: {msg.mensagem}</p>
          <p className="MessageHour">{msg.time}</p>
        </div>
      );
    });
  }

  funcaoTeste = (event) => {
    if (event.keyCode === 13 && this.state.mensagem) {
      this.adicionaMensagem()
      document.getElementById("Mensagem").focus();
    }
  }

  render() {

    return (
      <div className="App">
        <div className="container" >
          <div className="divChat">
            {this.chatMensagens()}
          </div>
          <form className="Form" onSubmit={this.adicionaMensagem}>
            <input
              className="Nome"
              value={this.state.valorInputUsuario}
              onChange={this.onChangeInputUsuario}
              placeholder={"Usuário"}
            />
            <input
              id="Mensagem"
              className="Mensagem"
              onKeyDown={this.funcaoTeste}
              value={this.state.valorInputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Digite uma mensagem"}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  };

};

export default App;