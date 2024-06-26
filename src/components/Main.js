import React, { Component } from 'react';
import './Main.css';

import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks === null) return;

    this.setState({
      tarefas: storedTasks,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tasks', JSON.stringify(tarefas));
  }

  handleChange = (evento) => {
    this.setState({ // setState para definir estado
      novaTarefa: evento.target.value,
    });
  };

  handleSubmit = (evento) => {
    evento.preventDefault();
    const { novaTarefa, tarefas, index } = this.state;

    if (novaTarefa.length < 1) return;
    if (tarefas.indexOf(novaTarefa) !== -1) return; // Verificar se a tarefa já existe no array

    if (index === -1) { // Criando task nova
      this.setState({
        tarefas: [...tarefas, novaTarefa.trim()],
        novaTarefa: '',
      });
    } else { // Editando uma task
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: novasTarefas,
        index: -1,
      });
    }
  };

  handleEdit = (evento, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (index) => {
    const { tarefas } = this.state;
    const position = tarefas.indexOf(index);
    const newTasks = [...tarefas];
    newTasks.splice(position, 1);
    this.setState({
      tarefas: newTasks,
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state; // Props

    return (
      <div className="main">
        <h1>Lista de tarefa</h1>

        <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            novaTarefa={novaTarefa}
        />

        <Tarefas
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            tarefas={tarefas}
        />

      </div>
    );
  }
}
