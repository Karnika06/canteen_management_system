import {
    ALL_FOODITEM_REQUEST,
    ALL_FOODITEM_SUCCESS,
    ALL_FOODITEM_FAIL,
    CLEAR_ERRORS,
  } from "./constants/foodConstants";
  
  export const foodReducer = (state = { fooditems: [] }, action) => {
    switch (action.type) {
      case ALL_FOODITEM_REQUEST:
        return {
          loading: true,
          fooditems: [],
        };
      case ALL_FOODITEM_SUCCESS:
        return {
          loading: false,
          fooditems: action.payload.fooditems,
          fooditemCount: action.payload.fooditemCount,
        };
  
      case ALL_FOODITEM_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };