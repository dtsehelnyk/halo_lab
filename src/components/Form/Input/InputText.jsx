import React, { useState } from 'react';
import classNames from 'classnames';
import './Input.scss';

export const InputText = ({ handleInput, currentName, setCorrectName }) => {
  const [ nameError, setNameError ] = useState('');

  const inputValidation = (value) => {
    if (!value.trim()) {
      setNameError('This field in required');
      setCorrectName(false);

      return;
    }

    if (value.match(/[^a-zA-Z]/gi)) {
      setNameError('Only letters allowed');
      setCorrectName(false);

      return;
    }

    setNameError('');
    setCorrectName(true);
  }

  return (
    <div>
      <input
        type="tel"
        name="name"
        placeholder="Name"
        autoComplete="off"
        value={currentName}
        className={classNames("Input", {
          "Input--error": nameError,
        })}
        onBlur={() => inputValidation(currentName)}
        onChange={event => {
          handleInput(event);
          inputValidation(event.target.value)
          setNameError('');
        }}
      />

      <p className="Input__error">
        {nameError}
      </p>
    </div>
  )
}
