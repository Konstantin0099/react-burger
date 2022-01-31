import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import { dataOrder } from "../../utils/data.js";
import Modal from "../modal/modal.js";
import IngredientDetails from "../ingredient-details/ingredient-details.js";
import OrderDetails from "../order-details/order-details.js";
const URL_INGREDIENTS = "https://norma.nomoreparties.space/api/ingredients"
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
      .then((res) => res.json())
      .then((productData) =>
        setState((state) => ({ ...state, data: productData.data }))
      )
      .catch((e) => {
        console.log("ошибка", e);
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
    toggleVisible(<OrderDetails id="337733" />);
  };

  return (
    <div className={style.app}>
      <AppHeader />
      {state.visible && (
        <Modal toggleVisible={toggleVisible}>{state.popap}</Modal>
      )}
      <main className={style.main}>
        <BurgerIngredients
          data={state.data}
          dataOrder={state.dataOrder}
          openPopup={openPopupInredients}
        />
        <BurgerConstructor
          data={state.data}
          dataOrder={state.dataOrder}
          openPopupOrder={openPopupOrder}
        />
      </main>
    </div>
  );
};
export default App;
