import React, { useState } from 'react';
import './Form.scss';
import image from '../../img/arrow-right.svg';

import { InputText } from './Input/InputText';
import { InputNumber } from './Input/InputNumber';

export const Form = () => {
  const [ currentName, setName ] = useState('');
  const [ currentPhone, setPhone ] = useState('');

  const [ isCorrectName, setCorrectName ] = useState('');
  const [ isCorrectPhone, setCorrectPhone ] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'number':
        setPhone(value);
        break;
      
      case 'name':
        setName(value);
        break;
    
      default:
        break;
    }
  }

  return (
    <form
      action=""
      className="Form"
      onSubmit={(event) => {
        event.preventDefault();

        if (isCorrectName && isCorrectPhone) {
          console.log(currentName, currentPhone);
          setName('');
          setPhone('');
          setCorrectName(false);
          setCorrectPhone(false);
        }
      }}
    >
      <InputText
        handleInput={handleInput}
        currentName={currentName}
        setCorrectName={setCorrectName}
      />

      <InputNumber
        handleInput={handleInput}
        currentPhone={currentPhone}
        setCorrectPhone={setCorrectPhone}
      />

      <button
        className="Form__button"
        type="submit"
      >
        Order
        <img src={image} alt="arrow right"/>
      </button>
    </form>
  )
}
