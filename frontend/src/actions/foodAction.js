import axios from "axios";
import {
  ALL_FOODITEM_REQUEST,
  ALL_FOODITEM_SUCCESS,
  ALL_FOODITEM_FAIL,
  CLEAR_ERRORS,
} from "../constants/foodConstants";

export const getFooditem = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_FOODITEM_REQUEST,
    });
    const {data} = await axios.get("http://localhost:4000/api/v1/fooditems");

    dispatch({
        type: ALL_FOODITEM_SUCCESS,
        payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_FOODITEM_FAIL,
      payload: error.response.data.message,
    });
  }
};


//clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};