import React, { useContext } from 'react';
import './ModalOverlay.scss';

import { Form } from '../Form/Form';
import { ModalContext } from '../../ModalContext';

export const ModalOverlay = () => {
  const { toggleModal } = useContext(ModalContext);

  return (
    <div className="ModalOverlay">
      <div className="ModalOverlay__content">
        <button
          className="ModalOverlay__close"
          onClick={toggleModal}
        ></button>

        <h3 className="ModalOverlay__category">
          category
        </h3>
          
        <h2 className="ModalOverlay__name">
          product
        </h2>

        <p className="ModalOverlay__price">
          <span className="ModalOverlay__currency">$</span>
          <strong className="ModalOverlay__value">
            1000
          </strong>
        </p>

        <Form />
      </div>
    </div>
  )
}

