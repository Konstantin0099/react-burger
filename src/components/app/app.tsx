import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import { dataOrder } from "../../utils/data.js";

const App = () => {
  const [state, setState] = React.useState({
    data: [],
    dataOrder: dataOrder,
  });

  React.useEffect(() => {
    getProductData();
  }, []);

  const getProductData = () => {
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((res) => res.json())
      .then((productData) => setState({ ...state, data: productData.data }))
      .catch((e) => {
        console.log("ошибка", e);
      });
  };

  return (
    <div className={style.app}>
      <AppHeader />
      <main className={style.main}>
        <BurgerIngredients data={state.data} dataOrder={state.dataOrder} />
        <BurgerConstructor data={state.data} dataOrder={state.dataOrder} />
      </main>
    </div>
  );
};
export default App;
