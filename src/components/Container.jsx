import React, { useState } from 'react';
import Form from './Form';
import List from './List';

const Container = () => {
  const [list, setList] = useState([]);

  const handleAdd = (item) => {
    setList([...list, item]);
  };

  return (
    <div className="container">
      <h1 className="title">To Do List</h1>
      <Form handleAdd={handleAdd} />
      <List list={list} setList={setList} />
    </div>
  );
};

export default Container;
