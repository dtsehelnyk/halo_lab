import React from 'react';
import './BuyCheepest.scss';

export const BuyCheepest = ({ modal, openModal }) => {

  return (
    <button
      className="BuyCheepest"
      type="button"
      onClick={() => openModal(modal)}
    >
      Buy Cheepest
    </button>
  )
}
