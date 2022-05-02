import { useSelector, useDispatch } from "react-redux";

export const initialState = {
  cart: null,
  total: null,
};


const INIT_STATE = {
  carts: [],
  total: 0
};



export const CartReducer = (state = INIT_STATE, action) => {

  // const { loading, error, fooditems, fooditemCount } = useSelector((state) => state.fooditems);

  // const itemIndexUpd = fooditems.findIndex((item) => item._id === action.payload._id);
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1; 
      } else {
        const temp = { ...action.payload, qty: 1 };

        // fooditems[itemIndexUpd].food_quantity = fooditems[itemIndexUpd].food_quantity - 1;
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "REMOVE_CART":
      const data = state.carts.filter((ele) => ele._id !== action.payload);
      // fooditems[itemIndexUpd].food_quantity = fooditems[itemIndexUpd].food_quantity + 1;
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
        //console.log([...state.carts, deleteItem]);
        // fooditems[itemIndexUpd].food_quantity = fooditems[itemIndexUpd].food_quantity + 1;
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

      case "SET_TOTAL":
        return{
          ...state,
          total: action.payload
        }

      // case "UPDATE_QTY":
      //   const itemIndexUpd = state.carts.findIndex((item) => item._id === action.payload._id);
      //   state.carts[itemIndexUpd].food_quantity -= state.carts[itemIndexUpd].qty;
    default:
      return state;
  }
};
