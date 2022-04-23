export const initialState = {
  cart: null,
  total: null,
};

export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state, action) => {
  //console.log(action);

  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };

    default:
      return state;
  }
};

const INIT_STATE = {
  carts: [],
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };

        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_CART":
      const data = state.carts.filter((ele) => ele._id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "REMOVE_ONE":
      const itemIndexRmv = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.carts[itemIndexRmv].qty >= 1) {
        const deleteItem = (state.carts[itemIndexRmv].qty -= 1);
        console.log([...state.carts, deleteItem]);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const data = state.carts.filter((ele) => ele._id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};

export default reducer;
