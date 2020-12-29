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
    {console.log('je suis dans messages : ', tasks)}
    {tasks.map((task) => (
      <Message
        key={task.id}
        id={task.id}
        content={task.content}
      />
    ))}
  </ul>
);
Messages.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Messages;
