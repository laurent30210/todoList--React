/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import Message from 'src/components/Message';
// == Import
import './messages.scss';

// == Composant
const Messages = ({ tasks }) => (
  <ul className="messages">
    {tasks.map((task) => (
      <Message
        key={task.id}
        content={task.label}
        id={task.id}
        done={task.done}
      />
    ))}
  </ul>
);
Messages.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Messages;
