/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './counter.scss';

// == Composant
const Counter = ({ counter }) => (
  <div className="counter">
    {counter < 1 ? "vous n'avez pas de tâche en cours" : `vous avez ${counter} tache en cours` }
  </div>
);
Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};
// == Export
export default Counter;
