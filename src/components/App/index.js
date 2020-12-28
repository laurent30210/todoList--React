/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React, { useState } from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Messages from 'src/components/Messages';
// == Import
import './app.scss';

// == Composant
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0);
  const [isDone, setDone] = useState(false);
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);

  function onSubmit() {
    setId(id + 1);
    const newTask = {
      id,
      label: value,
      done: isDone,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setCounter(counter + 1);
    setValue('');
  }
  return (
    <div className="app">
      <Form
        onValue={value}
        onInputChange={setValue}
        handleSubmit={onSubmit}
      />
      <Counter counter={counter} />
      <Messages
        tasks={tasks}
      />
    </div>
  );
};

// == Export
export default App;
