/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
// == Import
import './message.scss';

// == Composant
const Message = ({ id, content }) => (
  <>
    <li id={id} className="message">
      {content}
      <button type="button"><i className="far fa-check-circle" /></button>
      <button type="button"><i className="far fa-trash-alt" /></button>
    </li>
  </>
);
Message.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};
// == Export
export default Message;
