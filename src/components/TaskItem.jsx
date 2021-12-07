import React from 'react';

const TaskItem = (props) => {
  const {
    onChange,
    onDelete,
    data: { id, nombre, done },
  } = props;
  return (
    <div className="task-item">
      <label className="task-check">
        <input
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
          id={id}
        />
      </label>
      <div className={done ? 'task-completed' : 'task-name'}>{nombre}</div>
      <button className="btn-delete" onClick={onDelete} id={id}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
