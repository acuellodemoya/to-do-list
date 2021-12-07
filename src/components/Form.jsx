import React, { useState } from 'react';

const Form = (props) => {
  const { handleAdd } = props;
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd({
      done: false,
      id: (+new Date()).toString(),
      name,
    });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <input
          type="text"
          className="input-text"
          placeholder="task name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn-add" disabled={name ? '' : 'disabled'}>
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
