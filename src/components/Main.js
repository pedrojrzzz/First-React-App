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
  };

  handleChange = (evento) => {
    this.setState({ // setState para definir estado
      novaTarefa: evento.target.value,
    });
  };

  handleSubmit = (evento) => {
    evento.preventDefault();
    const { novaTarefa, tarefas } = this.state;

    if (novaTarefa.length < 1) return;
    if (tarefas.indexOf(novaTarefa) !== -1) return; // Verificar se a tarefa já existe no array
    this.setState({
      tarefas: [...tarefas, novaTarefa.trim()],
      novaTarefa: '',
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
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <div className="editAndDelete">
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
              <div />
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
