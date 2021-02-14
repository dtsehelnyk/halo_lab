const initialState = {
  currentProduct: null,
}

const reducerForModal = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        currentProduct: action.payload,
      }

    case 'CLOSE_MODAL':
      return {
        ...state,
        currentProduct: null,
      }

    default:
      return state;
  }
}

export default reducerForModal;
