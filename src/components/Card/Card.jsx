import React from 'react';
import './Card.scss';

export const Card = ({ product, id }) => {
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
        <button className="Card__button">Buy</button>
      </div>
    </div>
  )
}