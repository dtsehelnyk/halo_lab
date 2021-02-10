import React from 'react';

export const ModalContext = React.createContext({
  visibility: false,
  toggleModal: () => {},
});
