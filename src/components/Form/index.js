/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './form.scss';

// == Composant
const Form = ({ onValue, onInputChange, handleSubmit }) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
  >
    <input
      className="form__input"
      type="text"
      placeholder="Indiquer votre tache ici"
      value={onValue}
      onChange={(event) => {
        const newValue = event.target.value;
        onInputChange(newValue);
      }}
    />
  </form>
);
Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
// == Export
export default Form;
