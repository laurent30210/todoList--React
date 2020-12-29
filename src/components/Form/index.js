/* eslint linebreak-style: ["error", "windows"] */

// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './form.scss';

// == Composant
const Form = ({
  value,
  setValue,
  tasks,
  setTasks,
  id,
  setId,
}) => {
  const submitTask = (event) => {
    event.preventDefault();
    setId(id + 1);
    setTasks([...tasks, {
      id,
      content: value,
      done: false,
    }]);
    setValue('');
  };

  return (
    <form
      className="form"
      onSubmit={submitTask}
    >
      <input
        className="form__input"
        type="text"
        placeholder="Indiquer votre tache ici"
        value={value}
        onChange={(event) => {
          const newValue = event.target.value;
          setValue(newValue);
        }}
      />
    </form>
  );
};
Form.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setTasks: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  id: PropTypes.number.isRequired,
  setId: PropTypes.func.isRequired,
};
// == Export
export default Form;
