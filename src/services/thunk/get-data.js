import {
    GET_DATA,
    GET_DATA_SUCCES,
    GET_DATA_FAILED,
  } from "../actions/burger-ingredients";
  const URL_INGREDIENTS = "https://norma.nomoreparties.space/api/ingredients";


  export function getData(){
       return function(dispatch){
           dispatch({ type: GET_DATA })
           fetch(`${URL_INGREDIENTS}`)
           .then((res) => {
             if (res.ok) {
               return res.json();
             }
             return Promise.reject(`${res.status}`);
           })
           .then((productData) => {
            dispatch({ type: GET_DATA_SUCCES, data: productData.data });
           }
           )
           .catch((e) => {
             console.log("упс... ошибка :(", e);
             dispatch({ type: GET_DATA_FAILED})
           });
       }
  }