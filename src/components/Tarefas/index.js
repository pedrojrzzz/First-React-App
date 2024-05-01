import React from 'react';
import './Tarefas.css';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({ handleEdit, handleDelete, tarefas }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div className="editAndDelete">
            <FaEdit className="edit" onClick={(evento) => handleEdit(evento, index)} />
            <FaWindowClose className="delete" onClick={() => handleDelete(tarefa)} />
          </div>
          <div />
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
