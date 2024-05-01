/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

// Propos abreviação de Propriedades
export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

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
    } else {
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
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefa</h1>

        <form action="#" className="form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={novaTarefa} id="addTaskInput" />
          <button type="submit"><FaPlus /></button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div className="editAndDelete">
                <FaEdit className="edit" onClick={(evento) => this.handleEdit(evento, index)} />
                <FaWindowClose className="delete" onClick={() => this.handleDelete(tarefa)} />
              </div>
              <div />
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
