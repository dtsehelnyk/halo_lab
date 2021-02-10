import React, { useContext } from 'react';
import './Card.scss';

import { ModalContext } from '../../ModalContext';

export const Card = ({ product, id }) => {
  const { toggleModal } = useContext(ModalContext);

  const { category, name, price } = product;

  return (
    <div className="Card">
      <h3 className="Card__category">
        {category}
      </h3>
      <h2 className="Card__title">
        {name}
      </h2>

      <div className="Card__additional">
        <p className="Card__price">
          <span className="Card__currency">$</span>
          <strong className="Card__price-value">{price}</strong>
        </p>
        <button
          className="Card__button"
          onClick={toggleModal}
        >
          Buy
        </button>
      </div>
    </div>
  )
}
