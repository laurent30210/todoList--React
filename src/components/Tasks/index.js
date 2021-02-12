// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Task from 'src/components/Task';

// == Composant
const Tasks = ({ tasks, setTasks }) => (
  <ul className="Tasks">
    {tasks.map((task) => (
      <Task
        key={task.id}
        id={task.id}
        content={task.content}
        task={task}
        setTasks={setTasks}
        tasks={tasks}
      />
    ))}
  </ul>
);
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTasks: PropTypes.func.isRequired,

};

// == Export
export default Tasks;
