import React from 'react';
import './Form.css';
import PropTypes from 'prop-types';

import { FaPlus } from 'react-icons/fa';

export default function Form({ handleSubmit, handleChange, novaTarefa }) {
  return (

    <form action="#" className="form" onSubmit={handleSubmit}>

      <input
       onChange={handleChange}
       type="text"
       value={novaTarefa}
       id="addTaskInput"
      />

      <button type="submit">
        <FaPlus />
      </button>

    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
