import React from 'react';
import './ModalOverlay.scss';

import { Form } from '../Form/Form';

export const ModalOverlay = ({ modal, closeModal }) => {

  return (
    <div className="ModalOverlay">
      <div className="ModalOverlay__content">
        <button
          className="ModalOverlay__close"
          onClick={() => closeModal()}
        ></button>

        <h3 className="ModalOverlay__category">
          {modal.category}
        </h3>
          
        <h2 className="ModalOverlay__name">
          {modal.name}
        </h2>

        <p className="ModalOverlay__price">
          <span className="ModalOverlay__currency">$</span>
          <strong className="ModalOverlay__value">
            {modal.price}
          </strong>
        </p>

        <Form />
      </div>
    </div>
  )
}

