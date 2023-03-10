// import dotenv from 'dotenv';
import axios from "axios";

// import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, SEARCH_CLOTHES, CREATE_PRODUCT, ORDER_BY, CREATE_P_REVIEW, GET_REVIEWS, REVIEWS_FILTER, } from "./cases";

// dotenv.config();

const URL = "https://back-ecommerce.up.railway.app";

export function searchClothes(name) {
  return async function (dispatch) {
    try {
      const clothes = await axios(`${URL}/products?name=${name}`);
      dispatch({
        type: 'SEARCH_CLOTHES',
        payload: clothes.data,
      });
    } catch (error) {
      alert("not found");
    }
  };
}

export const allClothes = () => {
  return async function (dispatch) {
    try {
      const allClothes = await axios(`${URL}/products`)
      dispatch({
        type: 'ALL_CLOTHES',
        payload: allClothes.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const clothesDetail = (id) => {
  return async function (dispatch) {
    try {
      const clothesDetail = await axios(`${URL}/products/${id}`)
      dispatch({
        type: 'CLOTHES_DETAIL',
        payload: clothesDetail.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const categories = () => {
  return async function (dispatch) {
    try {
      const category = await axios(`${URL}/category`)
      dispatch({
        type: 'CATEGORIES',
        payload: category.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const createProduct = (product) => {
  return async function (dispatch) {
    try {
      await axios.post(`${URL}/products`, product)
      const allClothes = await axios(`${URL}/products`)
      dispatch({
        type: 'CREATE_PRODUCT',
        payload: allClothes.data
      })
    } catch(error) {
      alert("cannot create product")
    }
  }
}

// ------  filtros -------

export function orderBy(payload) {
  return { type: 'ORDER_BY', payload }
}

export function filter(payload) {
  return { type: 'FILTER', payload }
}

// ---------- users ---------------
export const allUsers = () => {
  return async function (dispatch) {
    try {
      const allUsers = await axios(`${URL}/user`)
      dispatch({
        type: 'ALL_USERS',
        payload: allUsers.data
      })
    } catch (error) {
      console.log('Error action allUsers',error);
    }
  }
}

export const updateUserStatus = (id, payload) => {
  return async function (dispatch) {
    try {
      const update = await axios.put(`${URL}/user/${id}`, payload)
      const allUsers = await axios(`${URL}/user`)
      dispatch({
        type: 'UPDATE_USER_STATUS',
        payload: allUsers.data
      })
    } catch (error) {
      console.log('error en action/updateUserStatus', error);
    }
  }
}

//-----------------------Reviews-------------------------

export function createProductReview(payload){
  return async function(dispatch){
    try {
      let json = await axios.post(`${URL}/reviews`, payload)
      dispatch({
          type: 'CREATE_P_REVIEW',
          payload: json.data
      })
    } catch (error) {
      console.log('error en action createReviews', error)
    }
  }
}
export function reviewsFilter(payload) {
  return { type: 'REVIEWS_FILTER', payload: payload }
}
export function getPReviews() {
  return async function (dispatch) {
      const allData = await axios.get(`${URL}/reviews`)
      return dispatch({ type: 'GET_REVIEWS', payload: allData.data })
  }
}

//-----------------------cart-----------------------

export const addCart = (prod) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'ADD_CART',
        payload: prod
      })
    } catch (error) {
      console.log("error en addCart action", error);
    }
  }
}

export const removeCartProduct = (prod) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'REMOVE_CART_PRODUCT',
        payload: prod
      })
    } catch (error) {
      console.log("error en remove cart action", error);
    }
  }
}
export const checkout = () => {
  return async function (dispatch) {
    try {
      const compra = await axios(`${URL}/generar`)
      dispatch({
        type: 'CHECKOUT',
        payload: compra.data
      })
    } catch (error) {
      console.log('error en action/checkOut', error);
    }
  }
}
