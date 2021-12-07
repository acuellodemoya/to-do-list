import React from 'react';
import TaskItem from './TaskItem';

const List = (props) => {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { id, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === id ? checked : item.done,
    }));
    setList(updateList);
  };

  const onDelete = (e) => {
    const temp = list.filter((item) => item.id !== e.target.id);
    setList(temp);
  };

  const tasks = list.map((task) => (
    <TaskItem
      key={task.id}
      data={task}
      onChange={onChangeStatus}
      onDelete={onDelete}
    />
  ));
  return <div>{list.length ? tasks : <h2>No Tasks</h2>}</div>;
};

export default List;
