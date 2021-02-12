// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './task.scss';

// == Composant
const Task = ({
  id,
  content,
  task,
  setTasks,
  tasks,
}) => {
  const finishTask = () => {
    setTasks(tasks.map((taskElement) => {
      if (taskElement.id === task.id) {
        return { ...taskElement, done: !taskElement.done };
      }
      return taskElement;
    }));
  };
  const deleteTask = () => {
    const newTasksArray = (tasks.filter((taskElement) => taskElement.id !== task.id));
    setTasks(newTasksArray);
  };
  return (
    <>
      <li id={id} className={task.done ? 'task task--completed' : 'task'}>
        {content}
        <button
          type="button"
          className="button button__check"
          onClick={finishTask}
        >
          <i className="far fa-check-circle" />
        </button>
        <button
          type="button"
          className="button button__trash"
          onClick={deleteTask}
        >
          <i className="far fa-trash-alt" />
        </button>
      </li>
    </>
  );
};
Task.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  setTasks: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Task;
