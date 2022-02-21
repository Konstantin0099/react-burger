import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import { dataOrder } from "../../utils/data.js";
import Modal from "../modal/modal.js";
import IngredientDetails from "../ingredient-details/ingredient-details.js";
import { IngredientsContext } from "../../services/appContext";
import OrderDetails from "../order-details/order-details.js";

const URL_INGREDIENTS = "https://norma.nomoreparties.space/api/ingredients";
const URL_ORDER = "https://norma.nomoreparties.space/api/orders";

const App = () => {
  const [state, setState] = React.useState({
    data: [],
    dataOrder: dataOrder,
    visible: false,
    item: {},
    popap: {},
  });

  React.useEffect(() => {
    fetch(`${URL_INGREDIENTS}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`${res.status}`);
      })
      .then((productData) =>
        setState((state) => ({ ...state, data: productData.data }))
      )
      .catch((e) => {
        console.log("упс... ошибка :(", e);
      });
  }, []);

  const toggleVisible = (popap: {}) => {
    setState({ ...state, visible: !state.visible, popap: popap });
  };
  const openPopupInredients = (item: {}) => {
    setState({ ...state, item: item });
    toggleVisible(<IngredientDetails item={item} />);
  };
  const openPopupOrder = () => {
    const arrDataID = state.dataOrder.map((el) => {
      return el._id;
    });
    fetch(`${URL_ORDER}`, {
      method: "POST",
      body: JSON.stringify({
        ingredients: arrDataID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then((order) => {
        toggleVisible(<OrderDetails id={order.order.number} />);
      })
      .catch((e) => {
        console.log("catch ошибка ", e);
      });
  };
  console.log("App", state);
  return (
    <div className={style.app}>
      <AppHeader />
      {state.visible && (
        <Modal toggleVisible={toggleVisible}>{state.popap}</Modal>
      )}
      <main className={style.main}>
        <IngredientsContext.Provider
          value={{ state }}
        >
          <BurgerIngredients
            data={state.data}
            dataOrder={state.dataOrder}
            openPopup={openPopupInredients}
          />
          <BurgerConstructor
            openPopupOrder={openPopupOrder}
          />
        </IngredientsContext.Provider>
      </main>
    </div>
  );
};
export default App;
