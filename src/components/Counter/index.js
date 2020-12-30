/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './counter.scss';

// == Composant
const Counter = ({ counter }) => (
  <div className="counter">
    <p className="counter__content"><span className="counter__content__count">{counter}</span>{counter <= 1 ? ' tâche en cours' : ' tâches en cours'}</p>
  </div>
);
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};
// == Export
export default Counter;
