// == Import npm
import React, { useState } from 'react';

import Form from 'src/components/Form';
import Counter from 'src/components/Counter';
import Tasks from 'src/components/Tasks';
// == Import
import './app.scss';

// == Composant
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');
  const [id, setId] = useState(0);

  const tasksPending = tasks.filter((task) => !task.done).length;

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
      <Counter
        counter={tasksPending}
      />
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
};

// == Export
export default App;
