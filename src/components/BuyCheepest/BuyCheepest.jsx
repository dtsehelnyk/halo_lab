import React, { useContext } from 'react';
import { ModalContext } from '../../ModalContext';
import './BuyCheepest.scss';

export const BuyCheepest = () => {
  const { toggleModal } = useContext(ModalContext);

  return (
    <button
      className="BuyCheepest"
      type="button"
      onClick={toggleModal}
    >
      Buy Cheepest
    </button>
  )
}