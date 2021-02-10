import React, { useState } from 'react';

import './App.scss';
import './styles/utils.scss';
import ReactDOM from 'react-dom';
import { Cards } from './components/Cards/Cards';
import { BuyCheepest } from './components/BuyCheepest/BuyCheepest';
import { ModalOverlay } from './components/ModalOverlay/ModalOverlay';
import { ModalContext } from './ModalContext';

function App() {
  const [ isVisibleModal, setModalVisibility ] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!isVisibleModal);
  }

  return (
    <ModalContext.Provider value={{isVisibleModal, toggleModal}}>
      <main className="App">
        <Cards />
        <BuyCheepest />
      </main>

      <div>
        {isVisibleModal && 
          ReactDOM.createPortal(
            <ModalOverlay />,
            document.getElementById('portal')
          )
        }
      </div>
    </ModalContext.Provider>
  );
}


export default App;
