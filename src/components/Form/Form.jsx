import React, { useState } from 'react';
import './Form.scss';

export const Form = () => {
  const [ currentProduct, setProduct ] = useState('');
  const [ currentAmount, setAmount ] = useState(1);

  const [ isEmpty, setEmptyState ] = useState(true);
  const [ error, setError ] = useState('');

  const sendData = (good, amount) => {
    if (!good.trim()) {
      return;
    }
    
    console.log(good, amount);
  }

  return (
    <form
      action=""
      className="Form"
      onSubmit={(event) => {
        event.preventDefault();
        sendData(currentProduct, currentAmount);
        setProduct('');
        setAmount(1);
      }}
    >
      <input
        type="text"
        name="product"
        placeholder="Name"
        autoComplete="off"
        value={currentProduct}
        className="Form__input"
        onChange={event => setProduct(event.target.value)}
      />

      <p className="Form__error">
        {error}
      </p>

      <input
        type="number"
        name="product"
        placeholder="Name"
        autoComplete="off"
        value={currentAmount}
        className="Form__input"
        min="1"
        onChange={event => {
          if (+currentAmount < 1) {
            setAmount(1);
            return;
          }
          setAmount(event.target.value);
        }}
      />

      <p className="Form__error">
        {error}
      </p>

      <button
        className="Form__button"
        type="submit"
      >
        Order
      </button>
    </form>
  )
}
