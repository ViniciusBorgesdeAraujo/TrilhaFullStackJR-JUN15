import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

const api = axios.create({
  baseURL: "https://trilhafullstackjr-jun15.onrender.com/api",
});

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await api.get(`/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
