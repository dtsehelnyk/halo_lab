import React, { useState } from 'react';
import classNames from 'classnames';
import './Input.scss';

export const InputNumber = ({ handleInput, currentPhone, setCorrectPhone }) => {
  const [ phoneError, setPhoneError ] = useState('');

  const inputValidation = (value) => {
    if (!value.trim()) {
      setPhoneError('This field in required');
      setCorrectPhone(false);

      return;
    }

    if (value.match(/[^0-9]/gi)) {
      setPhoneError('Only numbers allowed');
      setCorrectPhone(false);

      return;
    }

    if (value.length !== 12) {
      setPhoneError('Should contain 12 characters')

      return;
    }

    setPhoneError('');
    setCorrectPhone(true);
  }

  return (
    <div>
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        autoComplete="off"
        value={currentPhone}
        className={classNames("Input", {
          "Input--error": phoneError,
        })}
        onBlur={() => inputValidation(currentPhone)}
        onChange={event => {
          handleInput(event);
          inputValidation(event.target.value)
          setPhoneError('');
        }}
      />

      <p className="Input__error">
        {phoneError}
      </p>
    </div>
  )
}
