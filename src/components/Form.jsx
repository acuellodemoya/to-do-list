import React, { useState } from 'react';

const Form = (props) => {
  const { handleAdd } = props;
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({
      done: false,
      id: (+new Date()).toString(),
      nombre,
    });
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input
          type="text"
          className="input-text"
          placeholder="Nombre de la tarea"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <button className="btn-add" disabled={nombre ? '' : 'disabled'}>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
