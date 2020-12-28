/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './message.scss';

// == Composant
const Message = ({ content, id, done }) => (
  <li className="message">
    <input
      className="message__checkbox"
      type="checkbox"
      id={id}
      defaultChecked={done}
    />
    <label
      htmlFor={id}
      className="message__content"
    >
      {content}
    </label>
  </li>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  done: PropTypes.bool.isRequired,
};
// == Export
export default Message;
