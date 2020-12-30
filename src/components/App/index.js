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
  const [value, setValue] = useState('');
  const [id, setId] = useState(0);
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <Form
        value={value}
        setValue={setValue}
        tasks={tasks}
        setTasks={setTasks}
        id={id}
        setId={setId}
      />
      <Counter counter={counter} />
      <Messages
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

// == Export
export default App;
