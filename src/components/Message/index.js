/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './message.scss';

// == Composant
const Message = ({
  id,
  content,
  task,
  setTasks,
  tasks,
}) => {
  const finishTask = () => {
    console.log('je suis dans finishtask :');
  };
  const deleteTask = () => {
    console.log('je suis dans deletetask ');
    const newTasksArray = (tasks.filter((taskElement) => taskElement.id !== task.id));
    setTasks(newTasksArray);
  };
  return (
    <>
      <li id={id} className="message">
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
Message.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  setTasks: PropTypes.func.isRequired,
  task: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
// == Export
export default Message;
