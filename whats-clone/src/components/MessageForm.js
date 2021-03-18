import React from 'react';

export class MessageForm extends React.Component {
  state = {
      mensagens:[],

      ValorInputUsuario: "",
      ValorInputMensagem: "",
    
    };

  onChangeUser = (event) => {
    this.setState({ValorInputUsuario: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({ValorInputMensagem: event.target.value})
  }

  onSendMessage = () => {
    const novaMensagem = {
      usuario: this.state.ValorInputUsuario,
      mensagem: this.state.ValorInputMensagem
    };
    const novasMensagens = [...this.state.mensagens, novaMensagem];
    this.setState({mensagens: novasMensagens});
    this.setState({ValorInputMensagem: ""})
    
  }

  

  render() {

const listaDeComponentes = this.state.mensagens.map((mensagem) =>{
    return(
      <p> <b>{mensagem.usuario}</b> :  {mensagem.mensagem} </p>
    );
})

    return (
      <div>
        <div>{listaDeComponentes}</div>
        <input type="text" placeholder={'Usuário'} onChange={this.onChangeUser} value={this.state.ValorInputUsuario}/>
        <input type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.ValorInputMensagem}/>
        <button onClick={this.onSendMessage} type="submit">Enviar</button>
        
      </div>
    );
  };
}