import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import './App.scss';
import '../../styles/utils.scss';
import ReactDOM from 'react-dom';

import { getProducts } from '../../api/api';
import { Cards } from '../Cards/Cards';
import { BuyCheepest } from '../BuyCheepest/BuyCheepest';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';

import { closeModal, openModal } from '../../store/actions/actionModals';

function App({ modal, openModal, closeModal }) {
  const [ products, setProducts ] = useState([]);
  const [ cheepestProduct, setCheepest ] = useState({});

  useEffect( async() => {
    const productsFromServer = await getProducts();

    setProducts(productsFromServer);
    setCheepest([...productsFromServer]
      .sort((prodA, prodB) => prodA.price - prodB.price)[0]
    );
  }, []);

  return (
    <>
      <main className="App">
        <Cards
          products={products}
          openModal={openModal}
        />
        <BuyCheepest
          modal={cheepestProduct}
          openModal={openModal}
        />
      </main>

      <div>
        {modal && 
          <ModalOverlay
            modal={modal}
            closeModal={closeModal}
          />
        }
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    modal: state.reducerForModal.currentProduct,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    openModal: modal => {
      dispatch(openModal(modal))
    },

    closeModal: () => {
      dispatch(closeModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
