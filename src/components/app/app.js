import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
// import { dataOrder } from "../../utils/data.js";
import Modal from "../modal/modal.js";
import IngredientDetails from "../ingredient-details/ingredient-details.js";
import { IngredientsContext } from "../../services/appContext";
import OrderDetails from "../order-details/order-details.js";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_VISIBLE,
  OPEN_POPUP_INGREDIENTS,
  OPEN_POPUP_ORDER,
} from "../../services/actions/modal";



// const URL_INGREDIENTS = "https://norma.nomoreparties.space/api/ingredients";
// const URL_ORDER = "https://norma.nomoreparties.space/api/orders";

const App = () => {
  const dispatch = useDispatch();
  // const { dataOrder} = useSelector(state => state.dataOrder);
  const { data, visible, dataOrder }= useSelector(state => state);
  // console.log("App-", data, visible);

  const [state, setState] = React.useState({
    // visible: false,
    item: {},
    popup: {},
  });


  const toggleVisible = (popup) => {
    dispatch({ type: TOGGLE_VISIBLE})
  };
  // const openPopupIngredients = (item) => {
  //   setState({ ...state, item: item });
  //   toggleVisible(<IngredientDetails item={item} />);
  // };
  const openPopupOrder = () => {
    const arrDataID = dataOrder.map((el) => {
      return el._id;
    });
    // fetch(`${URL_ORDER}`, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     ingredients: arrDataID,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     return Promise.reject(`Ошибка: ${res.status}`);
    //   })
    //   .then((order) => {
    //     toggleVisible(<OrderDetails id={order.order.number} />);
    //   })
    //   .catch((e) => {
    //     console.log("catch ошибка ", e);
    //   });
  };
  // console.log("App", state);
  return (
    <div className={style.app}>
      <AppHeader />
      {visible && (
        <Modal toggleVisible={toggleVisible}>{state.popup}</Modal>
      )}
      <main className={style.main}>
        <IngredientsContext.Provider
          value={{ state }}
        >
          <BurgerIngredients
            // openPopup={openPopupIngredients}
          />
          <BurgerConstructor
            // openPopupOrder={openPopupOrder}
          />
        </IngredientsContext.Provider>
      </main>
    </div>
  );
};
export default App;
