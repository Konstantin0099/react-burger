
import style from "./app.module.css";
import AppHeader from "../app-header/app-header.js";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.js";
import BurgerConstructor from "../burger-constructor/burger-constructor.js";
import Modal from "../modal/modal.js";
import { useSelector } from "react-redux";

const App = () => {
  const { visible } = useSelector((state) => state);
  return (
    <div className={style.app}>
      <AppHeader />
      {visible && <Modal></Modal>}
      <main className={style.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
};
export default App;
